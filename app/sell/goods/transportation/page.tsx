import Link from "next/link";

const categories = [
  {
    name: "Cars",
    description:
      "New and used cars, sedans, SUVs, coupes and other passenger vehicles.",
    href: "/sell/goods/transportation/cars?listingType=Goods",
  },
  {
    name: "Motorcycles",
    description:
      "Motorcycles, scooters, mopeds and other two-wheeled motor vehicles.",
    href: "/sell/goods/transportation/motorcycles?listingType=Goods",
  },
  {
    name: "Bicycles",
    description:
      "Bicycles, mountain bikes, road bikes and other non-motorized bicycles.",
    href: "/sell/goods/transportation/bicycles?listingType=Goods",
  },
  {
    name: "Trucks & Commercial Vehicles",
    description:
      "Trucks, pickups, trailers and other commercial transportation vehicles.",
    href: "/sell/goods/transportation/trucks-commercial?listingType=Goods",
  },
  {
    name: "Buses & Vans",
    description:
      "Buses, minibuses, passenger vans and other people-carrier vehicles.",
    href: "/sell/goods/transportation/buses-vans?listingType=Goods",
  },
  {
    name: "Boats & Watercraft",
    description:
      "Boats, canoes, speedboats and other watercraft.",
    href: "/sell/goods/transportation/boats-watercraft?listingType=Goods",
  },
  {
    name: "Vehicle Parts & Accessories",
    description:
      "Vehicle spare parts, tyres, batteries, accessories and related products.",
    href: "/sell/goods/transportation/vehicle-parts-accessories?listingType=Goods",
  },
  {
    name: "Other Transportation",
    description:
      "Transportation products that do not fit into the categories above.",
    href: "/sell/goods/transportation/other?listingType=Goods",
  },
];

export default function SellTransportationPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Transportation
        </h1>

        <p className="text-gray-600 mb-10">
          Choose the type of transportation product you want to sell.
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