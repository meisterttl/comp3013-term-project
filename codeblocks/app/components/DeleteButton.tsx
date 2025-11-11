"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({
  onClick,
  slug,
}: {
  onClick: (slug: string) => Promise<void>;
  slug: string;
}) {
  const router = useRouter();

  const handleClick = async () => {
    await onClick(slug);
    router.push("/");
  };

  return (
    <button
      className="inline-block mr-2 md:mr-0 md:ml-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-800 dark:disabled:text-blue-400 cursor-pointer"
      onClick={handleClick}
    >
      Delete
    </button>
  );
}
