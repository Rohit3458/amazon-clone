import { getProducts, deleteProduct } from "../create/actions";

export default async function AdminPage() {
  const products = await getProducts();

  return (
    <main className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-sm font-bold">₹{product.price}</p>
            <form action={deleteProduct}>
              <input type="hidden" name="id" value={product.id} />
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
