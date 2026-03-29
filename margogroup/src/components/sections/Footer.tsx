'use client';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-7">
            <h3 className="text-2xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Margo Group
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Leading distributor of international beauty, skincare, cosmetics, and personal care brands in Jordan.
              Your strategic partner for market entry and expansion.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+962797333208" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium block">
                +9627 9733 3208
              </a>
              <a href="mailto:info@margogroup.net" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium block">
                info@margogroup.net
              </a>
              <p className="text-sm text-gray-400">
                Yajouz Rd. 95, Amman
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Margo Group. All rights reserved. · Amman, Jordan
          </p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
