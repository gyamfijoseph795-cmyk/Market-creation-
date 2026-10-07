import Link from "next/link";

const studioOptions = [
  {
    name: "Studio for Sale",
    description:
      "Find studio apartments available for purchase.",
    href: "/buy/goods/real-estate/apartments/studio/for-sale",
    icon: "🏠",
  },
  {
    name: "Studio for Rent",
    description:
      "Find studio apartments available for rent.",
    href: "/buy/goods/real-estate/apartments/studio/for-rent",
    icon: "🔑",
  },
  {
    name: "Studio for Lease",
    description:
      "Find studio apartments available for lease.",
    href: "/buy/goods/real-estate/apartments/studio/for-lease",
    icon: "📄",
  },
];

export default function StudioApartmentsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <div className="mb-10">

          <Link
            href="/buy/goods/real-estate/apartments"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back to Apartments
          </Link>

          <p className="text-sm font-semibold text-blue-600 mt-6">
            GOODS • REAL ESTATE & PROPERTY • APARTMENTS • STUDIO
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Studio Apartments
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl">
            Find studio apartments available for sale, rent or
            lease in different locations and price ranges.
          </p>

        </div>

        {/* Transaction Options */}

        <div className="grid gap-6 md:grid-cols-3">

          {studioOptions.map((option) => (

            <Link
              key={option.name}
              href={option.href}
              className="rounded-2xl bg-white border border-gray-200 p-7 shadow-sm hover:border-blue-300 hover:shadow-md transition"
            >

              <div className="text-4xl mb-5">
                {option.icon}
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                {option.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {option.description}
              </p>

              <p className="text-blue-600 font-semibold mt-5">
                Browse Listings →
              </p>

            </Link>

          ))}

        </div>

        {/* Listing Information */}

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-7">

          <h2 className="text-xl font-bold text-gray-900">
            What you can specify in a studio listing
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Furnishing
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Furnished, unfurnished or semi-furnished
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Location
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Area, city and country
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Bathrooms
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Number of bathrooms
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Price
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Sale price or rental/lease price
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Availability
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Available now or from a specified date
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Photos
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Photos of the apartment and its surroundings
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}