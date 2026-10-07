"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Listing = {
  id: string;
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
  status?: string;
};

export default function SmartphonesPage() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const savedListings = localStorage.getItem("myListings");

    if (!savedListings) {
      setListings([]);
      return;
    }

    try {
      const allListings: Listing[] = JSON.parse(savedListings);

      const smartphoneListings = allListings.filter(
        (listing) =>
          listing.listingType === "Goods" &&
          listing.category === "Electronics" &&
          listing.subcategory === "Phones & Tablets" &&
          listing.product === "Smartphones" &&
          (listing.status || "Published") === "Published"
      );

      setListings(smartphoneListings);
    } catch {
      setListings([]);
    }
  }, []);

  const formatAvailabilityDate = (date: string) => {
    if (!date) return "";

    const formattedDate = new Date(date + "T00:00:00");

    return formattedDate.toLocaleDateString("en-GH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Smartphones
        </h1>

        <p className="text-gray-600 mb-10">
          Browse smartphones listed by sellers on Your Market.
        </p>

        {listings.length === 0 ? (
          <div className="rounded-2xl bg-white border border-gray-200 p-10 text-center">

            <div className="text-5xl mb-4">
              📱
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No smartphones available
            </h2>

            <p className="text-gray-600">
              There are currently no published smartphones available.
            </p>

          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {listings.map((listing) => (
              <div
                key={listing.id}
                className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition"
              >

                {listing.photos && listing.photos.length > 0 ? (
                  <img
                    src={listing.photos[0]}
                    alt={listing.productName}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                    <span className="text-6xl">
                      📱
                    </span>
                  </div>
                )}

                <div className="p-5">

                  <div className="flex items-center justify-between gap-3">

                    <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                      Published
                    </span>

                    <span className="text-xs text-gray-500">
                      {listing.condition}
                    </span>

                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mt-4">
                    {listing.productName}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Smartphones
                  </p>

                  <p className="text-2xl font-bold text-blue-600 mt-4">
                    GH₵{listing.price}
                  </p>

                  <div className="mt-4 space-y-2 text-sm text-gray-600">

                    <p>
                      <span className="font-semibold">
                        Quantity:
                      </span>{" "}
                      {listing.quantity}
                    </p>

                    <div>
                      <p>
                        <span className="font-semibold">
                          Availability:
                        </span>{" "}
                        {listing.availability || "Available now"}
                      </p>

                      {listing.availabilityDate && (
                        <p className="text-gray-500 mt-1">
                          {listing.availability ===
                          "Available from a date"
                            ? "Available from " +
                              formatAvailabilityDate(
                                listing.availabilityDate
                              )
                            : "Expected availability: " +
                              formatAvailabilityDate(
                                listing.availabilityDate
                              )}
                        </p>
                      )}
                    </div>

                    <p>
                      <span className="font-semibold">
                        Location:
                      </span>{" "}
                      {listing.location}
                    </p>

                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100">

                    <p className="text-xs text-gray-500">
                      Listing ID
                    </p>

                    <p className="text-sm font-mono font-semibold text-gray-800 mt-1">
                      {listing.id}
                    </p>

                  </div>

                  <Link
                    href={`/buy/listing/${listing.id}`}
                    className="block w-full mt-5 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 transition text-center"
                  >
                    View Details →
                  </Link>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}