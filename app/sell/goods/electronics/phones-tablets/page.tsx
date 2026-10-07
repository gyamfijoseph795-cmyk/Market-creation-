import Link from "next/link";

export default function SellPhonesTabletsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Phones & Tablets
        </h1>

        <p className="text-gray-600 mb-10">
          Select the type of product you want to sell.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/sell/create-listing?listingType=Goods&category=Electronics&subcategory=Phones%20%26%20Tablets&product=Smartphones"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md hover:border-blue-300 transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Smartphones
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Create a listing for a smartphone.
            </p>
          </Link>

          {[
            "Tablets",
            "Feature Phones",
            "Phone Accessories",
            "Tablet Accessories",
            "Other Mobile Devices",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-6 border border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {item}
              </h2>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}