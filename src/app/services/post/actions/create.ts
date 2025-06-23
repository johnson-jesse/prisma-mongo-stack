"use server";

import { revalidatePath } from 'next/cache'

import { PrismaClient } from '@_/generated/prisma/client';

const prisma = new PrismaClient();

export async function createPost(formData: FormData) {
  // try {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const slug = formData.get("slug") as string;
  const authorId = formData.get("authorId") as string;

  // if (!title || !body || !slug || !authorId) {
  //   return NextResponse.json(
  //     { error: "Missing required fields" },
  //     { status: 400 }
  //   );
  // }

  await prisma.post.create({
    data: {
      title,
      body,
      slug,
      authorId,
    },
  });

  revalidatePath("/post");

  //   return NextResponse.json(post, { status: 201 });
  // } catch (error) {
  //   console.error("Error creating post:", error);
  //   return NextResponse.json(
  //     { error: "Failed to create post" },
  //     { status: 500 }
  //   );
  // }
}
