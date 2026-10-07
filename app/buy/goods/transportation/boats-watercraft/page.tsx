import Link from "next/link";

export default function BoatsWatercraftPage() {
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
          Boats & Watercraft
        </h1>

        <p className="text-gray-600 mb-8">
          Find boats, canoes, ships and other watercraft available from
          people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/transportation/boats-watercraft/boats"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Boats
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Motorboats, fishing boats and other boats.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/boats-watercraft/canoes"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Canoes
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Canoes and traditional small watercraft.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/boats-watercraft/kayaks"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Kayaks
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Kayaks and recreational watercraft.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/boats-watercraft/yachts"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Yachts
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Yachts and luxury watercraft.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/boats-watercraft/ships"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Ships
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Ships, ferries and larger vessels.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/boats-watercraft/other"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Other Watercraft
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Other watercraft not listed above.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}