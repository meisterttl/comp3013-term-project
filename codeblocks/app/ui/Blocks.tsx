import { prisma } from "@/database";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Link from "next/link";

export default async function Blocks({ userId }: { userId: RequestCookie }) {
  const blocks = await prisma.block.findMany({
    where: { userId: Number(userId.value) },
  });

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
