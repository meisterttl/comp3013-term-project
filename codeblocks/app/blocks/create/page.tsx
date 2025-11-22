import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createBlock } from "@/app/lib/actions";
import Form from "@/app/ui/Form";

export default async function CreateBlock() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")!;

  if (!userId) redirect("/login");

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex flex-wrap items-center justify-between mb-8">
          <h1 className="basis-full text-3xl font-semibold text-gray-800">
            Create a Block
          </h1>
        </header>

        <form className="flex flex-wrap items-center" action={createBlock}>
          <input
            type="hidden"
            className="hidden"
            name="userId"
            value={userId.value}
            aria-hidden="true"
            readOnly
          />

          <Form block={null} buttonLabel={"Create"} />
        </form>
      </div>
    </main>
  );
}
