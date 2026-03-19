import ShaderShowcase from "@/components/ui/hero";
import AboutPreview from "@/components/sections/AboutPreview";
import BusinessAreas from "@/components/sections/BusinessAreas";
import BrandsShowcase from "@/components/sections/BrandsShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import KeyStatistics from "@/components/sections/KeyStatistics";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full">
      <ShaderShowcase />
      <BrandsShowcase />
      <AboutPreview />
      <BusinessAreas />
      <WhyChooseUs />
      <KeyStatistics />
      <ContactSection />
      <Footer />
    </div>
  );
}
