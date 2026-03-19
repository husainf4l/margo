'use client';

const brands = [
  { name: 'Gerovital',                 sub: 'Skincare',       border: 'group-hover:border-cyan-300 group-hover:shadow-cyan-500/10',   subHover: 'group-hover:text-cyan-500'   },
  { name: 'Coverderm',                 sub: 'Cosmetics',      border: 'group-hover:border-orange-300 group-hover:shadow-orange-500/10', subHover: 'group-hover:text-orange-400' },
  { name: 'Toppik',                    sub: 'Hair Care',      border: 'group-hover:border-cyan-300 group-hover:shadow-cyan-500/10',   subHover: 'group-hover:text-cyan-500'   },
  { name: 'Dentrax',                   sub: 'Oral Care',      border: 'group-hover:border-blue-300 group-hover:shadow-blue-500/10',   subHover: 'group-hover:text-blue-500'   },
  { name: 'GuudCure',                  sub: 'Personal Care',  border: 'group-hover:border-orange-300 group-hover:shadow-orange-500/10', subHover: 'group-hover:text-orange-400' },
  { name: 'Callys',                    sub: 'Beauty',         border: 'group-hover:border-cyan-300 group-hover:shadow-cyan-500/10',   subHover: 'group-hover:text-cyan-500'   },
  { name: 'Hollywood Fashion Secrets', sub: 'Fashion Care',   border: 'group-hover:border-orange-300 group-hover:shadow-orange-500/10', subHover: 'group-hover:text-orange-400' },
  { name: 'Eslabondexx',               sub: 'Hair Care',      border: 'group-hover:border-cyan-300 group-hover:shadow-cyan-500/10',   subHover: 'group-hover:text-cyan-500'   },
  { name: 'Ecodenta',                  sub: 'Oral Care',      border: 'group-hover:border-blue-300 group-hover:shadow-blue-500/10',   subHover: 'group-hover:text-blue-500'   },
  { name: 'Kili·g',                    sub: 'Skincare',       border: 'group-hover:border-cyan-300 group-hover:shadow-cyan-500/10',   subHover: 'group-hover:text-cyan-500'   },
];

export default function BrandsShowcase() {
  const row1 = [...brands, ...brands];

  return (
    <section id="brands" className="relative bg-gray-50 border-y border-gray-100 py-14 overflow-hidden">
      <style>{`
        @keyframes marquee-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-fwd {
          display: flex;
          gap: 0.875rem;
          width: max-content;
          animation: marquee-fwd 45s linear infinite;
        }
        .marquee-fwd:hover { animation-play-state: paused; }
      `}</style>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-50 to-transparent z-10" />

      {/* Header */}
      <div className="text-center mb-10 px-4">
        <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-3">Our Portfolio</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Trusted Brand{' '}
          <span className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-transparent">Portfolio</span>
        </h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mx-auto mt-4" />
      </div>

      {/* Row 1 — forward */}
      <div className="flex overflow-hidden">
        <div className="marquee-fwd">
          {row1.map((brand, i) => (
            <div
              key={i}
              className={`flex-shrink-0 group flex flex-col items-center justify-center gap-1.5 w-48 h-20 rounded-2xl border border-gray-200 bg-white px-5 hover:shadow-md transition-all duration-200 cursor-default ${brand.border}`}
            >
              <span className="text-sm font-bold text-gray-700 group-hover:text-gray-900 text-center leading-tight transition-colors duration-200">
                {brand.name}
              </span>
              <span className={`text-[10px] font-semibold tracking-widest uppercase text-gray-300 transition-colors duration-200 ${brand.subHover}`}>
                {brand.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

