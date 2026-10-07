import Link from "next/link";

const categories = [
  {
    name: "Apartments",
    description:
      "Studios, one-bedroom, two-bedroom and larger apartments for sale or rent.",
    href: "/sell/goods/real-estate/apartments?listingType=Goods",
  },
  {
    name: "Single Rooms",
    description:
      "Single rooms and self-contained rooms available for sale or rent.",
    href: "/sell/goods/real-estate/single-rooms?listingType=Goods",
  },
  {
    name: "Shared Rooms",
    description:
      "Shared rooms and room-sharing opportunities for individuals and students.",
    href: "/sell/goods/real-estate/shared-rooms?listingType=Goods",
  },
  {
    name: "Houses",
    description:
      "Detached houses, semi-detached houses, townhouses and other residential properties.",
    href: "/sell/goods/real-estate/houses?listingType=Goods",
  },
  {
    name: "Offices",
    description:
      "Office spaces, office buildings and professional workspaces.",
    href: "/sell/goods/real-estate/offices?listingType=Goods",
  },
  {
    name: "Shops & Commercial Spaces",
    description:
      "Shops, stores, warehouses and other commercial properties.",
    href: "/sell/goods/real-estate/shops-commercial-spaces?listingType=Goods",
  },
  {
    name: "Land",
    description:
      "Residential, commercial, agricultural and other land for sale or lease.",
    href: "/sell/goods/real-estate/land?listingType=Goods",
  },
  {
    name: "Other Property",
    description:
      "Real estate and property listings that do not fit into the categories above.",
    href: "/sell/goods/real-estate/other?listingType=Goods",
  },
];

export default function SellRealEstatePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Real Estate & Property
        </h1>

        <p className="text-gray-600 mb-10">
          Choose the type of property you want to sell, rent or lease.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {category.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {category.description}
              </p>

              <div className="mt-5 text-blue-600 font-semibold">
                Choose {category.name} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}