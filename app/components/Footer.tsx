import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer id="editorial" className="bg-[#FAF8F5] border-t border-[#2A2521]/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2A2521]/10">
        <div className="md:col-span-5 space-y-4">
          <p className="font-serif text-xl tracking-[0.2em] uppercase text-[#1E1B18]">VÉLÈNE</p>
          <p className="text-xs text-[#6B635B] leading-relaxed max-w-sm">
            Refined spatial accessories, artisanal vessels, and natural living textiles. Distributed from ateliers
            in France and Japan directly to private collectors.
          </p>
        </div>

        <div className="md:col-span-3 space-y-3">
          <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#2A2521]">Atelier Locations</p>
          <ul className="text-xs text-[#6B635B] space-y-2">
            <li>7 Rue de Bourgogne, 75007 Paris</li>
            <li>Nakagyo-ku, Kyoto 604-0924</li>
            <li>curator@velene-atelier.com</li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-3">
          <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#2A2521]">Private Correspondence</p>
          <p className="text-xs text-[#6B635B]">
            Receive private release notices regarding seasonal casting volumes and collector previews.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col sm:flex-row justify-between text-[10px] text-[#8C827A] tracking-widest uppercase">
        <p>© {new Date().getFullYear()} VÉLÈNE ATELIER CORP. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 sm:mt-0">Powered by Next.js 15 & Shopify Storefront GraphQL</p>
      </div>
    </footer>
  );
}