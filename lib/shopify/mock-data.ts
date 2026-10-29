import { Product } from "./types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_001",
    handle: "alabaster-solstice-vessel",
    title: "Alabaster Solstice Vessel",
    description: "Carved from a singular block of Italian Volterra alabaster, hand-honed to a diffuse satin finish.",
    category: "Vessels & Ceramics",
    availableForSale: true,
    material: "Solid Volterra Alabaster",
    provenance: "Tuscany, Italy",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
      altText: "Carved Alabaster Vessel on a stone pedestal",
      width: 1200,
      height: 1500,
    },
    priceRange: {
      minVariantPrice: { amount: "620.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_001_a",
        title: "Medium / Honed Raw",
        availableForSale: true,
        price: { amount: "620.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_002",
    handle: "monolithic-travertine-tray",
    title: "Monolithic Travertine Tray",
    description: "Architectural catchall sculpted from unfilled Roman silver travertine with hand-chiselled edging.",
    category: "Stone Architecture",
    availableForSale: true,
    material: "Silver Roman Travertine",
    provenance: "Tivoli, Italy",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
      altText: "Hand-chiselled travertine tray on light linen",
      width: 1200,
      height: 1500,
    },
    priceRange: {
      minVariantPrice: { amount: "480.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_002_a",
        title: "Default",
        availableForSale: true,
        price: { amount: "480.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_003",
    handle: "patinated-bronze-incense-burner",
    title: "Patinated Bronze Incense Burner",
    description: "Sand-cast molten bronze aged via cold sulfur immersion, designed for ritual and spatial presence.",
    category: "Metalwork & Rituals",
    availableForSale: true,
    material: "Solid Cast Bronze",
    provenance: "Kyoto, Japan",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85",
      altText: "Dark patina solid bronze ritual piece",
      width: 1200,
      height: 1500,
    },
    priceRange: {
      minVariantPrice: { amount: "390.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_003_a",
        title: "Antique Smoke Patina",
        availableForSale: true,
        price: { amount: "390.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_004",
    handle: "unspun-mongolian-cashmere-throw",
    title: "Mongolian Cashmere Hearth Throw",
    description: "Woven on traditional shuttle looms using undyed grade-A Mongolian cashmere with twisted fringing.",
    category: "Textiles",
    availableForSale: true,
    material: "100% Raw Undyed Cashmere",
    provenance: "Ulaanbaatar, Mongolia",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85",
      altText: "Natural ivory cashmere throw folded neatly",
      width: 1200,
      height: 1500,
    },
    priceRange: {
      minVariantPrice: { amount: "940.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_004_a",
        title: "Natural Flaxen Cream",
        availableForSale: true,
        price: { amount: "940.00", currencyCode: "USD" },
      },
    ],
  },
];