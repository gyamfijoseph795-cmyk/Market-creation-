"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type GoodsListingFormProps = {
  category: string;
  subcategory: string;
};

export default function GoodsListingForm({
  category,
  subcategory,
}: GoodsListingFormProps) {
  const router = useRouter();

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
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
      id: `GOOD-${Date.now()}`,
      listingType: "Goods",
      category,
      subcategory,
      product: productName,
      productName,
      description,
      price,
      quantity,
      condition,
      location,
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

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Sell {subcategory}
        </h1>

        <p className="mt-2 mb-8 text-gray-600">
          Provide the details of the{" "}
          {subcategory.toLowerCase()} you want to sell.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* PRODUCT NAME */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Product name
            </label>

            <input
              type="text"
              value={productName}
              onChange={(event) =>
                setProductName(event.target.value)
              }
              placeholder={`e.g. ${subcategory}`}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* DESCRIPTION */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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

          {/* PRICE AND QUANTITY */}

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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
                placeholder="e.g. 250"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Quantity
              </label>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(event) =>
                  setQuantity(event.target.value)
                }
                placeholder="e.g. 5"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

          </div>

          {/* CONDITION */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Condition
            </label>

            <select
              value={condition}
              onChange={(event) =>
                setCondition(event.target.value)
              }
              required
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">
                Select condition
              </option>

              <option value="New">
                New
              </option>

              <option value="Used - Like New">
                Used - Like New
              </option>

              <option value="Used - Good">
                Used - Good
              </option>

              <option value="Used - Fair">
                Used - Fair
              </option>
            </select>
          </div>

          {/* LOCATION */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              value={location}
              onChange={(event) =>
                setLocation(event.target.value)
              }
              placeholder="e.g. Accra, Ghana"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* AVAILABILITY */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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

          {/* PHOTOS */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Photos
            </label>

            <p className="mt-1 mb-4 text-sm text-gray-500">
              Add clear photos of the product.
            </p>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              className="block w-full text-sm text-gray-600"
            />

            {photos.length > 0 && (
              <p className="mt-3 text-sm text-green-600">
                {photos.length} photo
                {photos.length === 1 ? "" : "s"} selected.
              </p>
            )}
          </div>

          {/* VIDEOS */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Videos
            </label>

            <p className="mt-1 mb-4 text-sm text-gray-500">
              Add videos showing the product from different angles.
            </p>

            <input
              type="file"
              accept="video/*"
              multiple
              onChange={handleVideoChange}
              className="block w-full text-sm text-gray-600"
            />

            {videos.length > 0 && (
              <p className="mt-3 text-sm text-green-600">
                {videos.length} video
                {videos.length === 1 ? "" : "s"} selected.
              </p>
            )}

            <p className="mt-3 text-xs text-gray-500">
              Large video uploads will be supported through
              scalable media storage when the production system
              is connected.
            </p>
          </div>

          {/* STATUS */}

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="font-bold text-gray-900">
              Listing status
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Your listing will first be saved as a Draft.
              You can publish it from your seller area later.
            </p>
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Save {subcategory} Listing
          </button>

        </form>
      </div>
    </main>
  );
}