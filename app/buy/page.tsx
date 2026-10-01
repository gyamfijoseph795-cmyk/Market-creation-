import Link from "next/link";

export default function BuyPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              YOUR MARKET
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              What are you looking for?
            </h1>
          </div>

          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm">
            🌐 English
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">

          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">🛍️</div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Goods
            </h2>

            <p className="text-gray-600 mb-6">
              Find physical products and items offered by people and businesses.
            </p>

            <Link
  href="/buy/goods"
  className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
>
  Browse Goods
</Link>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">🛠️</div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Services
            </h2>

            <p className="text-gray-600 mb-6">
              Find people and businesses offering skills, services and experiences.
            </p>

            <Link
  href="/buy/services"
  className="inline-block rounded-xl bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700"
>
  Browse Services
</Link>
          </div>

        </div>

      </div>
    </main>
  );
}