import Link from "next/link";

const categories = [
  {
    name: "Paintings & Drawings",
    slug: "paintings-drawings",
    description:
      "Original paintings, drawings, illustrations and other visual artworks.",
  },
  {
    name: "Sculptures",
    slug: "sculptures",
    description:
      "Sculptures, statues, figures and three-dimensional artworks.",
  },
  {
    name: "Handmade Crafts",
    slug: "handmade-crafts",
    description:
      "Handmade decorative, creative and functional craft products.",
  },
  {
    name: "Pottery & Ceramics",
    slug: "pottery-ceramics",
    description:
      "Pots, bowls, vases, ceramics and other handmade clay products.",
  },
  {
    name: "Woodcraft",
    slug: "woodcraft",
    description:
      "Carvings, wooden decorations, furniture pieces and other woodcraft.",
  },
  {
    name: "Beadwork",
    slug: "beadwork",
    description:
      "Beaded jewellery, decorations, accessories and handmade bead products.",
  },
  {
    name: "Traditional & Cultural Art",
    slug: "traditional-cultural-art",
    description:
      "Traditional artworks, cultural crafts and heritage-inspired creations.",
  },
  {
    name: "Other Arts & Crafts",
    slug: "other-arts-crafts",
    description:
      "Other artistic and handmade products not listed above.",
  },
];

export default function SellArtsCraftsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Sell Arts & Crafts
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600">
          Choose the type of art or craft you want to list.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/sell/goods/arts-crafts/${category.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {category.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {category.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                List this item →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}