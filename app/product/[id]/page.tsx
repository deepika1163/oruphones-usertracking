/*import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';

interface PageProps {
  params: { id: string };
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

// generateStaticParams is required to statically build dynamic routes
export async function generateStaticParams() {
  return [
    { id: 'iphone15' },
    { id: 'samsung22' }
  ];
}
*/

/*import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from 'next/image';

export interface PageProps {
  params: { id: string };
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

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return [
    { id: 'iphone15' },
    { id: 'samsung22' }
  ];
}
*/

/*import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';

interface PageProps {
  params: Readonly<{ id: string }>;
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
  const product = productData[params.id] ?? {
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

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return [
    { id: 'iphone15' },
    { id: 'samsung22' }
  ];
}*/

import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";

type Product = {
  name: string;
  price: string;
  image: string;
  seller: string;
  location: string;
  phone: string;
};

const productData: Record<string, Product> = {
  iphone15: {
    name: "Apple iPhone 15",
    price: "₹45,000",
    image: "https://picsum.photos/500",
    seller: "John Doe",
    location: "Jones Grove",
    phone: "9876543210",
  },
  samsung22: {
    name: "Samsung S22",
    price: "₹40,000",
    image: "https://picsum.photos/600",
    seller: "Jane Smith",
    location: "Newtown",
    phone: "9123456789",
  },
};

function isValidParams(params: unknown): params is { id: string } {
  return (
    typeof params === "object" &&
    params !== null &&
    "id" in params &&
    typeof (params as any).id === "string"
  );
}

export default function ProductPage({ params }: { params: any }) {
  if (!isValidParams(params)) {
    return <p>Invalid product ID.</p>;
  }

  const product = productData[params.id] ?? {
    name: "Unknown",
    price: "N/A",
    image: "https://picsum.photos/400",
    seller: "N/A",
    location: "N/A",
    phone: "N/A",
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

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return [
    { id: "iphone15" },
    { id: "samsung22" }
  ];
}
