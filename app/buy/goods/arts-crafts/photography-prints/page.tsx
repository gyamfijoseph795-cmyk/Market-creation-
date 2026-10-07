export default function PhotographyPrintsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Photography & Prints
        </h1>

        <p className="text-gray-600 mb-8">
          Find photographs, art prints and printed creative works from
          photographers and artists.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Fine Art Photography
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Nature & Landscape Photography
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Portrait Photography
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Art Prints
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Posters & Wall Prints
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Other Photography & Prints
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}