interface CompanyInfo {
  name: string;
  description: string;
  country: string;
}

interface HeroSectionProps {
  companyInfo: CompanyInfo | null;
}

export default function HeroSection({ companyInfo }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">
          {companyInfo?.name || 'Margo Group'}
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          {companyInfo?.description || 'Leading distributor of beauty and personal care products'}
        </p>
      </div>
    </section>
  );
}
