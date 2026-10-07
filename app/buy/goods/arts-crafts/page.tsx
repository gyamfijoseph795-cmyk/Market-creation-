import Link from "next/link";

export default function ArtsCraftsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Arts & Crafts
        </h1>

        <p className="text-gray-600 mb-8">
          Find artwork, handmade products, cultural art and creative pieces
          from artists and sellers.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/arts-crafts/paintings"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Paintings
            </h2>
          </Link>

          <Link
            href="/buy/goods/arts-crafts/drawings-illustrations"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Drawings & Illustrations
            </h2>
          </Link>

          <Link
            href="/buy/goods/arts-crafts/sculptures"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Sculptures
            </h2>
          </Link>

          <Link
            href="/buy/goods/arts-crafts/handmade-crafts"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Handmade Crafts
            </h2>
          </Link>

          <Link
            href="/buy/goods/arts-crafts/photography-prints"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Photography & Prints
            </h2>
          </Link>

          <Link
            href="/buy/goods/arts-crafts/traditional-cultural-art"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Traditional & Cultural Art
            </h2>
          </Link>

        </div>

      </div>
    </main>
  );
}