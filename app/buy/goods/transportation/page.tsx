import Link from "next/link";

export default function TransportationPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Transportation
        </h1>

        <p className="text-gray-600 mb-8">
          Browse vehicles, watercraft and other transportation equipment
          available from people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/transportation/cars"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Cars
            </h2>
          </Link>

          <Link
            href="/buy/goods/transportation/motorcycles"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Motorcycles
            </h2>
          </Link>

          <Link
            href="/buy/goods/transportation/bicycles"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Bicycles
            </h2>
          </Link>

          <Link
            href="/buy/goods/transportation/boats-watercraft"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Boats & Watercraft
            </h2>
          </Link>

          <Link
            href="/buy/goods/transportation/trucks-commercial"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Trucks & Commercial Vehicles
            </h2>
          </Link>

          <Link
            href="/buy/goods/transportation/other"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Other Transportation
            </h2>
          </Link>

        </div>
      </div>
    </main>
  );
}