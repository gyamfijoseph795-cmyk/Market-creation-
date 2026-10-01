import Link from "next/link";

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Food
        </h1>

        <p className="text-gray-600 mb-8">
          Find fresh food, prepared meals and other food products from sellers
          around you.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/food/fresh-produce"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Fresh Produce
            </h2>
          </Link>

          <Link
            href="/buy/goods/food/meat-fish"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Meat & Fish
            </h2>
          </Link>

          <Link
            href="/buy/goods/food/prepared-food"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Prepared Food
            </h2>
          </Link>

          <Link
            href="/buy/goods/food/grains-cereals"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Grains & Cereals
            </h2>
          </Link>

          <Link
            href="/buy/goods/food/drinks-beverages"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Drinks & Beverages
            </h2>
          </Link>

          <Link
            href="/buy/goods/food/snacks-confectionery"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Snacks & Confectionery
            </h2>
          </Link>

        </div>

      </div>
    </main>
  );
}