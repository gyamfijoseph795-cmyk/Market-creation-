import Link from "next/link";

const categories = [
  {
    name: "Crops & Produce",
    description:
      "Fresh crops, fruits, vegetables, grains and other farm produce.",
    href: "/sell/goods/agriculture/crops-produce?listingType=Goods",
  },
  {
    name: "Livestock",
    description:
      "Cattle, goats, sheep, pigs and other farm animals.",
    href: "/sell/goods/agriculture/livestock?listingType=Goods",
  },
  {
    name: "Poultry",
    description:
      "Chickens, turkeys, ducks, guinea fowl and other poultry.",
    href: "/sell/goods/agriculture/poultry?listingType=Goods",
  },
  {
    name: "Seeds & Planting Materials",
    description:
      "Seeds, seedlings, cuttings and other planting materials.",
    href: "/sell/goods/agriculture/seeds-planting-materials?listingType=Goods",
  },
  {
    name: "Farm Inputs",
    description:
      "Fertilizers, manure, pesticides and other agricultural inputs.",
    href: "/sell/goods/agriculture/farm-inputs?listingType=Goods",
  },
  {
    name: "Farm Equipment & Tools",
    description:
      "Farm tools, machinery, irrigation equipment and other agricultural equipment.",
    href: "/sell/goods/agriculture/farm-equipment-tools?listingType=Goods",
  },
  {
    name: "Other Agriculture",
    description:
      "Agricultural products that do not fit into the categories above.",
    href: "/sell/goods/agriculture/other?listingType=Goods",
  },
];

export default function SellAgriculturePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Agriculture
        </h1>

        <p className="text-gray-600 mb-10">
          Choose the type of agricultural product you want to sell.
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