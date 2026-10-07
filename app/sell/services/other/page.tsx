"use client";

import Link from "next/link";

const categories = [
  {
    name: "Personal & Household Services",
    description: "Everyday personal and household assistance services.",
    path: "personal-household",
  },
  {
    name: "Errand & Personal Assistance",
    description: "Errand running, personal assistance and support services.",
    path: "errand-personal-assistance",
  },
  {
    name: "Pet & Animal Services",
    description: "Pet care, animal care and related services.",
    path: "pet-animal",
  },
  {
    name: "Security Services",
    description: "Personal, property and event security services.",
    path: "security",
  },
  {
    name: "Relocation & Personal Support",
    description: "Personal support and assistance during relocation.",
    path: "relocation-personal-support",
  },
  {
    name: "Specialized & Unique Services",
    description: "Specialized services that do not fit other categories.",
    path: "specialized-unique",
  },
  {
    name: "Community & Local Services",
    description: "Services designed to support local communities.",
    path: "community-local",
  },
  {
    name: "Other Unlisted Services",
    description: "List a legitimate service not covered by another category.",
    path: "other",
  },
];

export default function OtherServicesPage() {
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
          Other Services
        </h1>

        <p className="mb-8 text-gray-600">
          Find or offer services that do not fit into the main service
          categories.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.path}
              href={`/sell/services/other/${category.path}`}
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