// app/admin/page.tsx
import prisma from '@/lib/prisma';

async function getProducts() {
  return await prisma.product.findMany();
}

async function deleteProduct(formData: FormData) {
  "use server";

  const id = formData.get("id");
  if (typeof id !== "string") throw new Error("Invalid ID");

  await prisma.product.delete({
    where: { id: parseInt(id, 10) },
  });
}

export default async function AdminPage() {
  const products = await getProducts();

  return (
    <main className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <ul className="space-y-4">
        {products.map(product => (
          <li key={product.id} className="border p-4 rounded">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-sm font-bold">₹{product.price.toFixed(2)}</p>
            <form method="post" action={deleteProduct}>
              <input type="hidden" name="id" value={product.id.toString()} />
              <button
                type="submit"
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
