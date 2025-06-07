/*import Header from '../components/header';
import Footer from '../components/footer';

// Product Card (Same as homepage)
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

export default function BestDealsPage() {
  return (
    <main className="p-4">
      <Header />

      <h2 className="text-2xl font-bold mb-4">Best Deals</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left side: Filters *//*}
        <aside className="md:col-span-1 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Apple</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Samsung</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">OnePlus</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Vivo</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Oppo</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Motorola</button>
        </aside>

       /* {/* Right side: Product cards *//*}
       /* <section className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard name="iPhone 15" price="₹45,000" />
          <ProductCard name="Samsung S22" price="₹40,000" />
          <ProductCard name="OnePlus 11" price="₹38,000" />
          <ProductCard name="Vivo" price="₹38,000" />
          <ProductCard name="Oppo" price="₹38,000" />
          <ProductCard name="Motorola" price="₹38,000" />
        </section>
      </div>

      <Footer />
    </main>
  );
}*/



'use client';

import { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { trackUser } from '../lib/track'; // ✅ Update path if needed

// Product Card
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

/*export default function BestDealsPage() {
  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      const scrollDepth = Math.floor(
        (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100
      );

      trackUser({
        page: 'Best Deals Page',
        timeSpent,
        scrollDepth,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Optional: track again when navigating away (e.g., route change)
      handleBeforeUnload();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);*/
  export default function BestDeals() {
  useEffect(() => {
  const startTime = Date.now();

  const handleBeforeUnload = () => {
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - startTime) / 1000); // in seconds
    const scrollDepth = window.scrollY;

    const trackingData = {
      page: 'BestDealspage',
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
    <main className="p-4">
      <Header />

      <h2 className="text-2xl font-bold mb-4">Best Deals</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="md:col-span-1 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Apple</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Samsung</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">OnePlus</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Vivo</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Oppo</button>
          <button className="block w-full mb-2 bg-orange-500 p-2 rounded">Motorola</button>
        </aside>

        <section className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard name="iPhone 15" price="₹45,000" />
          <ProductCard name="Samsung S22" price="₹40,000" />
          <ProductCard name="OnePlus 11" price="₹38,000" />
          <ProductCard name="Vivo" price="₹38,000" />
          <ProductCard name="Oppo" price="₹38,000" />
          <ProductCard name="Motorola" price="₹38,000" />
        </section>
      </div>

      <Footer />
    </main>
  );
}
