// app/page.tsx

import { prisma } from '@/lib/prisma';

export default async function Home() {
  const products = await prisma.product.findMany({ orderBy: { id: 'desc' } });

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Mini Amazon App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-1">₹{product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4">{product.description}</p>

            {/* Amazon-style buttons */}
            <div className="flex gap-3">
              <button
                className="text-black px-4 py-2 rounded font-semibold"
                style={{ backgroundColor: '#FF9900' }} // Add to Cart
              >
                Add to Cart
              </button>
              <button
                className="text-black px-4 py-2 rounded font-semibold"
                style={{ backgroundColor: '#FFA41C' }} // Buy Now
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
