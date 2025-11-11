export default function Button({
  label,
  isDisabled,
}: {
  label: string;
  isDisabled: boolean;
}) {
  return (
    <button
      className={`inline-block px-4 py-2 text-sm font-medium text-white rounded-lg transition bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-800 dark:disabled:text-blue-400 ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      type="submit"
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}
