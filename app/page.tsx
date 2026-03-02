import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Advantages from "@/components/sections/Advantages";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Solutions from "@/components/sections/Solutions";
import Testimonials from "@/components/sections/Testimonials";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="px-4 sm:px-[32px] md:px-[48px] lg:px-[96px] xl:px-[160px] 2xl:px-[196px] pt-[48px]">
        <StructuredData />
        <Header />
        <Hero />
        <Advantages />
        <Solutions />
        <Pricing />
        <CTA />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
