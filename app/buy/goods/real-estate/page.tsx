import Link from "next/link";

const propertyCategories = [
  {
    name: "Apartments",
    description: "Find apartments available for sale, rent or lease.",
    href: "/buy/goods/real-estate/apartments",
    icon: "🏢",
  },
  {
    name: "Single Rooms",
    description: "Find single rooms and private residential spaces.",
    href: "/buy/goods/real-estate/single-rooms",
    icon: "🚪",
  },
  {
    name: "Shared Rooms",
    description: "Find rooms and residential spaces available for sharing.",
    href: "/buy/goods/real-estate/shared-rooms",
    icon: "🛏️",
  },
  {
    name: "Houses",
    description: "Find houses available for sale, rent or lease.",
    href: "/buy/goods/real-estate/houses",
    icon: "🏠",
  },
  {
    name: "Offices",
    description: "Find offices and professional workspaces.",
    href: "/buy/goods/real-estate/offices",
    icon: "🏢",
  },
  {
    name: "Shops & Commercial Spaces",
    description: "Find shops, stores and other commercial properties.",
    href: "/buy/goods/real-estate/shops-commercial",
    icon: "🏪",
  },
  {
    name: "Land",
    description: "Find land available for sale or lease.",
    href: "/buy/goods/real-estate/land",
    icon: "🌍",
  },
  {
    name: "Other Property",
    description:
      "Find properties that do not fit into the categories above.",
    href: "/buy/goods/real-estate/other",
    icon: "🏘️",
  },
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <div className="mb-10">

          <Link
            href="/buy/goods"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back to Goods
          </Link>

          <p className="text-sm font-semibold text-blue-600 mt-6">
            GOODS • REAL ESTATE & PROPERTY
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Real Estate & Property
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl">
            Find apartments, houses, rooms, offices, shops, land and
            other properties available for sale, rent or lease.
          </p>

        </div>

        {/* Property Categories */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {propertyCategories.map((category) => (

            <Link
              key={category.name}
              href={category.href}
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition"
            >

              <div className="text-4xl mb-4">
                {category.icon}
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                {category.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {category.description}
              </p>

              <p className="text-blue-600 font-semibold mt-5">
                Browse {category.name} →
              </p>

            </Link>

          ))}

        </div>

      </div>
    </main>
  );
}