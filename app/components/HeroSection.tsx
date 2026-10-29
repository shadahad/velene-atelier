import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 z-10 space-y-8">
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8C827A]">
              Series 04 / Architectural Living
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1E1B18] leading-[1.12] tracking-tight">
              Quiet forms, sculpted for timeless dwell space.
            </h1>
          </div>

          <p className="text-sm md:text-base text-[#564E47] leading-relaxed max-w-lg font-light">
            VÉLÈNE curates elemental domestic accessories engineered from raw alabaster, cold-hammered bronze,
            and unspun fibres. Crafted by heritage ateliers across Italy and Kyoto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="#collection"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1E1B18] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] hover:bg-[#38332E] transition-colors"
            >
              Explore Objects
            </Link>
            <Link
              href="#craftsmanship"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#1E1B18]/25 text-[#1E1B18] text-xs uppercase tracking-[0.2em] hover:bg-[#1E1B18]/5 transition-colors"
            >
              The Atelier Manifesto
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-[480px] sm:h-[600px] w-full">
          <div className="absolute inset-0 bg-[#E8E4DC] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
              alt="Sculptural interior environment with stone vessel"
              fill
              priority
              className="object-cover object-center grayscale-[15%] contrast-[95%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[#FAF8F5] p-6 border border-[#2A2521]/10 max-w-xs shadow-sm">
            <p className="text-[9px] uppercase tracking-widest text-[#8C827A]">Current Acquisition</p>
            <p className="font-serif text-sm text-[#1E1B18] mt-1">Edition 018: Honed Alabaster & Raw Wool</p>
          </div>
        </div>
      </div>
    </section>
  );
}