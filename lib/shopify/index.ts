import { MOCK_PRODUCTS } from "./mock-data";
import { Product } from "./types";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_API_VERSION || "2025-01";

const isShopifyConfigured = Boolean(
  domain &&
  storefrontAccessToken &&
  !domain.includes("company-name-handle") &&
  storefrontAccessToken !== ""
);

export async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T | null> {
  if (!isShopifyConfigured) {
    return null;
  }

  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken!,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      console.warn(`Shopify GraphQL HTTP error: ${response.statusText}`);
      return null;
    }

    const json = await response.json();
    if (json.errors) {
      console.warn("Shopify GraphQL errors:", json.errors);
      return null;
    }

    return json.data;
  } catch (err) {
    console.warn("Shopify connection unreachable. Serving mock fallbacks.", err);
    return null;
  }
}

const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          productType
          availableForSale
          featuredImage {
            url
            altText
            width
            height
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                availableForSale
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function getProducts(category?: string): Promise<Product[]> {
  if (!isShopifyConfigured) {
    await new Promise((r) => setTimeout(r, 80)); // Simulate micro latency
    if (category && category !== "All") {
      return MOCK_PRODUCTS.filter((p) => p.category.toLowerCase().includes(category.toLowerCase()));
    }
    return MOCK_PRODUCTS;
  }

  interface ShopifyResponse {
    products: {
      edges: Array<{
        node: {
          id: string;
          handle: string;
          title: string;
          description: string;
          productType: string;
          availableForSale: boolean;
          featuredImage: { url: string; altText: string | null; width: number; height: number };
          priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
          variants: { edges: Array<{ node: { id: string; title: string; availableForSale: boolean; price: { amount: string; currencyCode: string } } }> };
        };
      }>;
    };
  }

  const data = await shopifyFetch<ShopifyResponse>({
    query: PRODUCTS_QUERY,
    variables: { first: 12 },
  });

  if (!data?.products?.edges?.length) {
    return MOCK_PRODUCTS;
  }

  const normalized: Product[] = data.products.edges.map(({ node }) => ({
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    category: node.productType || "Curated Object",
    availableForSale: node.availableForSale,
    featuredImage: node.featuredImage ?? {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
      altText: node.title,
    },
    priceRange: node.priceRange,
    variants: node.variants.edges.map((e) => e.node),
  }));

  if (category && category !== "All") {
    return normalized.filter((p) => p.category.toLowerCase().includes(category.toLowerCase()));
  }

  return normalized;
}