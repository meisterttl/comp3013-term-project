import { createBlock } from "@/app/lib/actions";
import Form from "@/app/ui/Form";

export default function CreateBlock() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex flex-wrap items-center justify-between mb-8">
          <h1 className="basis-full text-3xl font-semibold text-gray-800">
            Create a Block
          </h1>
        </header>

        <form className="flex flex-wrap items-center" action={createBlock}>
          <Form block={null} />
        </form>
      </div>
    </main>
  );
}
