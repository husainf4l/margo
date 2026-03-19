export default function ContactFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Margo Group</h3>
            <p className="text-gray-400">
              Leading distributor of beauty and personal care products in Jordan
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>📞 Phone: +962 XX XXX XXXX</p>
              <p>📧 Email: info@margogroup.jo</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-400">
              📍 Amman, Jordan
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 Margo Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
