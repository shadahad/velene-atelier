export interface ShopifyImage {
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: Money;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  category: string;
  availableForSale: boolean;
  featuredImage: ShopifyImage;
  priceRange: {
    minVariantPrice: Money;
  };
  variants: ProductVariant[];
  material?: string;
  provenance?: string;
}

export interface CartItem {
  id: string;
  variantId: string;
  product: Product;
  quantity: number;
}