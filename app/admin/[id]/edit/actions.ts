'use server';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

// Fetch product by ID
export async function getProductById(id: number) {
  return await prisma.product.findUnique({
    where: { id },
  });
}

// Update the product
export async function updateProduct(formData: FormData) {
  const id = Number(formData.get('id'));
  const name = formData.get('name') as string;
  const price = parseFloat(formData.get('price') as string);
  const description = formData.get('description') as string;
  const imageUrl = formData.get('imageUrl') as string;

  if (!id || !name || isNaN(price) || !description || !imageUrl) return;

  await prisma.product.update({
    where: { id },
    data: {
      name,
      price,
      description,
      imageUrl,
    },
  });

  redirect('/');
}
