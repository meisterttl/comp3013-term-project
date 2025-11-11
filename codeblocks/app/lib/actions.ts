import { prisma } from "@/database";
import { redirect } from "next/navigation";

export async function createBlock(formData: FormData) {
  "use server";

  const title = (formData.get("title") as string).trim();
  const code = (formData.get("code") as string).trim();

  await prisma.block.create({
    data: {
      title,
      code,
    },
  });

  redirect("/");
}

export async function editBlock(formData: FormData) {
  "use server";

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  await prisma.block.update({
    where: {
      id: Number(id),
    },
    data: {
      title: title,
      code: code,
    },
  });

  redirect(`/blocks/${id}`);
}

export async function getBlock(slug: string) {
  "use server";

  return await prisma.block.findUnique({
    where: {
      id: Number(slug),
    },
  });
}

export async function deleteBlock(slug: string) {
  "use server";

  await prisma.block.delete({
    where: {
      id: Number(slug),
    },
  });
}
