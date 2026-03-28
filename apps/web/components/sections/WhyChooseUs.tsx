'use client';

const strengths = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6 5.87a4 4 0 10-8 0m8 0a4 4 0 00-8 0M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Experienced Team',
    description: 'Industry veterans with deep market knowledge and local expertise built over years of operating in Jordan.',
    color: 'from-cyan-600 to-blue-600',
    light: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    title: 'Trusted Partnerships',
    description: 'Long-standing relationships with pharmacies, retailers, and healthcare professionals across the kingdom.',
    color: 'from-orange-500 to-rose-500',
    light: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Curated Brand Selection',
    description: 'A commitment to excellence — every brand in our portfolio is carefully selected for quality and market fit.',
    color: 'from-cyan-600 to-orange-500',
    light: 'bg-gray-50',
    border: 'border-gray-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Strong Distribution Network',
    description: 'Efficient logistics and nationwide reach covering all major retail, pharmacy, salon, and online channels.',
    color: 'from-cyan-600 to-blue-600',
    light: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Local Market Insight',
    description: 'Deep understanding of Jordanian consumer preferences, retail dynamics, and evolving market trends.',
    color: 'from-cyan-600 to-orange-500',
    light: 'bg-gray-50',
    border: 'border-gray-100',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-cyan-600 mb-4">Our Strengths</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Why Choose Margo Group
            </h2>
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-orange-500 rounded-full mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <div
              key={i}
              className={`group relative bg-white ${s.border} border rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-xl`} />

              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                <span className="scale-75 flex">{s.icon}</span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.description}</p>
              </div>

              {/* Bottom accent */}
              <div className={`h-0.5 w-6 bg-gradient-to-r ${s.color} rounded-full opacity-50 group-hover:w-full transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
