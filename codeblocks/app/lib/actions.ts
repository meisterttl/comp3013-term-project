import { prisma } from "@/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createBlock(formData: FormData) {
  "use server";

  const title = (formData.get("title") as string).trim();
  const code = (formData.get("code") as string).trim();
  const userId = Number(formData.get("userId"));

  await prisma.block.create({
    data: {
      title,
      code,
      userId,
    },
  });

  redirect("/");
}

export async function editBlock(formData: FormData) {
  "use server";

  const userId = Number(formData.get("userId"));
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  await prisma.block.update({
    where: {
      id: Number(id),
      userId: userId,
    },
    data: {
      title: title,
      code: code,
    },
  });

  redirect(`/blocks/${id}`);
}

export async function getBlock(slug: string, userId: string) {
  "use server";

  return await prisma.block.findUnique({
    where: {
      id: Number(slug),
      userId: Number(userId),
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

export async function handleLogin(formData: FormData) {
  "use server";

  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  let errorRedirect = "";

  try {
    const foundUser = await prisma.user.findUniqueOrThrow({
      where: { username, password },
    });

    const cookieStore = await cookies();
    cookieStore.set("user_id", String(foundUser.id));
  } catch (error: unknown) {
    errorRedirect = "login?error=credential";
  } finally {
    redirect(`/${errorRedirect}`);
  }
}
