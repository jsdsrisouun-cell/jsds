'use server';
import { writeFile, readFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export default async function createContact(initialState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const contact = {
    id: Date.now().toString(),
    ...parsed.data,
    createdAt: new Date().toISOString(),
  };

  try {
    const path = './data/contacts.json';
    let arr = [] as any[];
    try {
      const existing = await readFile(path, 'utf-8');
      arr = JSON.parse(existing);
    } catch (e) {
      arr = [];
    }
    arr.push(contact);
    await writeFile(path, JSON.stringify(arr, null, 2), 'utf-8');
    // Revalidate the home page so latest message appears if needed
    revalidatePath('/');
    return { success: true };
  } catch (e) {
    return { error: 'Could not write contact' };
  }
}