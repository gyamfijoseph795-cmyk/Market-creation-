export default function OtherGoodsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Other Goods
        </h1>

        <p className="text-gray-600 mb-8">
          Can't find the type of product you are looking for? Tell us what you need.
        </p>

        <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm">

          <label
            htmlFor="product"
            className="block text-lg font-semibold text-gray-900 mb-3"
          >
            What type of product are you looking for?
          </label>

          <textarea
            id="product"
            placeholder="Describe the product you are looking for..."
            className="w-full rounded-xl border border-gray-300 p-4 min-h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="button"
            className="mt-4 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
          >
            Search for Product
          </button>

        </div>

      </div>
    </main>
  );
}