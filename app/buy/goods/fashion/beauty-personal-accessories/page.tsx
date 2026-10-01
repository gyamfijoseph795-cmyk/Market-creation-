import Link from "next/link";

export default function BeautyPersonalAccessoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Beauty & Personal Accessories
        </h1>

        <p className="text-gray-600 mb-8">
          Find beauty products, personal accessories and related items from
          people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/fashion/beauty-personal-accessories/hair-hair-accessories"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Hair & Hair Accessories
            </h2>
          </Link>

          <Link
            href="/buy/goods/fashion/beauty-personal-accessories/makeup-cosmetics"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Makeup & Cosmetics
            </h2>
          </Link>

          <Link
            href="/buy/goods/fashion/beauty-personal-accessories/skincare-beauty-products"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Skincare & Beauty Products
            </h2>
          </Link>

          <Link
            href="/buy/goods/fashion/beauty-personal-accessories/perfumes-fragrances"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Perfumes & Fragrances
            </h2>
          </Link>

          <Link
            href="/buy/goods/fashion/beauty-personal-accessories/personal-care-accessories"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Personal Care Accessories
            </h2>
          </Link>

          <Link
            href="/buy/goods/fashion/beauty-personal-accessories/other-beauty-personal-accessories"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Other Beauty & Personal Accessories
            </h2>
          </Link>

        </div>

      </div>
    </main>
  );
}