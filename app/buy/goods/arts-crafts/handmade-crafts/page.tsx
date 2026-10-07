export default function HandmadeCraftsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Handmade Crafts
        </h1>

        <p className="text-gray-600 mb-8">
          Find handmade products, crafts and creative items made by artisans.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Beaded Crafts
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Woven Crafts
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Wood Crafts
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Handmade Bags & Accessories
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Handmade Home Decor
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Other Handmade Crafts
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}