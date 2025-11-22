"use client";

import { useRouter } from "next/navigation";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default function DeleteButton({
  onClick,
  slug,
  userId,
}: {
  onClick: (slug: string, userId: string) => Promise<void>;
  slug: string;
  userId: RequestCookie;
}) {
  const router = useRouter();

  const handleClick = async () => {
    await onClick(slug, userId.value);
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
