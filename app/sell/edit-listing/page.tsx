"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
  publishedAt?: string;
};

export default function EditListingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const listingId = searchParams.get("id");

  const [listing, setListing] =
    useState<Listing | null>(null);

  const [productName, setProductName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [condition, setCondition] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [availability, setAvailability] =
    useState("Available now");

  const [availabilityDate, setAvailabilityDate] =
    useState("");

  const [photos, setPhotos] =
    useState<string[]>([]);

  const [newPhotos, setNewPhotos] =
    useState<File[]>([]);

  const [error, setError] =
    useState("");

  const [isSaving, setIsSaving] =
    useState(false);

  useEffect(() => {
    if (!listingId) {
      setError("No listing ID was provided.");
      return;
    }

    const savedListings =
      localStorage.getItem("myListings");

    if (!savedListings) {
      setError("No listings were found.");
      return;
    }

    try {
      const listings: Listing[] =
        JSON.parse(savedListings);

      const foundListing = listings.find(
        (item) => item.id === listingId
      );

      if (!foundListing) {
        setError("The requested listing could not be found.");
        return;
      }

      if (
        foundListing.status === "Sold" ||
        foundListing.status === "Completed" ||
        foundListing.status === "Archived"
      ) {
        setError(
          "This listing can no longer be edited because it has been completed."
        );
        return;
      }

      setListing(foundListing);

      setProductName(
        foundListing.productName
      );

      setDescription(
        foundListing.description
      );

      setPrice(
        foundListing.price
      );

      setCondition(
        foundListing.condition
      );

      setQuantity(
        foundListing.quantity
      );

      setLocation(
        foundListing.location
      );

      setAvailability(
        foundListing.availability ||
          "Available now"
      );

      setAvailabilityDate(
        foundListing.availabilityDate ||
          ""
      );

      setPhotos(
        foundListing.photos || []
      );
    } catch (loadError) {
      console.error(loadError);

      setError(
        "There was a problem loading this listing."
      );
    }
  }, [listingId]);

  const handleNewPhotoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    const selectedFiles =
      Array.from(e.target.files);

    setNewPhotos((currentPhotos) => [
      ...currentPhotos,
      ...selectedFiles,
    ]);
  };

  const removeExistingPhoto = (
    index: number
  ) => {
    setPhotos((currentPhotos) =>
      currentPhotos.filter(
        (_, photoIndex) =>
          photoIndex !== index
      )
    );
  };

  const removeNewPhoto = (
    index: number
  ) => {
    setNewPhotos((currentPhotos) =>
      currentPhotos.filter(
        (_, photoIndex) =>
          photoIndex !== index
      )
    );
  };

  const convertPhotosToDataUrls = (
    files: File[]
  ): Promise<string[]> => {
    return Promise.all(
      files.map(
        (file) =>
          new Promise<string>(
            (resolve, reject) => {
              const reader =
                new FileReader();

              reader.onload = () => {
                resolve(
                  reader.result as string
                );
              };

              reader.onerror = () => {
                reject(
                  new Error(
                    "Could not read image"
                  )
                );
              };

              reader.readAsDataURL(file);
            }
          )
      )
    );
  };

  const handleSave = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!listing) return;

    if (
      availability ===
        "Available from a date" &&
      !availabilityDate
    ) {
      alert(
        "Please select the date when this listing will be available."
      );
      return;
    }

    setIsSaving(true);

    try {
      const newPhotoData =
        await convertPhotosToDataUrls(
          newPhotos
        );

      const updatedPhotos = [
        ...photos,
        ...newPhotoData,
      ];

      const updatedListing: Listing = {
        ...listing,
        productName,
        description,
        price,
        condition,
        quantity,
        location,
        availability,
        availabilityDate,
        photos: updatedPhotos,
      };

      const savedListings =
        localStorage.getItem(
          "myListings"
        );

      const listings: Listing[] =
        savedListings
          ? JSON.parse(savedListings)
          : [];

      const updatedListings =
        listings.map((item) =>
          item.id === listing.id
            ? updatedListing
            : item
        );

      localStorage.setItem(
        "myListings",
        JSON.stringify(
          updatedListings
        )
      );

      router.push(
        "/sell/my-listings"
      );
    } catch (saveError) {
      console.error(saveError);

      alert(
        "There was a problem saving your changes."
      );

      setIsSaving(false);
    }
  };

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Edit Listing
          </h1>

          <div className="rounded-2xl bg-white border border-red-200 p-6">
            <p className="text-red-600">
              {error}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              router.push(
                "/sell/my-listings"
              )
            }
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
          >
            ← Back to My Listings
          </button>

        </div>
      </main>
    );
  }

  if (!listing) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Edit Listing
          </h1>

          <p className="text-gray-600 mt-4">
            Loading listing...
          </p>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Edit Listing
        </h1>

        <p className="text-gray-600 mb-8">
          Update the information for your listing.
        </p>

        {/* Listing information */}
        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-5 mb-8">

          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Listing Information
          </h2>

          <div className="grid gap-4 sm:grid-cols-4">

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Type
              </p>

              <p className="font-semibold text-gray-900 mt-1">
                {listing.listingType ||
                  "Goods"}
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

          <div className="mt-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Listing ID
            </p>

            <p className="font-mono font-semibold text-gray-900 mt-1">
              {listing.id}
            </p>
          </div>

        </div>

        <form
          onSubmit={handleSave}
          className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 space-y-6"
        >

          {/* Product / Service Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product / Service Name
            </label>

            <input
              type="text"
              value={productName}
              onChange={(e) =>
                setProductName(
                  e.target.value
                )
              }
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Existing Photos */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Photos
            </label>

            {photos.length === 0 ? (
              <p className="text-sm text-gray-500">
                No photos currently added.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                {photos.map(
                  (photo, index) => (
                    <div
                      key={index}
                      className="relative rounded-xl border border-gray-200 overflow-hidden bg-gray-50"
                    >

                      <img
                        src={photo}
                        alt={
                          listing.productName
                        }
                        className="w-full h-32 object-cover"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          removeExistingPhoto(
                            index
                          )
                        }
                        className="absolute top-2 right-2 rounded-full bg-red-600 text-white w-8 h-8 font-bold hover:bg-red-700"
                      >
                        ×
                      </button>

                    </div>
                  )
                )}

              </div>
            )}
          </div>

          {/* Add New Photos */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Add More Photos
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={
                handleNewPhotoChange
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white"
            />

            {newPhotos.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">

                {newPhotos.map(
                  (photo, index) => (
                    <div
                      key={
                        photo.name +
                        index
                      }
                      className="relative rounded-xl border border-gray-200 overflow-hidden bg-gray-50"
                    >

                      <img
                        src={URL.createObjectURL(
                          photo
                        )}
                        alt={
                          "New photo " +
                          (index + 1)
                        }
                        className="w-full h-32 object-cover"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          removeNewPhoto(
                            index
                          )
                        }
                        className="absolute top-2 right-2 rounded-full bg-red-600 text-white w-8 h-8 font-bold hover:bg-red-700"
                      >
                        ×
                      </button>

                    </div>
                  )
                )}

              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              rows={5}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price (GH₵)
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) =>
                setPrice(
                  e.target.value
                )
              }
              min="0"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Condition */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Condition
            </label>

            <select
              value={condition}
              onChange={(e) =>
                setCondition(
                  e.target.value
                )
              }
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">
                Select condition
              </option>

              <option value="New">
                New
              </option>

              <option value="Like New">
                Like New
              </option>

              <option value="Used - Good">
                Used - Good
              </option>

              <option value="Used - Fair">
                Used - Fair
              </option>

              <option value="For Parts or Repair">
                For Parts or Repair
              </option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity Available
            </label>

            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  e.target.value
                )
              }
              min="1"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Availability
            </label>

            <select
              value={availability}
              onChange={(e) => {
                setAvailability(
                  e.target.value
                );

                if (
                  e.target.value ===
                    "Available now" ||
                  e.target.value ===
                    "Temporarily unavailable"
                ) {
                  setAvailabilityDate(
                    ""
                  );
                }
              }}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="Available now">
                Available now
              </option>

              <option value="Available from a date">
                Available from a date
              </option>

              <option value="Pre-order / Pre-booking">
                Pre-order / Pre-booking
              </option>

              <option value="Temporarily unavailable">
                Temporarily unavailable
              </option>
            </select>
          </div>

          {/* Availability Date */}
          {(availability ===
            "Available from a date" ||
            availability ===
              "Pre-order / Pre-booking") && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {availability ===
                "Available from a date"
                  ? "Available from"
                  : "Expected availability date"}
              </label>

              <input
                type="date"
                value={
                  availabilityDate
                }
                onChange={(e) =>
                  setAvailabilityDate(
                    e.target.value
                  )
                }
                required={
                  availability ===
                  "Available from a date"
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
          )}

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) =>
                setLocation(
                  e.target.value
                )
              }
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">

            <button
              type="button"
              onClick={() =>
                router.push(
                  "/sell/my-listings"
                )
              }
              className="flex-1 rounded-xl border border-gray-300 bg-white px-6 py-4 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700 disabled:bg-blue-400 transition"
            >
              {isSaving
                ? "Saving Changes..."
                : "Save Changes"}
            </button>

          </div>

        </form>

      </div>
    </main>
  );
}