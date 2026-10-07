import Link from "next/link";

const categories = [
  {
    name: "Plastic Waste",
    slug: "plastic-waste",
    description: "Plastic bottles, containers, bags and other plastic materials.",
  },
  {
    name: "Paper & Cardboard",
    slug: "paper-cardboard",
    description: "Paper, cartons, newspapers, boxes and cardboard materials.",
  },
  {
    name: "Metal Waste",
    slug: "metal-waste",
    description: "Scrap metal, aluminium, copper, iron and other metals.",
  },
  {
    name: "Glass Waste",
    slug: "glass-waste",
    description: "Glass bottles, containers and other reusable glass materials.",
  },
  {
    name: "Electronic Waste",
    slug: "electronic-waste",
    description: "Old electronics, appliances, cables and electronic components.",
  },
  {
    name: "Textile & Clothing Waste",
    slug: "textile-clothing-waste",
    description: "Used clothing, fabrics, shoes and textile materials.",
  },
  {
    name: "Organic Waste",
    slug: "organic-waste",
    description: "Organic materials suitable for composting or other uses.",
  },
  {
    name: "Other Waste & Used Materials",
    slug: "other-waste-used-materials",
    description: "Other recyclable, reusable or used materials.",
  },
];

export default function SellWasteUsedMaterialsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Sell Waste & Used Materials
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600">
          Choose the type of waste or used material you want to list.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/sell/goods/waste-used-materials/${category.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {category.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {category.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                List this material →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}