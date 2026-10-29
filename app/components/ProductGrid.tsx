"use client";

import Image from "next/image";
import { useActionState } from "react";
import { Product } from "@/lib/shopify/types";
import { formatCurrency } from "@/lib/utils";
import { addToCartAction, ActionResult } from "@/app/actions/cart";

const initialState: ActionResult = {
  success: false,
  message: "",
};

function AddToCartButton({ product }: { product: Product }) {
  const [state, formAction, isPending] = useActionState(addToCartAction, initialState);

  return (
    <form action={formAction} className="mt-4">
      <input type="hidden" name="variantId" value={product.variants[0]?.id || product.id} />
      <input type="hidden" name="title" value={product.title} />
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 bg-[#FAF8F5] border border-[#2A2521]/20 text-[#2A2521] text-[11px] uppercase tracking-[0.2em] hover:bg-[#1E1B18] hover:text-[#FAF8F5] transition-colors disabled:opacity-50"
      >
        {isPending ? "Reserving..." : "Acquire Object"}
      </button>
      {state?.message && (
        <p className={`text-[10px] tracking-wide mt-2 text-center ${state.success ? "text-stone-700" : "text-amber-800"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section id="collection" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-[#2A2521]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C827A]">Current Catalogue</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] mt-1">Permanent Artifacts</h2>
        </div>
        <p className="text-xs text-[#8C827A] tracking-wider uppercase">
          Showing {products.length} registered studio works
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <article key={product.id} className="group flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/5] bg-[#EFECE6] overflow-hidden mb-5">
                <Image
                  src={product.featuredImage.url}
                  alt={product.featuredImage.altText || product.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] uppercase tracking-widest text-[#8C827A]">
                    {product.provenance || product.category}
                  </span>
                  <span className="font-mono text-xs text-[#2A2521]">
                    {formatCurrency(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-[#1E1B18]">{product.title}</h3>
                <p className="text-xs text-[#6B635B] line-clamp-2 leading-relaxed pt-1">
                  {product.description}
                </p>
              </div>
            </div>

            <AddToCartButton product={product} />
          </article>
        ))}
      </div>
    </section>
  );
}