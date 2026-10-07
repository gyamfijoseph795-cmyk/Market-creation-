"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type SellerProfile = {
  sellerId: string;
  sellerName: string;
  phone: string;
  location: string;
  description: string;
};

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
  status: string;
  publishedAt?: string;
};

export default function SellerProfilePage() {
  const params = useParams();

  const sellerId = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const [seller, setSeller] =
    useState<SellerProfile | null>(null);

  const [listings, setListings] =
    useState<Listing[]>([]);

  useEffect(() => {
    const savedSellerProfile =
      localStorage.getItem("sellerProfile");

    if (savedSellerProfile) {
      try {
        const profile: SellerProfile =
          JSON.parse(savedSellerProfile);

        if (profile.sellerId === sellerId) {
          setSeller(profile);
        }
      } catch {
        setSeller(null);
      }
    }

    const savedListings =
      localStorage.getItem("myListings");

    if (savedListings) {
      try {
        const allListings: Listing[] =
          JSON.parse(savedListings);

        const sellerListings = allListings.filter(
          (listing) =>
            listing.sellerId === sellerId &&
            listing.status === "Published"
        );

        setListings(sellerListings);
      } catch {
        setListings([]);
      }
    }
  }, [sellerId]);

  if (!seller) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Seller Not Found
          </h1>

          <p className="text-gray-600">
            This seller profile is not available.
          </p>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            {seller.sellerName}
          </h1>

          <p className="text-gray-600 mt-2">
            Seller Profile
          </p>

        </div>

        {/* Seller Information */}

        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8 mb-8">

          <div className="grid gap-6 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Seller ID
              </p>

              <p className="font-mono text-lg font-bold text-blue-600 mt-1">
                {seller.sellerId}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Location
              </p>

              <p className="font-semibold text-gray-900 mt-1">
                {seller.location}
              </p>
            </div>

          </div>

          {seller.description && (
            <div className="mt-6 pt-6 border-t border-gray-200">

              <p className="text-xs font-semibold text-gray-500 uppercase">
                About the Seller
              </p>

              <p className="text-gray-700 mt-2 leading-7">
                {seller.description}
              </p>

            </div>
          )}

          <button
            type="button"
            onClick={() => {
              if (seller.phone) {
                window.location.href =
                  `tel:${seller.phone}`;
              }
            }}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 transition"
          >
            Contact Seller
          </button>

        </div>

        {/* Seller Listings */}

        <div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">

            <div>

              <h2 className="text-2xl font-bold text-gray-900">
                Seller's Listings
              </h2>

              <p className="text-gray-600 mt-1">
                Currently published listings from this seller.
              </p>

            </div>

            <div className="text-sm font-semibold text-gray-600">
              {listings.length} active listing
              {listings.length === 1 ? "" : "s"}
            </div>

          </div>

          {listings.length === 0 ? (
            <div className="rounded-2xl bg-white border border-gray-200 p-8 text-center">

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No active listings
              </h3>

              <p className="text-gray-600">
                This seller currently has no published listings.
              </p>

            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {listings.map((listing) => {

                const photo =
                  listing.photos &&
                  listing.photos.length > 0
                    ? listing.photos[0]
                    : null;

                let availabilityText =
                  "Availability not specified";

                if (listing.availability === "Available now") {
                  availabilityText = "Available now";
                } else if (
                  listing.availability === "Available from a date" &&
                  listing.availabilityDate
                ) {
                  availabilityText =
                    listing.listingType === "Services"
                      ? `Available for bookings from ${listing.availabilityDate}`
                      : `Available from ${listing.availabilityDate}`;
                } else if (
                  listing.availability === "Pre-order / Pre-booking" &&
                  listing.availabilityDate
                ) {
                  availabilityText =
                    listing.listingType === "Services"
                      ? `Pre-booking available from ${listing.availabilityDate}`
                      : `Pre-order available from ${listing.availabilityDate}`;
                } else if (
                  listing.availability === "Temporarily unavailable"
                ) {
                  availabilityText = "Temporarily unavailable";
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

                      <p className="text-xs font-semibold text-gray-500">
                        {listing.category}
                      </p>

                      <h3 className="text-xl font-bold text-gray-900 mt-1">
                        {listing.productName}
                      </h3>

                      <p className="text-2xl font-bold text-blue-600 mt-3">
                        GH₵{listing.price}
                      </p>

                      <p className="text-sm text-gray-500 mt-2">
                        {listing.location}
                      </p>

                      {/* Availability */}

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

      </div>
    </main>
  );
}