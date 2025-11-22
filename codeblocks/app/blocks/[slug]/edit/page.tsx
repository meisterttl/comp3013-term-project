import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { editBlock, getBlock } from "@/app/lib/actions";
import Form from "@/app/ui/Form";

export default async function EditBlock({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")!;

  if (!userId) redirect("/login");

  const { slug } = await params;
  const block = await getBlock(slug, userId.value);

  if (!block) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex flex-wrap items-center justify-between mb-8">
          <h1 className="basis-full text-3xl font-semibold text-gray-800">
            Edit a Block
          </h1>
        </header>

        <form className="flex flex-wrap items-center" action={editBlock}>
          <input
            type="hidden"
            className="hidden"
            name="userId"
            value={userId.value}
            aria-hidden="true"
            readOnly
          />
          <input
            type="hidden"
            className="hidden"
            name="id"
            value={slug}
            aria-hidden="true"
            readOnly
          />

          <Form block={block} buttonLabel={"Save"} />
        </form>
      </div>
    </main>
  );
}
