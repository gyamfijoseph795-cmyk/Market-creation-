"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Listing = {
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
  status:
    | "Draft"
    | "Published"
    | "Paused"
    | "Sold"
    | "Completed"
    | "Archived";
  publishedAt?: string;
};

type UserAccount = {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  accountType: "Buyer" | "Seller" | "Both";
};

export default function MyListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    // Get the currently logged-in account.
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      setListings([]);
      return;
    }

    let account: UserAccount | null = null;

    try {
      account = JSON.parse(loggedInUser);
    } catch {
      account = null;
    }

    if (!account?.userId) {
      setListings([]);
      return;
    }

    // Get all saved listings.
    const savedListings = localStorage.getItem("myListings");

    if (!savedListings) {
      setListings([]);
      return;
    }

    try {
      const allListings: Listing[] = JSON.parse(savedListings);

      // Show only listings belonging to the logged-in account.
      const userListings = allListings.filter(
        (listing) => listing.sellerId === account!.userId
      );

      setListings(userListings);
    } catch {
      setListings([]);
    }
  }, []);

  const updateListingStatus = (
    id: string,
    newStatus: Listing["status"]
  ) => {
    const savedListings = localStorage.getItem("myListings");

    if (!savedListings) {
      return;
    }

    try {
      const allListings: Listing[] = JSON.parse(savedListings);

      const updatedAllListings = allListings.map((listing) =>
        listing.id === id
          ? {
              ...listing,
              status: newStatus,
            }
          : listing
      );

      localStorage.setItem(
        "myListings",
        JSON.stringify(updatedAllListings)
      );

      // Update the displayed listings for the current account.
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (!loggedInUser) {
        setListings([]);
        return;
      }

      const account: UserAccount = JSON.parse(loggedInUser);

      const userListings = updatedAllListings.filter(
        (listing) => listing.sellerId === account.userId
      );

      setListings(userListings);
    } catch {
      return;
    }
  };

  const formatAvailabilityDate = (date?: string) => {
    if (!date) return "";

    const formattedDate = new Date(`${date}T00:00:00`);

    return formattedDate.toLocaleDateString("en-GH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getStatusStyle = (status: Listing["status"]) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-700";

      case "Paused":
        return "bg-yellow-100 text-yellow-700";

      case "Sold":
      case "Completed":
        return "bg-blue-100 text-blue-700";

      case "Archived":
        return "bg-gray-100 text-gray-600";

      case "Draft":
        return "bg-gray-100 text-gray-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">
            My Listings
          </h1>

          <p className="text-gray-600">
            Manage your products and services, availability and listing status.
          </p>

        </div>

        {listings.length === 0 ? (
          <div className="rounded-2xl bg-white border border-gray-200 p-8 text-center">

            <h2 className="text-xl font-bold text-gray-900 mb-2">
              You have no listings yet.
            </h2>

            <p className="text-gray-600 mb-6">
              Create your first listing to start selling on Your Market.
            </p>

            <Link
              href="/sell"
              className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Create Listing
            </Link>

          </div>
        ) : (
          <div className="space-y-6">

            {listings.map((listing) => {

              const photos = listing.photos || [];

              const isGoods =
                listing.listingType === "Goods";

              const completionLabel = isGoods
                ? "Sold"
                : "Completed";

              return (
                <div
                  key={listing.id}
                  className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden"
                >

                  <div className="p-6">

                    <div className="flex flex-col lg:flex-row gap-6">

                      {/* Photo */}

                      <div className="w-full lg:w-64 shrink-0">

                        {photos.length > 0 ? (
                          <img
                            src={photos[0]}
                            alt={listing.productName}
                            className="w-full h-56 object-cover rounded-xl"
                          />
                        ) : (
                          <div className="w-full h-56 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                            No photo
                          </div>
                        )}

                      </div>

                      {/* Listing Information */}

                      <div className="flex-1">

                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                          <div>

                            <div className="flex flex-wrap items-center gap-2 mb-2">

                              <span
                                className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusStyle(
                                  listing.status
                                )}`}
                              >
                                {listing.status}
                              </span>

                              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                                {listing.listingType || "Not specified"}
                              </span>

                            </div>

                            <h2 className="text-2xl font-bold text-gray-900">
                              {listing.productName}
                            </h2>

                          </div>

                          <div className="text-left sm:text-right">

                            <p className="text-sm text-gray-500">
                              Listing ID
                            </p>

                            <p className="font-mono font-semibold text-gray-900">
                              {listing.id}
                            </p>

                          </div>

                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-6">

                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">
                              Seller ID
                            </p>

                            <p className="font-mono font-semibold text-gray-900 mt-1">
                              {listing.sellerId || "Not linked"}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">
                              Category
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                              {listing.category}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">
                              Product Type
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                              {listing.product}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">
                              Price
                            </p>

                            <p className="font-bold text-blue-600 mt-1">
                              GH₵{listing.price}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">
                              Condition
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                              {listing.condition}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">
                              Quantity
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                              {listing.quantity}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">
                              Availability
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                              {listing.availability || "Available now"}
                            </p>

                            {listing.availabilityDate && (
                              <p className="text-sm text-gray-500 mt-1">
                                {listing.availability ===
                                "Available from a date"
                                  ? `From ${formatAvailabilityDate(
                                      listing.availabilityDate
                                    )}`
                                  : `Expected ${formatAvailabilityDate(
                                      listing.availabilityDate
                                    )}`}
                              </p>
                            )}
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">
                              Location
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                              {listing.location}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">
                              Subcategory
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                              {listing.subcategory}
                            </p>
                          </div>

                        </div>

                        {/* Actions */}

                        <div className="flex flex-wrap gap-3 mt-8">

                          {(listing.status === "Published" ||
                            listing.status === "Paused") && (
                            <Link
                              href={`/sell/edit-listing?id=${encodeURIComponent(
                                listing.id
                              )}`}
                              className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
                            >
                              Edit Listing
                            </Link>
                          )}

                          {listing.status === "Published" && (
                            <button
                              type="button"
                              onClick={() =>
                                updateListingStatus(
                                  listing.id,
                                  "Paused"
                                )
                              }
                              className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-white hover:bg-yellow-600 transition"
                            >
                              Pause Listing
                            </button>
                          )}

                          {listing.status === "Paused" && (
                            <button
                              type="button"
                              onClick={() =>
                                updateListingStatus(
                                  listing.id,
                                  "Published"
                                )
                              }
                              className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 transition"
                            >
                              Resume Listing
                            </button>
                          )}

                          {(listing.status === "Published" ||
                            listing.status === "Paused") && (
                            <button
                              type="button"
                              onClick={() =>
                                updateListingStatus(
                                  listing.id,
                                  completionLabel
                                )
                              }
                              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
                            >
                              Mark as {completionLabel}
                            </button>
                          )}

                          {(listing.status === "Sold" ||
                            listing.status === "Completed") && (
                            <button
                              type="button"
                              onClick={() =>
                                updateListingStatus(
                                  listing.id,
                                  "Archived"
                                )
                              }
                              className="rounded-xl bg-gray-700 px-5 py-3 font-semibold text-white hover:bg-gray-800 transition"
                            >
                              Archive Listing
                            </button>
                          )}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>
    </main>
  );
}