import Link from "next/link";

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/buy/goods/transportation"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to Transportation
        </Link>

        <p className="text-sm font-semibold text-blue-600 mt-6">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Cars
        </h1>

        <p className="text-gray-600 mb-8">
          Find cars and other passenger vehicles available from
          people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/transportation/cars/sedans"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Sedans
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Saloon cars and other four-door passenger cars.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/cars/suvs"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              SUVs
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Sport utility vehicles and off-road vehicles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/cars/hatchbacks"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Hatchbacks
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Compact and practical hatchback cars.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/cars/coupes"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Coupes & Sports Cars
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Coupes, sports cars and performance vehicles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/cars/vans"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Vans & Minivans
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Passenger vans, minivans and family vehicles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/cars/electric-hybrid"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Electric & Hybrid Cars
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Electric, hybrid and other alternative-fuel cars.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/cars/other"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Other Cars
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Other passenger vehicles not listed above.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}