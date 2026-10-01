import Link from "next/link";
export default function ElectronicsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Electronics
        </h1>

        <p className="text-gray-600 mb-8">
          Find electronic devices, appliances and accessories from people and businesses.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
  href="/buy/goods/electronics/phones-tablets"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Phones & Tablets
  </h2>
</Link>

         <Link
  href="/buy/goods/electronics/computers-laptops"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Computers & Laptops
  </h2>
</Link>

         <Link
  href="/buy/goods/electronics/televisions-audio"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Televisions & Audio
  </h2>
</Link>
<Link
  href="/buy/goods/electronics/home-appliances"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Home Appliances
  </h2>
</Link>

         <Link
  href="/buy/goods/electronics/cameras-accessories"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Cameras & Accessories
  </h2>
</Link>

          <Link
  href="/buy/goods/electronics/electronic-parts-accessories"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Electronic Parts & Accessories
  </h2>
</Link>

        </div>

      </div>
    </main>
  );
}