// app/create/page.tsx

import { createProduct } from "./actions";

export default function CreatePage() {
  return (
    <main className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Add a New Product</h1>
      <form action={createProduct} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="Name"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Price</label>
          <input
            type="number"
            name="price"
            step="0.01"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            required
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            required
            placeholder="https://example.com/image.jpg"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Product
        </button>
      </form>
    </main>
  );
}
