export default function BrandsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-32 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-400 text-sm">Brand Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
