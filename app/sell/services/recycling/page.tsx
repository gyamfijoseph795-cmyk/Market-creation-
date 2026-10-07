"use client";

import Link from "next/link";

const categories = [
  {
    name: "Plastic Recycling Services",
    description: "Collection, sorting and recycling of plastic waste.",
    path: "plastic-recycling",
  },
  {
    name: "Paper & Cardboard Recycling",
    description: "Collection and recycling of paper and cardboard materials.",
    path: "paper-cardboard-recycling",
  },
  {
    name: "Metal Recycling Services",
    description: "Collection, sorting and recycling of metal waste.",
    path: "metal-recycling",
  },
  {
    name: "Glass Recycling Services",
    description: "Collection, sorting and recycling of glass materials.",
    path: "glass-recycling",
  },
  {
    name: "Electronic Waste Recycling",
    description: "Collection and responsible recycling of electronic waste.",
    path: "electronic-waste-recycling",
  },
  {
    name: "Textile & Clothing Recycling",
    description: "Collection, reuse and recycling of textiles and clothing.",
    path: "textile-clothing-recycling",
  },
  {
    name: "Organic Waste & Composting",
    description: "Organic waste collection, composting and related services.",
    path: "organic-waste-composting",
  },
  {
    name: "Other Recycling Services",
    description: "Other recycling and waste recovery services.",
    path: "other",
  },
];

export default function RecyclingServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/sell/services"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Services
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Recycling Services
        </h1>

        <p className="mb-8 text-gray-600">
          Choose the type of recycling service you want to offer.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.path}
              href={`/sell/services/recycling/${category.path}`}
              className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                {category.name}
              </h2>

              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}