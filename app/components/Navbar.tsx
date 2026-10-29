"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Menu, X, ArrowUpRight } from "lucide-react";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#2A2521]/10 transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-[#2A2521] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Left Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-medium text-[#2A2521]/70">
            <Link href="#collection" className="hover:text-[#2A2521] transition-colors">Collection</Link>
            <Link href="#craftsmanship" className="hover:text-[#2A2521] transition-colors">Craftsmanship</Link>
            <Link href="#editorial" className="hover:text-[#2A2521] transition-colors">Provenance</Link>
          </nav>

          {/* Logo */}
          <div className="flex-1 text-center md:flex-initial">
            <Link href="/" className="font-serif text-2xl tracking-[0.25em] text-[#1E1B18] uppercase">
              VÉLÈNE
            </Link>
            <span className="block text-[8px] uppercase tracking-[0.35em] text-[#8C827A] -mt-1">
              Atelier Paris — Kyoto
            </span>
          </div>

          {/* Right utility */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#2A2521] hover:opacity-75 transition-opacity"
              aria-label="Open curated basket"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="absolute top-1 right-0 text-[9px] font-mono bg-[#2A2521] text-white rounded-full w-3.5 h-3.5 flex items-center justify-center">
                1
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMobileOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-[#2A2521]/10 px-6 py-8 space-y-4 text-xs uppercase tracking-widest text-[#2A2521]">
            <Link href="#collection" onClick={() => setIsMobileOpen(false)} className="block py-2">Catalog</Link>
            <Link href="#craftsmanship" onClick={() => setIsMobileOpen(false)} className="block py-2">Craftsmanship</Link>
            <Link href="#editorial" onClick={() => setIsMobileOpen(false)} className="block py-2">Provenance</Link>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}