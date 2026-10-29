import Image from "next/image";

export default function EditorialBanner() {
  return (
    <section id="craftsmanship" className="bg-[#1E1B18] text-[#FAF8F5] py-28 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A69E95]">Material Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-5xl leading-tight">
            Created to outlast the architecture it inhabits.
          </h2>
          <p className="text-xs sm:text-sm text-[#C4BEB5] leading-relaxed font-light">
            We avoid synthetic binders, rapid automated casting, and fleeting seasonal trends. Every piece is
            shaped by generational master artisans who treat stone, bronze, and fleece as living materials.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#FAF8F5]/15">
            <div>
              <p className="font-serif text-2xl text-[#FAF8F5]">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-[#A69E95] mt-1">Noble Mineral & Fiber</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-[#FAF8F5]">Hand-Honed</p>
              <p className="text-[10px] uppercase tracking-widest text-[#A69E95] mt-1">Archival Finish</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div className="relative h-80 sm:h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Stone carving atelier detail"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 sm:h-96 w-full mt-8">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
              alt="Minimal living table setting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}