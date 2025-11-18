import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlock, deleteBlock } from "@/app/lib/actions";
import DeleteButton from "@/app/components/DeleteButton";

export default async function Blocks({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const block = await getBlock(slug);

  if (!block) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex flex-wrap items-center justify-between mb-8">
          <div className="flex basis-full items-center md:justify-end mb-4">
            <DeleteButton onClick={deleteBlock} slug={slug} />

            <Link
              href={`/blocks/${slug}/edit`}
              className="inline-block mr-2 md:mr-0 md:ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Edit
            </Link>
          </div>

          <h1 className="basis-full text-3xl font-semibold text-gray-800">
            {block!.title}
          </h1>
        </header>

        <pre>
          <code>{block!.code}</code>
        </pre>
      </div>
    </main>
  );
}
