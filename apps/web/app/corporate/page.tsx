'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BrandsSection from '../components/BrandsSection';
import ContactFooter from '../components/ContactFooter';

interface CompanyInfo {
  name: string;
  description: string;
  country: string;
}

export default function CorporatePage() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCompanyInfo() {
      try {
        const response = await fetch('http://localhost:3000/api/company');
        const data = await response.json();
        setCompanyInfo(data);
      } catch (error) {
        console.error('Error fetching company info:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCompanyInfo();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection companyInfo={companyInfo} />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <ContactFooter />
    </main>
  );
}
