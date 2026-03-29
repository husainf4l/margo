'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BrandsSection from '../components/BrandsSection';
import Footer from '../../components/sections/Footer';

interface CompanyInfo {
  name: string;
  description: string;
  country: string;
}

const companyInfo: CompanyInfo = {
  name: 'Margo Group',
  description: 'Distributor of high-quality beauty and personal care products headquartered in Amman, Jordan',
  country: 'Jordan'
};

export default function CorporatePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection companyInfo={companyInfo} />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <Footer />
    </main>
  );
}
