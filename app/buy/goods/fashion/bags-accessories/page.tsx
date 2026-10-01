import Link from "next/link";

export default function BagsAccessoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Bags & Accessories
        </h1>

        <p className="text-gray-600 mb-8">
          Find bags, accessories and fashion items from people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/fashion/bags-accessories/handbags-purses"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Handbags & Purses
            </h2>
          </Link>

          <Link
  href="/buy/goods/fashion/bags-accessories/backpacks-school-bags"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Backpacks & School Bags
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/bags-accessories/travel-bags-luggage"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Travel Bags & Luggage
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/bags-accessories/belts-wallets"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Belts & Wallets
  </h2>
</Link>

         <Link
  href="/buy/goods/fashion/bags-accessories/hats-caps"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Hats & Caps
  </h2>
</Link>

         <Link
  href="/buy/goods/fashion/bags-accessories/other-fashion-accessories"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Other Fashion Accessories
  </h2>
</Link>

        </div>

      </div>
    </main>
  );
}