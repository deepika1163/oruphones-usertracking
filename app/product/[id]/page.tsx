/*import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';

export default function Page({ params }: { params: { id: string } }) {
  // Dummy product data based on ID
  const productData: { [key: string]: any } = {
    iphone15: {
      name: "Apple iPhone 15",
      price: "₹45,000",
      image: "https://picsum.photos/500",
      seller: "John Doe",
      location: "Jones Grove, 2085 Nichole Point Suite 964",
      phone: "9876543210"
    },
    samsung22: {
      name: "Samsung S22",
      price: "₹40,000",
      image: "https://picsum.photos/600",
      seller: "Jane Smith",
      location: "Newtown, 123 Palm Street",
      phone: "9123456789"
    },
    oneplus11: {
      name: "One plus 11",
      price: "₹50,000",
      image: "https://picsum.photos/600",
      seller: "Jane Smith",
      location: "Newtown, 123 Palm Street",
      phone: "9123456789"
    },
    oppo: {
      name: "Oppo",
      price: "₹30,000",
      image: "https://picsum.photos/600",
      seller: "Jane Smith",
      location: "Newtown, 123 Palm Street",
      phone: "9123456789"
    }
  };

  const product = productData[params.id] || {
    name: "Unknown Product",
    price: "N/A",
    image: "https://picsum.photos/400",
    seller: "N/A",
    location: "N/A",
    phone: "N/A"
  };

  return (
    <main className="p-4 space-y-6">
      <Header />

      <h2 className="text-2xl font-bold">{product.name}</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image *//*}
       /* <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        /*{/* Product Info *//*/}
        /*<div className="w-full md:w-1/2 space-y-4">
          <p className="text-xl font-semibold">Price: {product.price}</p>
          <p>Seller: {product.seller}</p>
          <p>Location: {product.location}</p>
          <p>Phone: {product.phone}</p>

          <div className="space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Buy</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Contact Seller</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
export async function generateStaticParams() {
  return [
    { id: 'iphone15' },
    { id: 'samsung22' },
    { id: 'oneplus11' },
    { id: 'oppo' }
  ];
}
*/

// app/product/[id]/page.tsx

/*import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';
type PageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: PageProps) {
  const productData: Record<string, any> = {
    iphone15: {
      name: "Apple iPhone 15",
      price: "₹45,000",
      image: "https://picsum.photos/500",
      seller: "John Doe",
      location: "Jones Grove",
      phone: "9876543210"
    },
    samsung22: {
      name: "Samsung S22",
      price: "₹40,000",
      image: "https://picsum.photos/600",
      seller: "Jane Smith",
      location: "Newtown",
      phone: "9123456789"
    }
  };

  const product = productData[params.id] || {
    name: "Unknown",
    price: "N/A",
    image: "https://picsum.photos/400",
    seller: "N/A",
    location: "N/A",
    phone: "N/A"
  };

  return (
    <main>
      <Header />
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p>{product.price}</p>
      <Footer />
    </main>
  );
}

// ✅ Required for dynamic routing in static export
export async function generateStaticParams() {
  return [
    { id: 'iphone15' },
    { id: 'samsung22' }
  ];
}
*/


// app/product/[id]/page.tsx

/*import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';
import { Metadata } from 'next';

// ✅ This is the correct way to define the `Page` props in App Router
type Props = {
  params: {
    id: string;
  };
};

// ✅ This is your page component with correctly typed props
export default function Page({ params }: Props) {
  const productData: Record<string, any> = {
    iphone15: {
      name: "Apple iPhone 15",
      price: "₹45,000",
      image: "https://picsum.photos/500",
      seller: "John Doe",
      location: "Jones Grove",
      phone: "9876543210"
    },
    samsung22: {
      name: "Samsung S22",
      price: "₹40,000",
      image: "https://picsum.photos/600",
      seller: "Jane Smith",
      location: "Newtown",
      phone: "9123456789"
    }
  };

  const product = productData[params.id] || {
    name: "Unknown",
    price: "N/A",
    image: "https://picsum.photos/400",
    seller: "N/A",
    location: "N/A",
    phone: "N/A"
  };

  return (
    <main>
      <Header />
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p>{product.price}</p>
      <Footer />
    </main>
  );
}

// ✅ This is the correct way to declare static params for dynamic routes
export async function generateStaticParams() {
  return [
    { id: 'iphone15' },
    { id: 'samsung22' }
  ];
}
*/

// app/product/[id]/page.tsx

/*import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

const productData: Record<string, any> = {
  iphone15: {
    name: "Apple iPhone 15",
    price: "₹45,000",
    image: "https://picsum.photos/500",
    seller: "John Doe",
    location: "Jones Grove",
    phone: "9876543210"
  },
  samsung22: {
    name: "Samsung S22",
    price: "₹40,000",
    image: "https://picsum.photos/600",
    seller: "Jane Smith",
    location: "Newtown",
    phone: "9123456789"
  }
};

export default function ProductPage({ params }: Props) {
  const product = productData[params.id];

  if (!product) notFound(); // Optional: show 404 if not found

  return (
    <main>
      <Header />
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p>{product.price}</p>
      <Footer />
    </main>
  );
}

// ✅ Must be async
export async function generateStaticParams() {
  return [
    { id: 'iphone15' },
    { id: 'samsung22' }
  ];
}
*/
/*
import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// ✅ Define props with type, no async here
interface PageProps {
  params: {
    id: string;
  };
}

const productData: Record<string, any> = {
  iphone15: {
    name: "Apple iPhone 15",
    price: "₹45,000",
    image: "https://picsum.photos/500",
    seller: "John Doe",
    location: "Jones Grove",
    phone: "9876543210"
  },
  samsung22: {
    name: "Samsung S22",
    price: "₹40,000",
    image: "https://picsum.photos/600",
    seller: "Jane Smith",
    location: "Newtown",
    phone: "9123456789"
  }
};

export default function ProductPage({ params }: PageProps) {
  const product = productData[params.id];

  if (!product) notFound();

  return (
    <main>
      <Header />
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p>{product.price}</p>
      <Footer />
    </main>
  );
}

// ✅ Marked as async with correct return type
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [
    { id: 'iphone15' },
    { id: 'samsung22' }
  ];
}
*/

// app/product/[id]/page.tsx

import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// ✅ Correct and safe typing
export default function ProductPage({ params }: { params: { id: string } }) {
  const productData: Record<string, any> = {
    iphone15: {
      name: "Apple iPhone 15",
      price: "₹45,000",
      image: "https://picsum.photos/500",
      seller: "John Doe",
      location: "Jones Grove",
      phone: "9876543210"
    },
    samsung22: {
      name: "Samsung S22",
      price: "₹40,000",
      image: "https://picsum.photos/600",
      seller: "Jane Smith",
      location: "Newtown",
      phone: "9123456789"
    }
  };

  const product = productData[params.id];

  if (!product) notFound();

  return (
    <main>
      <Header />
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p>{product.price}</p>
      <Footer />
    </main>
  );
}

// ✅ Keep this exactly like this — do NOT add types manually here
export async function generateStaticParams() {
  return [
    { id: 'iphone15' },
    { id: 'samsung22' }
  ];
}
