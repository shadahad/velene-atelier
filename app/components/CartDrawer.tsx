"use client";

import { X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between p-8 border-l border-[#2A2521]/10 animate-in slide-in-from-right duration-300">
        <div>
          <div className="flex items-center justify-between border-b border-[#2A2521]/10 pb-6">
            <h2 className="text-xs uppercase tracking-[0.25em] font-medium text-[#2A2521]">
              Curated Basket (1)
            </h2>
            <button onClick={onClose} className="p-1 hover:opacity-60" aria-label="Close cart">
              <X size={18} />
            </button>
          </div>

          <div className="py-6 space-y-6">
            <div className="flex gap-4 items-center">
              <div className="relative w-20 h-24 bg-stone-200 overflow-hidden shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80"
                  alt="Alabaster Solstice Vessel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-[#8C827A]">Volterra Alabaster</p>
                <h3 className="font-serif text-sm text-[#2A2521]">Alabaster Solstice Vessel</h3>
                <p className="font-mono text-xs mt-1 text-[#2A2521]">{formatCurrency(620)}</p>
                <span className="text-[10px] text-emerald-800">Ready for dispatch</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2521]/10 pt-6 space-y-4">
          <div className="flex justify-between items-center text-xs tracking-widest uppercase">
            <span>Subtotal</span>
            <span className="font-mono">{formatCurrency(620)}</span>
          </div>
          <p className="text-[10px] text-[#8C827A] leading-relaxed">
            Complimentary white-glove courier shipping and archival packaging included worldwide.
          </p>
          <a
            href="#checkout"
            onClick={(e) => {
              e.preventDefault();
              alert("Routing to Shopify Storefront Secure Checkout Session.");
            }}
            className="w-full bg-[#1E1B18] text-[#FAF8F5] py-4 text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-[#342F2A] transition-colors"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}