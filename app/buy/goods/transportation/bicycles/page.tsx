import Link from "next/link";

export default function BicyclesPage() {
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
          Bicycles
        </h1>

        <p className="text-gray-600 mb-8">
          Find bicycles and other human-powered two-wheeled vehicles
          available from people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/transportation/bicycles/road"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Road Bikes
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Lightweight bicycles designed mainly for roads and paved surfaces.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/bicycles/mountain"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Mountain Bikes
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Bicycles designed for rough roads, trails and off-road riding.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/bicycles/city"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              City & Commuter Bikes
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Practical bicycles for everyday transportation and commuting.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/bicycles/kids"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Children's Bicycles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Bicycles designed for children and young riders.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/bicycles/electric"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Electric Bicycles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Electric bicycles and pedal-assist bikes.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/bicycles/tricycles"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Tricycles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Human-powered three-wheeled cycles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/bicycles/other"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Other Bicycles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Other bicycles and cycles not listed above.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}