import Link from "next/link";

const categories = [
  {
    name: "Clothing",
    description:
      "Dresses, shirts, trousers, skirts, jeans, jackets and other clothing.",
    href: "/sell/goods/fashion/clothing?listingType=Goods",
  },
  {
    name: "Shoes & Footwear",
    description:
      "Sneakers, sandals, boots, slippers, heels and other footwear.",
    href: "/sell/goods/fashion/shoes-footwear?listingType=Goods",
  },
  {
    name: "Bags",
    description:
      "Handbags, backpacks, school bags, travel bags and other bags.",
    href: "/sell/goods/fashion/bags?listingType=Goods",
  },
  {
    name: "Jewelry",
    description:
      "Necklaces, bracelets, rings, earrings and other jewelry.",
    href: "/sell/goods/fashion/jewelry?listingType=Goods",
  },
  {
    name: "Watches",
    description:
      "Wristwatches, smartwatches and other watches.",
    href: "/sell/goods/fashion/watches?listingType=Goods",
  },
  {
    name: "Fashion Accessories",
    description:
      "Belts, hats, sunglasses, scarves and other fashion accessories.",
    href: "/sell/goods/fashion/accessories?listingType=Goods",
  },
  {
    name: "Traditional & Cultural Wear",
    description:
      "Traditional clothing, cultural fabrics and ceremonial wear.",
    href: "/sell/goods/fashion/traditional-cultural-wear?listingType=Goods",
  },
  {
    name: "Other Fashion",
    description:
      "Fashion products that do not fit into the categories above.",
    href: "/sell/goods/fashion/other?listingType=Goods",
  },
];

export default function SellFashionPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Fashion
        </h1>

        <p className="text-gray-600 mb-10">
          Choose the type of fashion product you want to sell.
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