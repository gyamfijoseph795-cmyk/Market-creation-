import Link from "next/link";

export default function GoodsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Goods
        </h1>

        <p className="text-gray-600 mb-8">
          Browse products and items available from people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/electronics"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Electronics
            </h2>
          </Link>

          <Link
            href="/buy/goods/fashion"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Fashion
            </h2>
          </Link>

          <Link
            href="/buy/goods/food"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Food
            </h2>
          </Link>

          <Link
            href="/buy/goods/agriculture"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Agriculture
            </h2>
          </Link>

          <Link
            href="/buy/goods/furniture-home"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Furniture & Home
            </h2>
          </Link>

          <Link
            href="/buy/goods/transportation"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Transportation
            </h2>
          </Link>

          <Link
            href="/buy/goods/waste-used-materials"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Waste & Used Materials
            </h2>
          </Link>

          <Link
            href="/buy/goods/arts-crafts"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Arts & Crafts
            </h2>
          </Link>

          <Link
            href="/buy/goods/other"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Other Goods
            </h2>
          </Link>

        </div>
      </div>
    </main>
  );
}