import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import AboutUsSection from '@/components/ui/about-us-section';

export const metadata = {
  title: 'About Us — Margo Group',
  description:
    "Learn about Margo Group — Jordan's leading distributor of international beauty, skincare, cosmetics, and personal care brands.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Navigation ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="relative flex items-center px-4 max-w-6xl mx-auto border-b border-gray-100 h-20">
          {/* Logo — left */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/margo-group-logo.png"
                alt="Margo Group Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Navigation — centered absolutely */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-1">
            <Link
              href="/about"
              className="text-gray-900 text-sm font-semibold px-4 py-2 rounded-full bg-gray-100 transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="text-gray-500 hover:text-gray-900 text-sm font-light px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* About Us Section */}
      <AboutUsSection />

      <Footer />
    </div>
  );
}
