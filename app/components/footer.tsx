// app/components/Footer.tsx
/*export default function Footer() {
  return (
    <footer className="mt-8 text-center text-sm text-gray-500">
      &copy; 2025 ORU Phones. All rights reserved.
    </footer>
  );
}*/



export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-10 mt-12 rounded-t-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3">About Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Company Information</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>Sitemap</li>
            <li>Create store</li>
            <li>Report Problem</li>
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Terms & Services</li>
          </ul>
        </div>

        {/* Phones */}
        <div>
          <h3 className="font-bold mb-3">Phones</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Apple</li>
            <li>Samsung</li>
            <li>Xiaomi</li>
            <li>OnePlus</li>
            <li>Realme</li>
            <li>Oppo</li>
            <li>Vivo</li>
            <li>Motorola</li>
            <li>Nokia</li>
            <li>Asus</li>
            <li>Sell Used Phones</li>
          </ul>
        </div>

        {/* Top Deals */}
        <div className="md:col-span-1 col-span-2">
          <h3 className="font-bold mb-3">Top Deals Near You</h3>
          <div className="grid grid-cols-2 gap-2 text-gray-300">
            {[
              "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
              "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
              "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
              "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Chandigarh", "Ladakh"
            ].map((state, index) => (
              <span key={index}>{state}</span>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-bold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-lg">
            <a href="#" className="hover:text-gray-200">🔵</a>
            <a href="#" className="hover:text-gray-200">▶️</a>
            <a href="#" className="hover:text-gray-200">📷</a>
            <a href="#" className="hover:text-gray-200">💼</a>
            <a href="#" className="hover:text-gray-200">🐦</a>
            <a href="#" className="hover:text-gray-200">✉️</a>
          </div>
        </div>
      </div>

      {/* Logo Bottom */}
      <div className="text-center mt-10 text-gray-400 text-sm">
        <p>&copy; 2025 <strong>ORU Phones</strong>. All rights reserved.</p>
      </div>
    </footer>
  );
}
