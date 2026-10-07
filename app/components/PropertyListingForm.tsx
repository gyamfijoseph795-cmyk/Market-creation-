"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type PropertyListingFormProps = {
  subcategory: string;
};

export default function PropertyListingForm({
  subcategory,
}: PropertyListingFormProps) {
  const router = useRouter();

  const [listingPurpose, setListingPurpose] = useState("For Sale");
  const [propertyName, setPropertyName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pricePeriod, setPricePeriod] = useState("Total Price");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [availability, setAvailability] =
    useState("Available now");
  const [availabilityDate, setAvailabilityDate] =
    useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files) {
      return;
    }

    const selectedFiles = Array.from(files);

    const readers = selectedFiles.map(
      (file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();

          reader.onload = () => {
            resolve(reader.result as string);
          };

          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((results) => {
      setPhotos(results);
    });
  };

  const handleVideoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files) {
      return;
    }

    const selectedFiles = Array.from(files);

    const readers = selectedFiles.map(
      (file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();

          reader.onload = () => {
            resolve(reader.result as string);
          };

          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((results) => {
      setVideos(results);
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const existingListings =
      localStorage.getItem("myListings");

    let listings = [];

    try {
      listings = existingListings
        ? JSON.parse(existingListings)
        : [];
    } catch {
      listings = [];
    }

    const newListing = {
      id: `PROPERTY-${Date.now()}`,
      listingType: "Goods",
      category: "Real Estate & Property",
      subcategory,
      property: propertyName,
      propertyName,
      description,
      listingPurpose,
      price,
      pricePeriod,
      location,
      bedrooms,
      bathrooms,
      propertySize,
      furnishing,
      availability,
      availabilityDate,
      photos,
      videos,
      status: "Draft",
      createdAt: new Date().toISOString(),
    };

    listings.push(newListing);

    localStorage.setItem(
      "myListings",
      JSON.stringify(listings)
    );

    router.push("/sell");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Sell {subcategory}
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Provide the details of the {subcategory.toLowerCase()} you want to list.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Listing purpose
            </label>

            <select
              value={listingPurpose}
              onChange={(event) =>
                setListingPurpose(event.target.value)
              }
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
              <option value="For Lease">For Lease</option>
            </select>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Property name
            </label>

            <input
              type="text"
              value={propertyName}
              onChange={(event) =>
                setPropertyName(event.target.value)
              }
              placeholder={`e.g. ${subcategory}`}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder={`Describe the ${subcategory.toLowerCase()}...`}
              rows={5}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Price (GH₵)
              </label>

              <input
                type="number"
                min="0"
                value={price}
                onChange={(event) =>
                  setPrice(event.target.value)
                }
                placeholder="e.g. 250000"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Price period
              </label>

              <select
                value={pricePeriod}
                onChange={(event) =>
                  setPricePeriod(event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="Total Price">
                  Total Price
                </option>
                <option value="Per Month">
                  Per Month
                </option>
                <option value="Per Year">
                  Per Year
                </option>
              </select>
            </div>

          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Bedrooms
              </label>

              <input
                type="number"
                min="0"
                value={bedrooms}
                onChange={(event) =>
                  setBedrooms(event.target.value)
                }
                placeholder="e.g. 3"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Bathrooms
              </label>

              <input
                type="number"
                min="0"
                value={bathrooms}
                onChange={(event) =>
                  setBathrooms(event.target.value)
                }
                placeholder="e.g. 2"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Property size
            </label>

            <input
              type="text"
              value={propertySize}
              onChange={(event) =>
                setPropertySize(event.target.value)
              }
              placeholder="e.g. 120 square metres"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Furnishing
            </label>

            <select
              value={furnishing}
              onChange={(event) =>
                setFurnishing(event.target.value)
              }
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">
                Select furnishing
              </option>
              <option value="Furnished">
                Furnished
              </option>
              <option value="Semi-furnished">
                Semi-furnished
              </option>
              <option value="Unfurnished">
                Unfurnished
              </option>
              <option value="Not applicable">
                Not applicable
              </option>
            </select>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              value={location}
              onChange={(event) =>
                setLocation(event.target.value)
              }
              placeholder="e.g. East Legon, Accra, Ghana"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Availability
            </label>

            <select
              value={availability}
              onChange={(event) =>
                setAvailability(event.target.value)
              }
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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

            {(availability === "Available from a date" ||
              availability === "Pre-order / Pre-booking") && (
              <input
                type="date"
                value={availabilityDate}
                onChange={(event) =>
                  setAvailabilityDate(event.target.value)
                }
                required
                className="mt-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            )}
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Photos
            </label>

            <p className="text-sm text-gray-500 mt-1 mb-4">
              Add photos of the property.
            </p>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              className="block w-full text-sm text-gray-600"
            />

            {photos.length > 0 && (
              <p className="text-sm text-green-600 mt-3">
                {photos.length} photo
                {photos.length === 1 ? "" : "s"} selected.
              </p>
            )}
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Videos
            </label>

            <p className="text-sm text-gray-500 mt-1 mb-4">
              Add videos showing the property.
            </p>

            <input
              type="file"
              accept="video/*"
              multiple
              onChange={handleVideoChange}
              className="block w-full text-sm text-gray-600"
            />

            {videos.length > 0 && (
              <p className="text-sm text-green-600 mt-3">
                {videos.length} video
                {videos.length === 1 ? "" : "s"} selected.
              </p>
            )}

            <p className="text-xs text-gray-500 mt-3">
              Large video uploads will be handled properly when we connect
              the production media storage system.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
            <h2 className="font-bold text-gray-900">
              Listing status
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              Your listing will first be saved as a Draft.
              You can publish it from your seller area later.
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            Save {subcategory} Listing
          </button>

        </form>
      </div>
    </main>
  );
}