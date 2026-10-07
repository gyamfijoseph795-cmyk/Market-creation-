import Link from "next/link";

export default function WasteUsedMaterialsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Waste & Used Materials
        </h1>

        <p className="text-gray-600 mb-8">
          Find recyclable materials, used items and other materials available
          for reuse or recovery.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/waste-used-materials/plastic-bottles"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Plastic & Bottles
            </h2>
          </Link>

          <Link
            href="/buy/goods/waste-used-materials/scrap-metal"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Scrap Metal
            </h2>
          </Link>

          <Link
            href="/buy/goods/waste-used-materials/paper-cardboard"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Paper & Cardboard
            </h2>
          </Link>

          <Link
            href="/buy/goods/waste-used-materials/glass"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Glass
            </h2>
          </Link>

          <Link
            href="/buy/goods/waste-used-materials/used-electronics"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Used Electronics
            </h2>
          </Link>

          <Link
            href="/buy/goods/waste-used-materials/used-clothing-textiles"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Used Clothing & Textiles
            </h2>
          </Link>

        </div>

      </div>
    </main>
  );
}