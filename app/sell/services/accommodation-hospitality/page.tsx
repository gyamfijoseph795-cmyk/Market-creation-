"use client";

import Link from "next/link";

const categories = [
  {
    name: "Hotels & Resorts",
    description: "Hotel rooms, resorts and related accommodation services.",
    path: "hotels-resorts",
  },
  {
    name: "Guest Houses & Lodges",
    description: "Guest houses, lodges and short-term accommodation.",
    path: "guest-houses-lodges",
  },
  {
    name: "Hostels & Student Accommodation",
    description: "Hostels and accommodation designed for students.",
    path: "hostels-student-accommodation",
  },
  {
    name: "Short-Stay Apartments",
    description: "Apartments available for short-term stays.",
    path: "short-stay-apartments",
  },
  {
    name: "Vacation Rentals",
    description: "Holiday homes, vacation rentals and temporary stays.",
    path: "vacation-rentals",
  },
  {
    name: "Bed & Breakfast Services",
    description: "Bed and breakfast accommodation services.",
    path: "bed-breakfast",
  },
  {
    name: "Event & Hospitality Accommodation",
    description: "Accommodation and hospitality services for events and occasions.",
    path: "event-hospitality-accommodation",
  },
  {
    name: "Other Accommodation & Hospitality Services",
    description: "Other accommodation and hospitality services.",
    path: "other",
  },
];

export default function AccommodationHospitalityPage() {
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
          Accommodation & Hospitality
        </h1>

        <p className="mb-8 text-gray-600">
          Choose the type of accommodation or hospitality service you want to
          offer.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.path}
              href={`/sell/services/accommodation-hospitality/${category.path}`}
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