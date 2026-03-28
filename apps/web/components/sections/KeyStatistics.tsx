'use client';

const stats = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    number: '15+',
    label: 'Years of Experience',
    sub: 'Operating in Jordan',
    color: 'from-cyan-600 to-blue-600',
    border: 'border-cyan-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    number: '50+',
    label: 'International Brands',
    sub: 'In our portfolio',
    color: 'from-orange-500 to-rose-500',
    border: 'border-orange-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h11L15 13M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
      </svg>
    ),
    number: '1,000+',
    label: 'Retail Points Served',
    sub: 'Nationwide',
    color: 'from-cyan-600 to-orange-500',
    border: 'border-gray-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    number: '12',
    label: 'Cities Covered',
    sub: 'Across Jordan',
    color: 'from-cyan-600 to-blue-600',
    border: 'border-cyan-100',
  },
];

export default function KeyStatistics() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-3">By the Numbers</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Our Impact in Numbers
            </h2>
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mt-4" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`group relative bg-white ${s.border} border rounded-xl p-4 flex flex-col gap-2 hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-xl`} />

              {/* Icon */}
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-sm flex-shrink-0 [&_svg]:w-4 [&_svg]:h-4`}>
                {s.icon}
              </div>

              {/* Number */}
              <div className="text-2xl font-black text-gray-900 leading-none">
                {s.number}
              </div>

              {/* Labels */}
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-bold text-gray-800">{s.label}</p>
                <p className="text-[10px] text-gray-400 tracking-wide">{s.sub}</p>
              </div>

              {/* Bottom accent */}
              <div className={`h-0.5 w-5 bg-gradient-to-r ${s.color} rounded-full opacity-30 group-hover:w-full group-hover:opacity-60 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
