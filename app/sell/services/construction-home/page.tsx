import Link from "next/link";

const services = [
  {
    name: "Building & Construction",
    path: "building-construction",
    description:
      "Building, renovation and general construction services.",
  },
  {
    name: "Plumbing",
    path: "plumbing",
    description:
      "Water systems, pipes, fittings, repairs and plumbing installation.",
  },
  {
    name: "Electrical Services",
    path: "electrical",
    description:
      "Electrical installation, repairs, wiring and maintenance.",
  },
  {
    name: "Carpentry & Woodwork",
    path: "carpentry-woodwork",
    description:
      "Furniture, doors, roofing woodwork and other carpentry services.",
  },
  {
    name: "Painting & Decoration",
    path: "painting-decoration",
    description:
      "Interior, exterior painting and decorative finishing services.",
  },
  {
    name: "Masonry & Tiling",
    path: "masonry-tiling",
    description:
      "Block work, plastering, tiling and related masonry services.",
  },
  {
    name: "Roofing Services",
    path: "roofing",
    description:
      "Roof installation, repairs, replacement and maintenance.",
  },
  {
    name: "Other Construction & Home Services",
    path: "other",
    description:
      "Construction and home services not listed above.",
  },
];

export default function ConstructionHomePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Construction & Home Services
        </h1>

        <p className="mt-3 max-w-3xl text-gray-600">
          Choose the construction or home service you want
          to offer.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.path}
              href={`/sell/services/construction-home/${service.path}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {service.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              <div className="mt-5 font-semibold text-blue-600">
                Offer this service →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}