import Link from "next/link";

const categories = [
  {
    name: "Furniture",
    description:
      "Chairs, tables, beds, wardrobes, sofas and other furniture.",
    href: "/sell/goods/furniture-home/furniture?listingType=Goods",
  },
  {
    name: "Home Decor",
    description:
      "Curtains, rugs, wall decor, ornaments and other home decoration items.",
    href: "/sell/goods/furniture-home/home-decor?listingType=Goods",
  },
  {
    name: "Kitchen & Dining",
    description:
      "Kitchenware, cookware, dining sets and other kitchen and dining items.",
    href: "/sell/goods/furniture-home/kitchen-dining?listingType=Goods",
  },
  {
    name: "Bedding & Mattresses",
    description:
      "Mattresses, bedsheets, pillows, blankets and other bedding products.",
    href: "/sell/goods/furniture-home/bedding-mattresses?listingType=Goods",
  },
  {
    name: "Lighting",
    description:
      "Lamps, chandeliers, bulbs and other lighting products.",
    href: "/sell/goods/furniture-home/lighting?listingType=Goods",
  },
  {
    name: "Bathroom & Household",
    description:
      "Bathroom products, cleaning items and other household essentials.",
    href: "/sell/goods/furniture-home/bathroom-household?listingType=Goods",
  },
  {
    name: "Storage & Organization",
    description:
      "Shelves, cabinets, storage boxes and other organization products.",
    href: "/sell/goods/furniture-home/storage-organization?listingType=Goods",
  },
  {
    name: "Other Furniture & Home",
    description:
      "Furniture and home products that do not fit into the categories above.",
    href: "/sell/goods/furniture-home/other?listingType=Goods",
  },
];

export default function SellFurnitureHomePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Furniture & Home
        </h1>

        <p className="text-gray-600 mb-10">
          Choose the type of furniture or home product you want to sell.
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