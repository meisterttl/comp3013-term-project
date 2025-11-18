export default function SkeletonBlocks() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 animate-pulse">
      <div className="max-w-2xl mx-auto">
        {/* Header skeleton */}
        <header className="flex items-center justify-between mb-8">
          <div className="h-8 w-40 bg-gray-300 rounded"></div>
          <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
        </header>

        {/* List skeleton */}
        <ul className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-5 w-48 bg-gray-300 rounded"></div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
