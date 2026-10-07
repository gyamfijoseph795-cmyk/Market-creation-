"use client";

import { useState } from "react";

export default function OtherServicesPage() {
  const [search, setSearch] = useState("");

  const serviceSuggestions = [
    "Personal Services",
    "Event Services",
    "Home Services",
    "Business Support",
    "Specialized Services",
    "Security Services",
    "Beauty & Grooming",
    "Cleaning Services",
    "Translation & Interpretation",
    "Other Services",
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Other Services
        </h1>

        <p className="text-gray-600 mb-8">
          Find service providers offering useful services that do not fit
          into our main service categories.
        </p>

        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm mb-10">

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What service are you looking for?
          </h2>

          <p className="text-gray-600 mb-5">
            Enter the name of the service you want to find.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. translator, cleaner, personal assistant..."
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              onClick={() => alert(`Searching for: ${search}`)}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Search
            </button>

          </div>

        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          You can search for things like
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {serviceSuggestions.map((item) => (
            <button
              key={item}
              onClick={() => setSearch(item)}
              className="rounded-xl bg-white p-6 text-left border border-gray-200 hover:shadow-md hover:border-blue-300"
            >
              <h3 className="text-lg font-bold text-gray-900">
                {item}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Search for {item.toLowerCase()}
              </p>
            </button>
          ))}

        </div>

      </div>
    </main>
  );
}