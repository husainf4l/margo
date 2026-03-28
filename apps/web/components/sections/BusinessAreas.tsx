'use client';

const areas = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Pharmacies',
    description: 'Comprehensive distribution to pharmaceutical chains and independent pharmacies nationwide.',
    accent: 'from-cyan-600 to-blue-600',
    bg: 'bg-cyan-50/60',
    border: 'border-cyan-100',
    shadow: 'hover:shadow-cyan-500/10',
    tag: 'Pharmaceutical',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Beauty Stores & Salons',
    description: 'Professional beauty products for salons, spas, and specialized beauty retailers.',
    accent: 'from-orange-500 to-rose-500',
    bg: 'bg-orange-50/60',
    border: 'border-orange-100',
    shadow: 'hover:shadow-orange-500/10',
    tag: 'Professional Beauty',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: 'Retail Chains & Supermarkets',
    description: 'Mass market distribution through major retail chains and supermarket networks.',
    accent: 'from-cyan-600 to-orange-500',
    bg: 'bg-gray-50/80',
    border: 'border-gray-100',
    shadow: 'hover:shadow-gray-500/10',
    tag: 'Mass Market',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: 'Online Distribution',
    description: 'E-commerce solutions and direct-to-consumer digital sales channels.',
    accent: 'from-orange-500 to-amber-400',
    bg: 'bg-orange-50/40',
    border: 'border-orange-100',
    shadow: 'hover:shadow-orange-500/10',
    tag: 'E-Commerce',
  },
];

export default function BusinessAreas() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-4">Where We Operate</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Our Distribution Channels
            </h2>
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`group relative ${area.bg} ${area.border} border rounded-xl p-5 flex flex-col gap-3 hover:shadow-md ${area.shadow} transition-all duration-300 hover:-translate-y-1 bg-white`}
            >
              {/* Tag */}
              <span className={`self-start text-[9px] font-semibold tracking-widest uppercase bg-gradient-to-r ${area.accent} bg-clip-text text-transparent`}>
                {area.tag}
              </span>

              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${area.accent} flex items-center justify-center text-white shadow-sm`}>
                <span className="scale-75 flex">{area.icon}</span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 flex-1">
                <h3 className="text-sm font-bold text-gray-900 leading-snug">{area.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{area.description}</p>
              </div>

              {/* Bottom accent line */}
              <div className={`h-0.5 w-6 bg-gradient-to-r ${area.accent} rounded-full opacity-60 group-hover:w-full transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

