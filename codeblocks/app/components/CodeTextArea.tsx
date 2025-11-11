export default function CodeTextArea({
  codeBlock,
  handleCodeBlock,
}: {
  codeBlock: string;
  handleCodeBlock: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="flex flex-wrap basis-full items-center md:justify-end mb-4">
      <label
        className="block basis-full mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="code"
      >
        Code
      </label>
      <textarea
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="code"
        name="code"
        maxLength={200}
        rows={8}
        value={codeBlock}
        onChange={handleCodeBlock}
      ></textarea>
    </div>
  );
}
