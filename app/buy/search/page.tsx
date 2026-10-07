"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  searchListings,
  searchCatalogue,
  searchConcepts,
  type SearchableListing,
} from "../../search-engine";

type Listing = SearchableListing & {
  id: string;
  sellerId?: string;
  listingType?: string;
  category: string;
  subcategory: string;
  product: string;
  productName: string;
  description: string;
  price: string;
  condition: string;
  quantity: string;
  location: string;
  availability?: string;
  availabilityDate?: string;
  photos?: string[];
  status: string;
  publishedAt?: string;
};

type CatalogueResult = {
  name: string;
  type: "Goods" | "Services";
  category: string;
  subcategory?: string;
  href: string;
  keywords?: string[];
  score: number;
  matchedWords: string[];
};

type ConceptResult = {
  concept: string;
  type: "Goods" | "Services";
  category: string;
  subcategory?: string;
  relatedTerms: string[];
  score: number;
  matchedWords: string[];
};

type TransportSearchResult = {
  name: string;
  description: string;
  href: string;
  icon: string;
};

function normalizeSearch(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getConceptHref(concept: ConceptResult) {
  if (
    concept.type === "Goods" &&
    concept.concept === "Watercraft"
  ) {
    return "/buy/goods/transportation/boats-watercraft";
  }

  return null;
}

function getTransportationSearchResult(
  query: string
): TransportSearchResult | null {
  const normalizedQuery = normalizeSearch(query);

  if (
    [
      "car",
      "cars",
      "sedan",
      "sedans",
      "saloon",
      "saloon car",
      "saloon cars",
      "suv",
      "suvs",
      "hatchback",
      "hatchbacks",
      "coupe",
      "coupes",
      "sports car",
      "sports cars",
      "van",
      "vans",
      "minivan",
      "minivans",
    ].includes(normalizedQuery)
  ) {
    return {
      name: "Cars",
      description:
        "Browse cars and passenger vehicles available from people and businesses.",
      href: "/buy/goods/transportation/cars",
      icon: "🚗",
    };
  }

  if (
    [
      "motorcycle",
      "motorcycles",
      "motorbike",
      "motorbikes",
      "scooter",
      "scooters",
      "sport bike",
      "sport bikes",
      "electric motorcycle",
      "electric motorcycles",
    ].includes(normalizedQuery)
  ) {
    return {
      name: "Motorcycles",
      description:
        "Browse motorcycles, scooters and other two-wheeled motor vehicles.",
      href: "/buy/goods/transportation/motorcycles",
      icon: "🏍️",
    };
  }

  if (
    [
      "bike",
      "bikes",
      "bicycle",
      "bicycles",
      "road bike",
      "road bikes",
      "mountain bike",
      "mountain bikes",
      "city bike",
      "city bikes",
      "electric bike",
      "electric bikes",
      "e bike",
      "e bikes",
      "tricycle",
      "tricycles",
    ].includes(normalizedQuery)
  ) {
    return {
      name: "Bicycles",
      description:
        "Browse bicycles and other human-powered cycles.",
      href: "/buy/goods/transportation/bicycles",
      icon: "🚲",
    };
  }

  if (
    [
      "truck",
      "trucks",
      "pickup",
      "pickup truck",
      "pickup trucks",
      "bus",
      "buses",
      "coach",
      "coaches",
      "tractor",
      "tractors",
      "commercial vehicle",
      "commercial vehicles",
      "delivery vehicle",
      "delivery vehicles",
      "heavy truck",
      "heavy trucks",
    ].includes(normalizedQuery)
  ) {
    return {
      name: "Trucks & Commercial Vehicles",
      description:
        "Browse trucks, buses, tractors and other commercial vehicles.",
      href: "/buy/goods/transportation/trucks-commercial",
      icon: "🚛",
    };
  }

  if (
    [
      "aircraft",
      "airplane",
      "airplanes",
      "aeroplane",
      "aeroplanes",
      "plane",
      "planes",
      "wheelchair",
      "wheelchairs",
      "mobility scooter",
      "mobility scooters",
    ].includes(normalizedQuery)
  ) {
    return {
      name: "Other Transportation",
      description:
        "Browse transportation equipment and vehicles outside the main categories.",
      href: "/buy/goods/transportation/other",
      icon: "🚘",
    };
  }

  return null;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState<Listing[]>([]);
  const [catalogueResults, setCatalogueResults] = useState<
    CatalogueResult[]
  >([]);
  const [conceptResults, setConceptResults] = useState<
    ConceptResult[]
  >([]);

  useEffect(() => {
    const savedListings = localStorage.getItem("myListings");

    const concepts = searchConcepts(query);
    const catalogueMatches = searchCatalogue(query);

    setConceptResults(concepts.slice(0, 6));
    setCatalogueResults(catalogueMatches.slice(0, 8));

    if (!savedListings) {
      setResults([]);
      return;
    }

    try {
      const allListings: Listing[] = JSON.parse(savedListings);

      const publishedListings = allListings.filter(
        (listing) => listing.status === "Published"
      );

      if (!query.trim()) {
        setResults(publishedListings);
        return;
      }

      const searchResults = searchListings(
        publishedListings,
        query
      );

      setResults(
        searchResults.map((result) => result.item)
      );
    } catch {
      setResults([]);
    }
  }, [query]);

  const transportationSearch =
    getTransportationSearchResult(query);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <div className="mb-8">

          <Link
            href="/buy"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back to Market
          </Link>

          <p className="text-sm font-semibold text-blue-600 mt-6">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Search Results
          </h1>

          <p className="text-gray-600 mt-2">
            Results for{" "}
            <span className="font-semibold text-gray-900">
              &quot;{query}&quot;
            </span>
          </p>

        </div>

        {/* Listing Count */}

        <div className="mb-6 text-sm font-semibold text-gray-600">
          {results.length} listing
          {results.length === 1 ? "" : "s"} found
        </div>

        {/* Transportation Search Match */}

        {transportationSearch && (
          <div className="mb-8">

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Transportation
            </h2>

            <Link
              href={transportationSearch.href}
              className="block rounded-2xl bg-white border border-blue-100 p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition"
            >

              <div className="flex items-start gap-4">

                <div className="text-4xl">
                  {transportationSearch.icon}
                </div>

                <div className="flex-1">

                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                    GOODS • TRANSPORTATION
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-1">
                    {transportationSearch.name}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    {transportationSearch.description}
                  </p>

                  <p className="text-blue-600 font-semibold mt-4">
                    Browse {transportationSearch.name} →
                  </p>

                </div>

              </div>

            </Link>

          </div>
        )}

        {/* Concept Matches */}

        {conceptResults.length > 0 && (
          <div className="mb-8">

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              We understand your search as
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {conceptResults.map((concept) => {
                const conceptHref = getConceptHref(concept);

                const cardContent = (
                  <div className="flex items-start gap-4">

                    <div className="text-3xl">
                      {concept.type === "Goods"
                        ? "🛍️"
                        : "🛠️"}
                    </div>

                    <div className="min-w-0">

                      <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                        {concept.type}
                      </p>

                      <h2 className="text-xl font-bold text-gray-900 mt-1">
                        {concept.concept}
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        {concept.category}
                        {concept.subcategory
                          ? ` • ${concept.subcategory}`
                          : ""}
                      </p>

                      <p className="text-sm text-gray-600 mt-3">
                        Related to your search:
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3">

                        {concept.relatedTerms
                          .slice(0, 5)
                          .map((term) => (

                            <span
                              key={term}
                              className="inline-flex rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                            >
                              {term}
                            </span>

                          ))}

                      </div>

                    </div>

                  </div>
                );

                if (conceptHref) {
                  return (
                    <Link
                      key={`${concept.type}-${concept.concept}`}
                      href={conceptHref}
                      className="block rounded-2xl bg-white border border-blue-100 p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition cursor-pointer"
                    >
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <div
                    key={`${concept.type}-${concept.concept}`}
                    className="rounded-2xl bg-white border border-blue-100 p-5 shadow-sm"
                  >
                    {cardContent}
                  </div>
                );
              })}

            </div>

          </div>
        )}

        {/* Catalogue Matches */}

        {catalogueResults.length > 0 && (
          <div className="mb-8">

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Browse related market areas
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {catalogueResults.map((item) => (

                <Link
                  key={`${item.type}-${item.name}-${item.href}`}
                  href={item.href}
                  className="rounded-2xl bg-white border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition"
                >

                  <div className="flex items-start gap-4">

                    <div className="text-3xl">
                      {item.type === "Goods"
                        ? "🛍️"
                        : "🛠️"}
                    </div>

                    <div>

                      <h3 className="font-bold text-gray-900">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.type}
                        {" • "}
                        {item.category}
                        {item.subcategory
                          ? ` • ${item.subcategory}`
                          : ""}
                      </p>

                      <p className="text-sm text-blue-600 font-semibold mt-3">
                        Browse this area →
                      </p>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>
        )}

        {/* No Results */}

        {results.length === 0 ? (

          <div className="rounded-2xl bg-white border border-gray-200 p-10 text-center">

            <div className="text-5xl mb-4">
              🔎
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              No published listings found
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto">
              There are currently no published listings matching{" "}
              <span className="font-semibold text-gray-900">
                &quot;{query}&quot;
              </span>
              .
            </p>

            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Your search is valid. We will show matching listings
              here whenever sellers publish them.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">

              <Link
                href="/buy"
                className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
              >
                Search Again
              </Link>

              <Link
                href="/buy/goods/other"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-700 font-semibold hover:bg-gray-50"
              >
                Browse Other Goods
              </Link>

            </div>

          </div>

        ) : (

          /* Listings */

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {results.map((listing) => {

              const photo =
                listing.photos &&
                listing.photos.length > 0
                  ? listing.photos[0]
                  : null;

              let availabilityText =
                "Availability not specified";

              if (listing.availability === "Available now") {
                availabilityText = "Available now";
              }

              else if (
                listing.availability === "Available from a date" &&
                listing.availabilityDate
              ) {
                availabilityText =
                  listing.listingType === "Services"
                    ? `Available for bookings from ${listing.availabilityDate}`
                    : `Available from ${listing.availabilityDate}`;
              }

              else if (
                listing.availability === "Pre-order / Pre-booking" &&
                listing.availabilityDate
              ) {
                availabilityText =
                  listing.listingType === "Services"
                    ? `Pre-booking available from ${listing.availabilityDate}`
                    : `Pre-order available from ${listing.availabilityDate}`;
              }

              else if (
                listing.availability === "Temporarily unavailable"
              ) {
                availabilityText =
                  "Temporarily unavailable";
              }

              const isUnavailable =
                listing.availability ===
                "Temporarily unavailable";

              return (

                <Link
                  key={listing.id}
                  href={`/buy/listing/${listing.id}`}
                  className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 transition"
                >

                  {photo ? (

                    <img
                      src={photo}
                      alt={listing.productName}
                      className="w-full h-52 object-cover"
                    />

                  ) : (

                    <div className="w-full h-52 bg-gray-100 flex items-center justify-center text-gray-400">
                      No photo
                    </div>

                  )}

                  <div className="p-5">

                    <div className="flex flex-wrap gap-2">

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {listing.listingType || "Goods"}
                      </span>

                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                        {listing.category}
                      </span>

                    </div>

                    {listing.subcategory && (
                      <p className="text-xs text-gray-500 mt-2">
                        {listing.subcategory}
                      </p>
                    )}

                    <h2 className="text-xl font-bold text-gray-900 mt-3">
                      {listing.productName}
                    </h2>

                    <p className="text-2xl font-bold text-blue-600 mt-3">
                      GH₵{listing.price}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      📍 {listing.location}
                    </p>

                    <div
                      className={`mt-4 rounded-lg px-3 py-2 text-sm font-semibold ${
                        isUnavailable
                          ? "bg-red-50 text-red-700"
                          : "bg-green-50 text-green-700"
                      }`}
                    >
                      {availabilityText}
                    </div>

                    <div className="mt-4 text-blue-600 font-semibold">
                      View Listing →
                    </div>

                  </div>

                </Link>

              );
            })}

          </div>

        )}

      </div>
    </main>
  );
}