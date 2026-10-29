import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import EditorialBanner from "./components/EditorialBanner";
import Footer from "./components/Footer";
import { getProducts } from "@/lib/shopify";

// Revalidate data every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  // Server-side fetch via Shopify Storefront GraphQL (with automatic local mock fallbacks)
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid products={products} />
        <EditorialBanner />
      </main>
      <Footer />
    </>
  );
}