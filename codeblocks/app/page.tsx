import Link from "next/link";
import Blocks from "./ui/Blocks";
import SkeletonBlocks from "./ui/SkeletonBlocks";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense fallback={<SkeletonBlocks />}>
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-2xl mx-auto">
          <header className="flex flex-wrap items-center justify-between mb-8">
            <div className="flex basis-full items-center md:justify-end mb-4">
              <Link
                href="/blocks/create"
                className="inline-block mr-2 md:mr-0 md:ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                + Create Block
              </Link>
            </div>
            <h1 className="basis-full text-3xl font-semibold text-gray-800">
              Code Blocks
            </h1>
          </header>

          <Blocks />
        </div>
      </main>
    </Suspense>
  );
}
