import Link from "next/link";

export default function FurnitureHomePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Furniture & Home
        </h1>

        <p className="text-gray-600 mb-8">
          Find furniture, home products and items for your living spaces.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/furniture-home/living-room"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Living Room
            </h2>
          </Link>

          <Link
            href="/buy/goods/furniture-home/bedroom"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Bedroom
            </h2>
          </Link>

          <Link
            href="/buy/goods/furniture-home/kitchen-dining"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Kitchen & Dining
            </h2>
          </Link>

          <Link
            href="/buy/goods/furniture-home/office-furniture"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Office Furniture
            </h2>
          </Link>

          <Link
            href="/buy/goods/furniture-home/home-decor"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Home Decor
            </h2>
          </Link>

          <Link
            href="/buy/goods/furniture-home/garden-outdoor"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Garden & Outdoor
            </h2>
          </Link>

        </div>

      </div>
    </main>
  );
}