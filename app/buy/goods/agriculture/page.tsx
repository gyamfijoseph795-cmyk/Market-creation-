import Link from "next/link";

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Agriculture
        </h1>

        <p className="text-gray-600 mb-8">
          Find agricultural products, farm produce, livestock and farming supplies.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/agriculture/farm-produce"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Farm Produce
            </h2>
          </Link>

          <Link
            href="/buy/goods/agriculture/livestock-poultry"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Livestock & Poultry
            </h2>
          </Link>

          <Link
            href="/buy/goods/agriculture/seeds-planting-materials"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Seeds & Planting Materials
            </h2>
          </Link>

          <Link
            href="/buy/goods/agriculture/farm-equipment-tools"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Farm Equipment & Tools
            </h2>
          </Link>

          <Link
            href="/buy/goods/agriculture/fertilizers-farm-inputs"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Fertilizers & Farm Inputs
            </h2>
          </Link>

          <Link
            href="/buy/goods/agriculture/animal-feed"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Animal Feed
            </h2>
          </Link>

        </div>

      </div>
    </main>
  );
}