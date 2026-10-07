import Link from "next/link";

export default function MotorcyclesPage() {
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
          Motorcycles
        </h1>

        <p className="text-gray-600 mb-8">
          Find motorcycles, scooters and other two-wheeled motor
          vehicles available from people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/transportation/motorcycles/standard"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Standard Motorcycles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Everyday motorcycles for personal and general use.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/motorcycles/sport"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Sport Motorcycles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Sport bikes and performance motorcycles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/motorcycles/dirt-off-road"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Dirt & Off-Road Motorcycles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Motorcycles designed for rough roads and off-road use.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/motorcycles/scooters"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Scooters
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Scooters and other lightweight two-wheeled vehicles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/motorcycles/electric"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Electric Motorcycles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Electric motorcycles and electric scooters.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/motorcycles/three-wheelers"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Three-Wheelers
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Motorized three-wheeled vehicles.
            </p>
          </Link>

          <Link
            href="/buy/goods/transportation/motorcycles/other"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Other Motorcycles
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Other motorcycles and two-wheeled vehicles not listed above.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}