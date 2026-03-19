export default function ServicesSection() {
  const services = [
    {
      title: 'Pharmacies',
      description: 'Supplying quality beauty and personal care products to pharmacies across Jordan',
      icon: '💊',
    },
    {
      title: 'Beauty Shops & Salons',
      description: 'Professional beauty products for salons and beauty specialists',
      icon: '💄',
    },
    {
      title: 'Mass Retail',
      description: 'Distribution to major retail chains and supermarkets',
      icon: '🏪',
    },
    {
      title: 'Online & Direct Sales',
      description: 'Direct-to-consumer online sales and distribution',
      icon: '🛒',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Business Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
