import Link from "next/link";

const categories = [
  {
    name: "Phones & Tablets",
    description: "Smartphones, tablets, feature phones and accessories.",
    href: "/sell/goods/electronics/phones-tablets?listingType=Goods",
  },
  {
    name: "Computers & Laptops",
    description: "Laptops, desktops, monitors and computer accessories.",
    href: "/sell/goods/electronics/computers-laptops?listingType=Goods",
  },
  {
    name: "Televisions & Audio",
    description: "TVs, speakers, headphones and audio equipment.",
    href: "/sell/goods/electronics/televisions-audio?listingType=Goods",
  },
  {
    name: "Home Appliances",
    description: "Refrigerators, washing machines, cookers and other appliances.",
    href: "/sell/goods/electronics/home-appliances?listingType=Goods",
  },
  {
    name: "Cameras & Accessories",
    description: "Cameras, lenses, tripods and photography equipment.",
    href: "/sell/goods/electronics/cameras-accessories?listingType=Goods",
  },
  {
    name: "Electronic Parts & Accessories",
    description: "Chargers, cables, batteries, components and accessories.",
    href: "/sell/goods/electronics/electronic-parts-accessories?listingType=Goods",
  },
];

export default function SellElectronicsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Electronics
        </h1>

        <p className="text-gray-600 mb-10">
          Choose the type of electronic product you want to sell.
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