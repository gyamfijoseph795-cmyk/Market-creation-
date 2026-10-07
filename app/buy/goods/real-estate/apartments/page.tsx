import Link from "next/link";

const apartmentTypes = [
  {
    name: "Studio Apartments",
    description:
      "Compact apartments with an open living and sleeping space.",
    href: "/buy/goods/real-estate/apartments/studio",
    icon: "🏠",
  },
  {
    name: "1-Bedroom Apartments",
    description:
      "Apartments with one separate bedroom.",
    href: "/buy/goods/real-estate/apartments/1-bedroom",
    icon: "🛏️",
  },
  {
    name: "2-Bedroom Apartments",
    description:
      "Apartments with two separate bedrooms.",
    href: "/buy/goods/real-estate/apartments/2-bedroom",
    icon: "🏠",
  },
  {
    name: "3-Bedroom Apartments",
    description:
      "Apartments with three separate bedrooms.",
    href: "/buy/goods/real-estate/apartments/3-bedroom",
    icon: "🏡",
  },
  {
    name: "4+ Bedroom Apartments",
    description:
      "Large apartments with four or more bedrooms.",
    href: "/buy/goods/real-estate/apartments/4-plus-bedroom",
    icon: "🏢",
  },
  {
    name: "Penthouse Apartments",
    description:
      "Premium apartments usually located on upper floors.",
    href: "/buy/goods/real-estate/apartments/penthouse",
    icon: "🌆",
  },
  {
    name: "Other Apartments",
    description:
      "Apartments that do not fit the categories above.",
    href: "/buy/goods/real-estate/apartments/other",
    icon: "🏘️",
  },
];

export default function ApartmentsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <div className="mb-10">

          <Link
            href="/buy/goods/real-estate"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back to Real Estate & Property
          </Link>

          <p className="text-sm font-semibold text-blue-600 mt-6">
            GOODS • REAL ESTATE & PROPERTY • APARTMENTS
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Apartments
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl">
            Find apartments available for sale, rent or lease in
            different sizes and styles.
          </p>

        </div>

        {/* Apartment Types */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {apartmentTypes.map((apartment) => (

            <Link
              key={apartment.name}
              href={apartment.href}
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition"
            >

              <div className="text-4xl mb-4">
                {apartment.icon}
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                {apartment.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {apartment.description}
              </p>

              <p className="text-blue-600 font-semibold mt-5">
                Browse {apartment.name} →
              </p>

            </Link>

          ))}

        </div>

        {/* Important Listing Attributes */}

        <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">

          <h2 className="text-xl font-bold text-gray-900">
            Apartment listing options
          </h2>

          <p className="text-gray-600 mt-2">
            Sellers will be able to provide additional details
            about each apartment, including:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl bg-white p-4 border border-blue-100">
              <p className="font-semibold text-gray-900">
                Transaction
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Sale, rent or lease
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border border-blue-100">
              <p className="font-semibold text-gray-900">
                Furnishing
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Furnished, unfurnished or semi-furnished
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border border-blue-100">
              <p className="font-semibold text-gray-900">
                Location
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Area, city and country
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border border-blue-100">
              <p className="font-semibold text-gray-900">
                Bedrooms & Bathrooms
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Number of bedrooms and bathrooms
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border border-blue-100">
              <p className="font-semibold text-gray-900">
                Price
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Asking price or rental price
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border border-blue-100">
              <p className="font-semibold text-gray-900">
                Availability
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Available now or from a specified date
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}