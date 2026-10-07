import Link from "next/link";

export default function OtherTransportationPage() {
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
          Other Transportation
        </h1>

        <p className="text-gray-600 mb-8">
          Find transportation equipment and vehicles that do not fit
          into the other transportation categories.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/transportation/other/aircraft"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Aircraft
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Aircraft and other flying vehicles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/other/horse-drawn"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Horse-Drawn & Animal-Powered
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Carts, carriages and other animal-powered transportation.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/other/mobility"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Mobility Equipment
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Wheelchairs, mobility scooters and related equipment.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/other/personal"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Personal Transport
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Personal transport devices and equipment.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/other/parts-accessories"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Transportation Parts & Accessories
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Parts, accessories and equipment for transportation.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/other/other"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Other
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Transportation items not listed above.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}