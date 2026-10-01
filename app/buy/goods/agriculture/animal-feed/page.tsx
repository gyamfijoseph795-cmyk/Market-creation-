export default function AnimalFeedPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Animal Feed
        </h1>

        <p className="text-gray-600 mb-8">
          Find animal feed and feeding products for livestock, poultry and
          other farm animals.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Poultry Feed
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Cattle Feed
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Goat & Sheep Feed
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Pig Feed
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Fish Feed
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Other Animal Feed
            </h2>
          </div>

        </div>

      </div>
    </main>
  );
}