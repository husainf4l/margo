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
    <section id="brands" className="relative bg-background border-y border-border/50 py-20 md:py-24 overflow-hidden">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10" />

      {/* Header */}
      <div className="text-center mb-14 px-4 max-w-7xl mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">Our Portfolio</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2 tracking-tight">
          Trusted Brand Portfolio
        </h2>
        <div className="w-12 h-0.5 bg-linear-to-r from-primary to-accent rounded-full mx-auto mt-4" />
      </div>

      {/* Marquee — editorial list style */}
      <div className="flex overflow-hidden border-t border-b border-border">
        <div className="marquee-fwd">
          {row1.map((brand, i) => (
            <div
              key={i}
              className="shrink-0 group flex items-center gap-6 px-8 py-6 border-r border-border cursor-default transition-colors duration-200 hover:bg-muted/50"
            >
              {/* text */}
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-foreground whitespace-nowrap leading-tight tracking-tight">
                  {brand.name}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground group-hover:text-foreground/60 transition-colors">
                  {brand.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

