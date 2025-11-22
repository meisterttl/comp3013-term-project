import { handleLogin } from "@/app/lib/actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const errorParams = await searchParams;

  return (
    <main className="flex items-center min-h-screen bg-gray-50 p-8">
      <div className="max-w-sm mx-auto">
        <header className="flex flex-wrap items-center justify-between mb-8">
          <h1 className="basis-full text-3xl font-semibold text-gray-800">
            Login Page
          </h1>
        </header>

        <form action={handleLogin} className="flex flex-wrap items-center">
          <div className="flex flex-wrap basis-full items-center md:justify-end mb-4">
            <label
              htmlFor="username"
              className="block basis-full mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              id="username"
              type="username"
              name="username"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap basis-full items-center md:justify-end mb-4">
            <label
              htmlFor="password"
              className="block basis-full mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {errorParams.error && "credential" === errorParams.error && (
            <div className="flex flex-wrap basis-full items-center md:justify-end mb-4">
              <p className="block basis-full mb-2 font-medium text-red-500">
                Invalid Credential!
              </p>
            </div>
          )}

          <button
            type="submit"
            className="flex w-full justify-center mt-4 px-4 py-2.5 text-sm font-medium text-white rounded-lg transition bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-800 dark:disabled:text-blue-400 cursor-pointer"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
