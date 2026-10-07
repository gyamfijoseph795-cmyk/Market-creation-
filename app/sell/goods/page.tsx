import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    description: "Phones, computers, appliances, cameras and electronics.",
    href: "/sell/goods/electronics?listingType=Goods",
  },
  {
    name: "Fashion",
    description: "Clothing, shoes, bags, jewelry and accessories.",
    href: "/sell/goods/fashion?listingType=Goods",
  },
  {
    name: "Food",
    description: "Fresh food, prepared food, drinks and other food products.",
    href: "/sell/goods/food?listingType=Goods",
  },
  {
    name: "Agriculture",
    description: "Farm produce, livestock, seeds, equipment and farm inputs.",
    href: "/sell/goods/agriculture?listingType=Goods",
  },
  {
    name: "Furniture & Home",
    description: "Furniture, home items, decoration and outdoor products.",
    href: "/sell/goods/furniture-home?listingType=Goods",
  },
  {
    name: "Transportation",
    description:
      "Cars, motorcycles, bicycles, boats, trucks and other transportation equipment.",
    href: "/sell/goods/transportation?listingType=Goods",
  },
  {
    name: "Real Estate & Property",
    description:
      "Apartments, houses, rooms, offices, shops, land and other properties.",
    href: "/sell/goods/real-estate?listingType=Goods",
  },
  {
    name: "Waste & Used Materials",
    description:
      "Plastic, scrap metal, paper, glass and other used materials.",
    href: "/sell/goods/waste-used-materials?listingType=Goods",
  },
  {
    name: "Arts & Crafts",
    description:
      "Paintings, sculptures, handmade crafts and cultural art.",
    href: "/sell/goods/arts-crafts?listingType=Goods",
  },
  {
    name: "Other Goods",
    description:
      "Find a suitable category for products not listed above.",
    href: "/sell/goods/other?listingType=Goods",
  },
];

export default function SellGoodsPage() {
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
          Choose a category for the product you want to sell.
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