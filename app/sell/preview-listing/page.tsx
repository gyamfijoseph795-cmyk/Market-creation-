"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type ListingData = {
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
};

type SellerProfile = {
  sellerId: string;
  sellerName: string;
  phone: string;
  location: string;
  description: string;
};

type PublishedListing = ListingData & {
  id: string;
  sellerId?: string;
  status: "Published";
  publishedAt: string;
};

export default function PreviewListingPage() {
  const router = useRouter();

  const [listing, setListing] = useState<ListingData | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    const savedListing = localStorage.getItem("listingPreview");

    if (savedListing) {
      try {
        setListing(JSON.parse(savedListing));
      } catch {
        setListing(null);
      }
    }
  }, []);

  const generateListingId = () => {
    const randomPart = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    return `YM-${randomPart}`;
  };

  const formatAvailabilityDate = (date: string) => {
    if (!date) return "";

    const formattedDate = new Date(`${date}T00:00:00`);

    return formattedDate.toLocaleDateString("en-GH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handlePublish = () => {
    if (!listing) return;

    setIsPublishing(true);

    const savedSellerProfile = localStorage.getItem("sellerProfile");

    let sellerId: string | undefined;

    if (savedSellerProfile) {
      try {
        const sellerProfile: SellerProfile =
          JSON.parse(savedSellerProfile);

        sellerId = sellerProfile.sellerId || undefined;
      } catch {
        sellerId = undefined;
      }
    }

    const newListing: PublishedListing = {
      ...listing,
      id: generateListingId(),
      sellerId,
      status: "Published",
      publishedAt: new Date().toISOString(),
    };

    const existingListings = localStorage.getItem("myListings");

    let listings: PublishedListing[] = [];

    if (existingListings) {
      try {
        listings = JSON.parse(existingListings);
      } catch {
        listings = [];
      }
    }

    listings.push(newListing);

    localStorage.setItem(
      "myListings",
      JSON.stringify(listings)
    );

    localStorage.removeItem("listingPreview");

    router.push("/sell/my-listings");
  };

  if (!listing) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Listing Preview
          </h1>

          <p className="text-gray-600">
            No listing information is available yet.
          </p>

        </div>
      </main>
    );
  }

  const photos = listing.photos || [];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Listing Preview
          </h1>

          <p className="text-gray-600">
            This is how your listing information will appear before publishing.
          </p>

        </div>

        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">

          {photos.length > 0 && (
            <div className="p-6 border-b border-gray-200">

              <div className="rounded-2xl overflow-hidden bg-gray-100">

                <img
                  src={photos[selectedPhoto]}
                  alt={`${listing.productName} photo ${
                    selectedPhoto + 1
                  }`}
                  className="w-full h-80 sm:h-[420px] object-cover"
                />

              </div>

              {photos.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 mt-4">

                  {photos.map((photo, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedPhoto(index)}
                      className={`rounded-xl overflow-hidden border-2 ${
                        selectedPhoto === index
                          ? "border-blue-600"
                          : "border-gray-200"
                      }`}
                    >

                      <img
                        src={photo}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />

                    </button>
                  ))}

                </div>
              )}

            </div>
          )}

          <div className="p-6 border-b border-gray-200">

            <h2 className="text-lg font-bold text-gray-900 mb-4">
              What are you listing?
            </h2>

            <div className="grid gap-5 sm:grid-cols-4">

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">
                  Type
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {listing.listingType || "Not specified"}
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
                  Subcategory
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {listing.subcategory}
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

            </div>

          </div>

          <div className="p-6">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {listing.productName}
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Description
                </p>

                <p className="text-gray-900 mt-1">
                  {listing.description}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Price
                </p>

                <p className="text-2xl font-bold text-blue-600 mt-1">
                  GH₵{listing.price}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Condition
                </p>

                <p className="text-gray-900 mt-1">
                  {listing.condition}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Quantity
                </p>

                <p className="text-gray-900 mt-1">
                  {listing.quantity}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Availability
                </p>

                <p className="text-gray-900 mt-1">
                  {listing.availability || "Available now"}
                </p>

                {listing.availabilityDate && (
                  <p className="text-gray-600 mt-1">
                    {listing.availability === "Available from a date"
                      ? `Available from ${formatAvailabilityDate(
                          listing.availabilityDate
                        )}`
                      : `Expected availability: ${formatAvailabilityDate(
                          listing.availabilityDate
                        )}`}
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Location
                </p>

                <p className="text-gray-900 mt-1">
                  {listing.location}
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex-1 rounded-xl border border-gray-300 bg-white px-6 py-4 font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            ← Edit Listing
          </button>

          <button
            type="button"
            onClick={handlePublish}
            disabled={isPublishing}
            className="flex-1 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700 disabled:bg-blue-400 transition"
          >
            {isPublishing ? "Publishing..." : "Publish Listing"}
          </button>

        </div>

      </div>
    </main>
  );
}