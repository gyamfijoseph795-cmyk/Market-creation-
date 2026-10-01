import Link from "next/link";

export default function FashionPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Fashion
        </h1>

        <p className="text-gray-600 mb-8">
          Find clothing, footwear, accessories and other fashion products
          from people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/goods/fashion/clothing"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Clothing
            </h2>
          </Link>

         <Link
  href="/buy/goods/fashion/shoes-footwear"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Shoes & Footwear
  </h2>
</Link>

         <Link
  href="/buy/goods/fashion/bags-accessories"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Bags & Accessories
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/jewelry-watches"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Jewelry & Watches
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/traditional-wear"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Traditional Wear
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/beauty-personal-accessories"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Beauty & Personal Accessories
  </h2>
</Link>

        </div>

      </div>
    </main>
  );
}