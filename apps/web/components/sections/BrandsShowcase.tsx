'use client';

type Brand = {
  name: string;
  sub: string;
};

const brands: Brand[] = [
  { name: 'Gerovital',                 sub: 'Skincare'      },
  { name: 'Coverderm',                 sub: 'Cosmetics'     },
  { name: 'Toppik',                    sub: 'Hair Care'     },
  { name: 'Dentrax',                   sub: 'Oral Care'     },
  { name: 'GuudCure',                  sub: 'Personal Care' },
  { name: 'Callys',                    sub: 'Beauty'        },
  { name: 'Hollywood Fashion Secrets', sub: 'Fashion Care'  },
  { name: 'Eslabondexx',               sub: 'Hair Care'     },
  { name: 'Ecodenta',                  sub: 'Oral Care'     },
  { name: 'Kili·g',                    sub: 'Skincare'      },
];

export default function BrandsShowcase() {
  const row1 = [...brands, ...brands];

  return (
    <section id="brands" className="relative bg-white border-y border-gray-100 py-16 overflow-hidden">
      <style>{`
        @keyframes marquee-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-fwd {
          display: flex;
          gap: 0px;
          width: max-content;
          animation: marquee-fwd 60s linear infinite;
        }
        .marquee-fwd:hover { animation-play-state: paused; }
      `}</style>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Header */}
      <div className="text-center mb-14 px-4">
        <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-3">Our Portfolio</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Trusted Brand Portfolio
        </h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mx-auto mt-4" />
      </div>

      {/* Marquee — editorial list style */}
      <div className="flex overflow-hidden border-t border-b border-gray-100">
        <div className="marquee-fwd">
          {row1.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 group flex items-center gap-6 px-10 py-6 border-r border-gray-100 cursor-default transition-colors duration-200 hover:bg-gray-50"
            >
              {/* text */}
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-gray-900 whitespace-nowrap leading-tight tracking-tight">
                  {brand.name}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-400 group-hover:text-gray-500 transition-colors">
                  {brand.sub}
                </span>
              </div>

              {/* arrow */}
              <span className="text-gray-200 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all duration-200 text-xs ml-1">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

