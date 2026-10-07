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
};

export default function ListingDetailsPage() {
  const params = useParams();

  const listingId = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const [listing, setListing] = useState<Listing | null>(null);
  const [seller, setSeller] = useState<SellerProfile | null>(null);

  useEffect(() => {
    const savedListings = localStorage.getItem("myListings");

    if (savedListings) {
      try {
        const allListings: Listing[] =
          JSON.parse(savedListings);

        const foundListing = allListings.find(
          (item) =>
            item.id === listingId &&
            item.status === "Published"
        );

        if (foundListing) {
          setListing(foundListing);

          if (foundListing.sellerId) {
            const savedSellerProfile =
              localStorage.getItem("sellerProfile");

            if (savedSellerProfile) {
              try {
                const profile: SellerProfile =
                  JSON.parse(savedSellerProfile);

                if (
                  profile.sellerId ===
                  foundListing.sellerId
                ) {
                  setSeller(profile);
                }
              } catch {
                setSeller(null);
              }
            }
          }
        }
      } catch {
        setListing(null);
      }
    }
  }, [listingId]);

  if (!listing) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Listing Not Found
          </h1>

          <p className="text-gray-600">
            This listing is no longer available or could not be
            found.
          </p>

        </div>
      </main>
    );
  }

  const photo =
    listing.photos && listing.photos.length > 0
      ? listing.photos[0]
      : null;

  const chatLink = seller
    ? `/buy/chat?sellerId=${encodeURIComponent(
        seller.sellerId
      )}&sellerName=${encodeURIComponent(
        seller.sellerName
      )}&listingId=${encodeURIComponent(
        listing.id
      )}&listingName=${encodeURIComponent(
        listing.productName
      )}`
    : "#";

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            {listing.productName}
          </h1>

          <div className="flex flex-wrap gap-2 mt-4">

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Published
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              {listing.listingType || "Goods"}
            </span>

          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">

              {photo ? (
                <img
                  src={photo}
                  alt={listing.productName}
                  className="w-full max-h-[500px] object-cover"
                />
              ) : (
                <div className="w-full h-72 bg-gray-100 flex items-center justify-center text-gray-400">
                  No photos available
                </div>
              )}

              <div className="p-6 sm:p-8">

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Listing Information
                </h2>

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <p className="text-sm text-gray-500">
                      Price
                    </p>

                    <p className="text-2xl font-bold text-blue-600 mt-1">
                      GH₵{listing.price}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Condition
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {listing.condition}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Quantity
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {listing.quantity}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Category
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {listing.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Subcategory
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {listing.subcategory}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Product Type
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {listing.product}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Availability
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {listing.availability || "Not specified"}
                    </p>
                  </div>

                  {listing.availabilityDate && (
                    <div>
                      <p className="text-sm text-gray-500">
                        Availability Date
                      </p>

                      <p className="font-semibold text-gray-900 mt-1">
                        {listing.availabilityDate}
                      </p>
                    </div>
                  )}

                  <div>
                    <p className="text-sm text-gray-500">
                      Location
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {listing.location}
                    </p>
                  </div>

                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">

                  <p className="text-sm text-gray-500">
                    Description
                  </p>

                  <p className="text-gray-700 mt-2 leading-7">
                    {listing.description}
                  </p>

                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">

                  <p className="text-sm text-gray-500">
                    Listing ID
                  </p>

                  <p className="font-mono font-semibold text-gray-900 mt-1">
                    {listing.id}
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Seller
              </h2>

              {seller ? (
                <>
                  <div className="mb-5">

                    <p className="text-xs font-semibold text-gray-500 uppercase">
                      Seller / Business Name
                    </p>

                    <p className="font-bold text-gray-900 mt-1">
                      {seller.sellerName}
                    </p>

                  </div>

                  <div className="mb-5">

                    <p className="text-xs font-semibold text-gray-500 uppercase">
                      Seller ID
                    </p>

                    <Link
                      href={`/buy/seller/${seller.sellerId}`}
                      className="inline-block font-mono font-bold text-blue-600 mt-1 hover:text-blue-800 hover:underline"
                    >
                      {seller.sellerId}
                    </Link>

                    <p className="text-xs text-gray-500 mt-1">
                      View seller profile →
                    </p>

                  </div>

                  <div className="mb-5">

                    <p className="text-xs font-semibold text-gray-500 uppercase">
                      Location
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {seller.location}
                    </p>

                  </div>

                  {seller.description && (
                    <div className="mb-6">

                      <p className="text-xs font-semibold text-gray-500 uppercase">
                        About the Seller
                      </p>

                      <p className="text-gray-700 mt-2 leading-6">
                        {seller.description}
                      </p>

                    </div>
                  )}

                  <Link
                    href={chatLink}
                    className="block w-full rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700 transition"
                  >
                    Contact Seller
                  </Link>

                </>
              ) : (
                <>
                  <p className="text-gray-600 mb-5">
                    Seller information is not available.
                  </p>

                  {listing.sellerId && (
                    <div>

                      <p className="text-xs font-semibold text-gray-500 uppercase">
                        Seller ID
                      </p>

                      <p className="font-mono font-bold text-gray-900 mt-1">
                        {listing.sellerId}
                      </p>

                    </div>
                  )}
                </>
              )}

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}