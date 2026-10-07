import Link from "next/link";

const serviceCategories = [
  {
    name: "Transportation & Delivery",
    path: "transportation-delivery",
    description: "Driving, delivery, logistics and transport services.",
  },
  {
    name: "Construction & Home Services",
    path: "construction-home",
    description: "Building, plumbing, electrical, repairs and home services.",
  },
  {
    name: "Professional Services",
    path: "professional",
    description: "Legal, accounting, consulting and other professional services.",
  },
  {
    name: "Education & Training",
    path: "education-training",
    description: "Teaching, tutoring, coaching and training services.",
  },
  {
    name: "Technology & Digital Services",
    path: "technology-digital",
    description: "Software, websites, digital work and technology services.",
  },
  {
    name: "Beauty & Personal Care",
    path: "beauty-personal-care",
    description: "Hair, makeup, grooming, skincare and personal care.",
  },
  {
    name: "Events & Entertainment",
    path: "events-entertainment",
    description: "Singers, DJs, MCs, dancers, actors and event services.",
  },
  {
    name: "Sports & Fitness",
    path: "sports-fitness",
    description: "Footballers, coaches, trainers and fitness professionals.",
  },
  {
    name: "Creative & Arts Services",
    path: "creative-arts",
    description: "Photography, design, writing, art and creative services.",
  },
  {
    name: "Agriculture & Environmental Services",
    path: "agriculture-environment",
    description: "Farming, landscaping, environmental and agricultural services.",
  },
  {
    name: "Cleaning & Maintenance",
    path: "cleaning-maintenance",
    description: "Cleaning, repairs, maintenance and property care.",
  },
  {
    name: "Business & Financial Services",
    path: "business-financial",
    description: "Business support, finance, marketing and related services.",
  },
  {
    name: "Recycling Services",
    path: "recycling",
    description: "Collection, sorting, processing and recycling services.",
  },
  {
    name: "Accommodation & Hospitality",
    path: "accommodation-hospitality",
    description: "Short stays, hotels, catering and hospitality services.",
  },
  {
    name: "Other Services",
    path: "other",
    description: "Services that do not fit into the listed categories.",
  },
];

export default function SellServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Sell Services
        </h1>

        <p className="mt-3 max-w-3xl text-gray-600">
          Choose the type of service you want to offer.
          You can offer your skills, profession, talent,
          expertise, time or availability through YOUR MARKET.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <Link
              key={category.path}
              href={`/sell/services/${category.path}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {category.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {category.description}
              </p>

              <div className="mt-5 font-semibold text-blue-600">
                Offer this service →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-lg font-bold text-gray-900">
            Can't find your service?
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Choose Other Services. You will be able to describe
            the service yourself and provide the information
            buyers need.
          </p>
        </div>
      </div>
    </main>
  );
}