'use client';
import { useEffect } from 'react';
import { trackUser } from './lib/track';

// app/page.tsx or app/home/page.tsx (if using app directory)

import Image from 'next/image';

// Reusable Category Button Component
function CategoryButton({ name }: { name: string }) {
  return (
    <button className="bg-orange-400 p-4 rounded-lg hover:bg-gray-300">
      {name}
    </button>
  );
}

// Reusable Product Card Component
function ProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md">
      <h3 className="font-bold">{name}</h3>
      <p>Price: {price}</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        Buy
      </button>
    </div>
  );
}

// Main Homepage Component
export default function HomePage() {
  useEffect(() => {
  const startTime = Date.now();

  const handleBeforeUnload = () => {
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - startTime) / 1000); // in seconds
    const scrollDepth = window.scrollY;

    const trackingData = {
      page: 'Homepage',
      timeSpent,
      scrollDepth,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    trackUser(trackingData);
  };

  // Send data when user leaves
  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    handleBeforeUnload();
  };
}, []);

  return (
    <main className="p-4 space-y-8">
      <header className="bg-blue-600 text-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold">ORU Phones - Homepage</h1>
      </header>

      {/* Popular Categories */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <CategoryButton name="Apple" />
          <CategoryButton name="Samsung" />
          <CategoryButton name="OnePlus" />
          <CategoryButton name="Oppo" />
          <CategoryButton name="Motorola" />
          <CategoryButton name="Vivo" />
        </div>
      </section>

      {/* Best Sellers */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductCard name="iPhone 15" price="₹45,000" />
          <ProductCard name="Samsung S22" price="₹40,000" />
          <ProductCard name="OnePlus 11" price="₹38,000" />
        </div>
      </section>

      {/* Footer */}
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
    </main>
  );
}
