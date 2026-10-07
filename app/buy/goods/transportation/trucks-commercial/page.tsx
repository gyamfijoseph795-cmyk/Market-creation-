import Link from "next/link";

export default function TrucksCommercialPage() {
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
          Trucks & Commercial Vehicles
        </h1>

        <p className="text-gray-600 mb-8">
          Find trucks, commercial vehicles and specialized vehicles
          available from people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/transportation/trucks-commercial/pickup-trucks"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Pickup Trucks
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Pickup trucks for personal, agricultural and commercial use.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/trucks-commercial/heavy-trucks"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Heavy Trucks
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Heavy-duty trucks for transporting goods and equipment.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/trucks-commercial/buses"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Buses & Coaches
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Buses, coaches and other passenger transport vehicles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/trucks-commercial/delivery"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Delivery Vehicles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Vans and vehicles designed for deliveries and logistics.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/trucks-commercial/agricultural"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Agricultural Vehicles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Tractors and other vehicles used in agriculture.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/trucks-commercial/construction"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Construction Vehicles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Construction and heavy-duty work vehicles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/trucks-commercial/special-purpose"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Special-Purpose Vehicles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Emergency, utility and other specialized vehicles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/trucks-commercial/other"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Other Commercial Vehicles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Other commercial vehicles not listed above.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}