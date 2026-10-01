import Link from "next/link";

export default function JewelryWatchesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Jewelry & Watches
        </h1>

        <p className="text-gray-600 mb-8">
          Find jewelry, watches and fashion accessories from people and
          businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/fashion/jewelry-watches/necklaces-pendants"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Necklaces & Pendants
            </h2>
          </Link>

          <Link
  href="/buy/goods/fashion/jewelry-watches/rings"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Rings
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/jewelry-watches/earrings"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Earrings
  </h2>
</Link>

         <Link
  href="/buy/goods/fashion/jewelry-watches/bracelets-bangles"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Bracelets & Bangles
  </h2>
</Link>
<Link
  href="/buy/goods/fashion/jewelry-watches/watches"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Watches
  </h2>
</Link>

         <Link
  href="/buy/goods/fashion/jewelry-watches/other-jewelry-accessories"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Other Jewelry & Accessories
  </h2>
</Link>

        </div>

      </div>
    </main>
  );
}