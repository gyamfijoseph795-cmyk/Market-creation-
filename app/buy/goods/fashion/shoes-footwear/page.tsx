import Link from "next/link";
export default function ShoesFootwearPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Shoes & Footwear
        </h1>

        <p className="text-gray-600 mb-8">
          Find shoes and footwear for men, women and children from people and
          businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
  href="/buy/goods/fashion/shoes-footwear/mens-footwear"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Men&apos;s Footwear
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/shoes-footwear/womens-footwear"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Women&apos;s Footwear
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/shoes-footwear/childrens-footwear"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Children&apos;s Footwear
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/shoes-footwear/sneakers-trainers"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Sneakers & Trainers
  </h2>
</Link>

         <Link
  href="/buy/goods/fashion/shoes-footwear/sandals-slippers"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Sandals & Slippers
  </h2>
</Link> 
<Link
  href="/buy/goods/fashion/shoes-footwear/boots"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Boots
  </h2>
</Link>

          <Link
  href="/buy/goods/fashion/shoes-footwear/other-footwear"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Other Footwear
  </h2>
</Link>

        </div>

      </div>
    </main>
  );
}