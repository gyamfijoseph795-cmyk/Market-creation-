"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { marketCatalogue } from "../market-catalogue";

type Listing = {
  id: string;
  listingType?: string;
  category?: string;
  subcategory?: string;
  product?: string;
  productName?: string;
  description?: string;
  location?: string;
  status?: string;
};

type CatalogueSuggestion = {
  name: string;
  type: "Goods" | "Services";
  category: string;
  subcategory?: string;
  href: string;
  keywords?: string[];
};

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function catalogueMatches(
  item: CatalogueSuggestion,
  searchText: string
) {
  const searchableText = [
    item.name,
    item.type,
    item.category,
    item.subcategory,
    ...(item.keywords || []),
  ]
    .filter(Boolean)
    .join(" ");

  return normalizeText(searchableText).includes(searchText);
}

export default function BuyPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [listings, setListings] = useState<Listing[]>([]);
  const [listingSuggestions, setListingSuggestions] = useState<Listing[]>([]);
  const [categorySuggestions, setCategorySuggestions] = useState<
    CatalogueSuggestion[]
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const savedListings = localStorage.getItem("myListings");

    if (!savedListings) {
      setListings([]);
      return;
    }

    try {
      const allListings: Listing[] = JSON.parse(savedListings);

      const publishedListings = allListings.filter(
        (listing) => listing.status === "Published"
      );

      setListings(publishedListings);
    } catch {
      setListings([]);
    }
  }, []);

  useEffect(() => {
    const searchText = normalizeText(search.trim());

    if (!searchText) {
      setListingSuggestions([]);
      setCategorySuggestions([]);
      return;
    }

    const matchingListings = listings.filter((listing) => {
      const searchableText = [
        listing.productName,
        listing.product,
        listing.category,
        listing.subcategory,
        listing.description,
        listing.location,
        listing.listingType,
      ]
        .filter(Boolean)
        .join(" ");

      return normalizeText(searchableText).includes(searchText);
    });

    const matchingCatalogueItems = marketCatalogue.filter((item) =>
      catalogueMatches(item, searchText)
    );

    setListingSuggestions(matchingListings.slice(0, 5));
    setCategorySuggestions(matchingCatalogueItems.slice(0, 8));
  }, [search, listings]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      return;
    }

    setShowSuggestions(false);

    router.push(`/buy/search?q=${encodeURIComponent(query)}`);
  };

  const handleListingSuggestionClick = (listing: Listing) => {
    setShowSuggestions(false);
    router.push(`/buy/listing/${listing.id}`);
  };

  const handleCatalogueSuggestionClick = (
    suggestion: CatalogueSuggestion
  ) => {
    setShowSuggestions(false);
    router.push(suggestion.href);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-sm font-semibold text-blue-600">
              YOUR MARKET
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              What are you looking for?
            </h1>

          </div>

          <button
            type="button"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm"
          >
            🌐 English
          </button>

        </div>

        {/* Search */}

        <form
          onSubmit={handleSearch}
          className="mb-10"
        >

          <div className="relative">

            <div className="flex flex-col sm:flex-row gap-3">

              <input
                type="text"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => {
                  if (search.trim()) {
                    setShowSuggestions(true);
                  }
                }}
                placeholder="Search for goods, services, products or people..."
                className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700 transition"
              >
                Search
              </button>

            </div>

            {/* Suggestions */}

            {showSuggestions &&
              search.trim() &&
              (listingSuggestions.length > 0 ||
                categorySuggestions.length > 0) && (

                <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">

                  {/* Existing Listings */}

                  {listingSuggestions.length > 0 && (
                    <div>

                      <div className="px-5 py-3 bg-gray-50 text-xs font-bold uppercase tracking-wide text-gray-500">
                        Listings
                      </div>

                      {listingSuggestions.map((listing) => (
                        <button
                          key={listing.id}
                          type="button"
                          onClick={() =>
                            handleListingSuggestionClick(listing)
                          }
                          className="w-full border-b border-gray-100 px-5 py-4 text-left hover:bg-gray-50"
                        >

                          <div className="flex items-start gap-3">

                            <div className="text-xl">
                              🔎
                            </div>

                            <div className="min-w-0">

                              <p className="font-semibold text-gray-900">
                                {listing.productName ||
                                  listing.product}
                              </p>

                              <p className="text-sm text-gray-500 mt-1">
                                {listing.listingType || "Goods"}
                                {" • "}
                                {listing.category}

                                {listing.subcategory
                                  ? ` • ${listing.subcategory}`
                                  : ""}
                              </p>

                            </div>

                          </div>

                        </button>
                      ))}

                    </div>
                  )}

                  {/* Catalogue Suggestions */}

                  {categorySuggestions.length > 0 && (
                    <div>

                      <div className="px-5 py-3 bg-gray-50 text-xs font-bold uppercase tracking-wide text-gray-500">
                        Market categories
                      </div>

                      {categorySuggestions.map((suggestion) => (
                        <button
                          key={`${suggestion.type}-${suggestion.name}-${suggestion.href}`}
                          type="button"
                          onClick={() =>
                            handleCatalogueSuggestionClick(
                              suggestion
                            )
                          }
                          className="w-full border-b border-gray-100 px-5 py-4 text-left last:border-b-0 hover:bg-gray-50"
                        >

                          <div className="flex items-center gap-3">

                            <div className="text-xl">
                              {suggestion.type === "Goods"
                                ? "🛍️"
                                : "🛠️"}
                            </div>

                            <div>

                              <p className="font-semibold text-gray-900">
                                {suggestion.name}
                              </p>

                              <p className="text-sm text-gray-500">
                                {suggestion.type}
                                {" • "}
                                {suggestion.category}

                                {suggestion.subcategory
                                  ? ` • ${suggestion.subcategory}`
                                  : ""}
                              </p>

                            </div>

                          </div>

                        </button>
                      ))}

                    </div>
                  )}

                </div>
              )}

          </div>

          <p className="text-sm text-gray-500 mt-2">
            Search for anything you need, including products, services,
            categories, people or locations.
          </p>

        </form>

        {/* Browse */}

        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          Browse the Market
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">

          {/* Goods */}

          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">

            <div className="text-4xl mb-4">
              🛍️
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Goods
            </h2>

            <p className="text-gray-600 mb-6">
              Find physical products and items offered by people and businesses.
            </p>

            <Link
              href="/buy/goods"
              className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
            >
              Browse Goods
            </Link>

          </div>

          {/* Services */}

          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">

            <div className="text-4xl mb-4">
              🛠️
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Services
            </h2>

            <p className="text-gray-600 mb-6">
              Find people and businesses offering skills, services and experiences.
            </p>

            <Link
              href="/buy/services"
              className="inline-block rounded-xl bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700"
            >
              Browse Services
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}