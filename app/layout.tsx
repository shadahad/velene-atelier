import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VÉLÈNE Atelier | Refined Living Accessories & Spatial Objects",
  description: "Curated collection of stone vessels, monolithic trays, patinated bronze ritual tools, and Mongolian cashmere.",
  keywords: ["Luxury Home Accessories", "Travertine Tray", "Alabaster Vessels", "Artisanal Decor", "Minimalist Living"],
  openGraph: {
    title: "VÉLÈNE Atelier | Refined Living Accessories",
    description: "Quiet forms, sculpted for timeless dwell space.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#FAF8F5] text-[#1E1B18] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}