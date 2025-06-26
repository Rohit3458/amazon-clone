'use server';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function createProduct(formData: FormData) {
  const name = formData.get('name') as string;
  const price = parseFloat(formData.get('price') as string);
  const description = formData.get('description') as string;
  const imageUrl = formData.get('imageUrl') as string; // ✅ added line

  if (!name || isNaN(price) || !description || !imageUrl) return;

  await prisma.product.create({
    data: {
      name,
      price,
      description,
      imageUrl, // ✅ added line
    },
  });

  redirect('/');
}
