"use client";

import InsuranceProductsSection from "@/components/InsuranceProductsSection";
import DynamicAboutSection from "@/components/DynamicAboutSection";
import PartnersSection from "@/components/PartnersSection";
import WhyAllfinancialsSection from "@/components/WhyAllfinancialsSection";
import ContactArea from "@/components/ContactArea";

export default function HomePage() {
  return (
    <main
      style={{
        background: "linear-gradient(to right, #1E3A8A, #3B82F6, #93C5FD)",
      }}
      className="min-h-screen p-4 text-white"
    >
      <InsuranceProductsSection />
      <DynamicAboutSection />
      <WhyAllfinancialsSection />
      <ContactArea/>
      <PartnersSection />
      
    </main>
  );
}
