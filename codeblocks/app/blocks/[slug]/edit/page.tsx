import { editBlock, getBlock } from "@/app/lib/actions";
import Form from "@/app/ui/Form";

export default async function EditBlock({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const block = await getBlock(slug);

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
            className="hidden"
            name="id"
            value={slug}
            aria-hidden="true"
            readOnly
          />

          <Form block={block} />
        </form>
      </div>
    </main>
  );
}
