import { prisma } from "@/database";
import Link from "next/link";

export default async function Blocks() {
  const blocks = await prisma.block.findMany();

  return 0 === blocks.length ? (
    <p className="text-gray-500 italic text-center">
      No blocks yet. Create one to get started!
    </p>
  ) : (
    <ul className="space-y-3">
      {blocks.map((block) => (
        <li key={block.id}>
          <Link
            href={`/blocks/${block.id}`}
            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md text-gray-800 font-medium transition"
          >
            {block.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
