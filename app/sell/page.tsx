import Link from "next/link";

export default function SellPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          What do you want to sell?
        </h1>

        <p className="text-gray-600 mb-10">
          Choose whether you are selling a physical product or offering a
          service.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">

          <Link
            href="/sell/goods"
            className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition"
          >
            <div className="text-4xl mb-4">
              🛍️
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Goods
            </h2>

            <p className="text-gray-600">
              Sell physical products, items, materials and other goods.
            </p>

            <div className="mt-6 text-blue-600 font-semibold">
              Sell Goods →
            </div>
          </Link>

          <Link
            href="/sell/services"
            className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 transition"
          >
            <div className="text-4xl mb-4">
              🛠️
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Services
            </h2>

            <p className="text-gray-600">
              Offer your skills, expertise, performances or professional
              services.
            </p>

            <div className="mt-6 text-green-600 font-semibold">
              Offer Services →
            </div>
          </Link>

        </div>

      </div>
    </main>
  );
}