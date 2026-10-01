export default function HatsCapsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Hats & Caps
        </h1>

        <p className="text-gray-600 mb-8">
          Find hats, caps and other headwear for different styles, activities
          and occasions from people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Baseball Caps
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Bucket Hats
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Sun Hats
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Beanies & Winter Hats
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Traditional Hats
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Other Hats & Caps
            </h2>
          </div>

        </div>

      </div>
    </main>
  );
}