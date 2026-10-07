"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ArtsCraftsListingFormProps = {
  subcategory: string;
};

export default function ArtsCraftsListingForm({
  subcategory,
}: ArtsCraftsListingFormProps) {
  const router = useRouter();

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [artistMaker, setArtistMaker] = useState("");
  const [mediumMaterial, setMediumMaterial] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [handmade, setHandmade] = useState("Yes");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("1");
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
      id: `ART-${Date.now()}`,
      listingType: "Goods",
      category: "Arts & Crafts",
      subcategory,
      item: itemName,
      itemName,
      description,
      artistMaker,
      mediumMaterial,
      dimensions,
      handmade,
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
          Provide the details of the art or craft item you want to list.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Item name / title
            </label>

            <input
              type="text"
              value={itemName}
              onChange={(event) =>
                setItemName(event.target.value)
              }
              placeholder={`e.g. ${subcategory}`}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Describe the artwork or craft, its story, features, style and other important details..."
              rows={5}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Artist / maker
            </label>

            <input
              type="text"
              value={artistMaker}
              onChange={(event) =>
                setArtistMaker(event.target.value)
              }
              placeholder="Name of artist, maker or creator"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Medium / material
              </label>

              <input
                type="text"
                value={mediumMaterial}
                onChange={(event) =>
                  setMediumMaterial(event.target.value)
                }
                placeholder="e.g. Acrylic on canvas"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Dimensions
              </label>

              <input
                type="text"
                value={dimensions}
                onChange={(event) =>
                  setDimensions(event.target.value)
                }
                placeholder="e.g. 60 × 90 cm"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Handmade
            </label>

            <select
              value={handmade}
              onChange={(event) =>
                setHandmade(event.target.value)
              }
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Partly handmade">
                Partly handmade
              </option>
            </select>
          </div>

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
                placeholder="e.g. 800"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Quantity available
              </label>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(event) =>
                  setQuantity(event.target.value)
                }
                placeholder="e.g. 1"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

          </div>

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
              <option value="New">New</option>
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

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Photos
            </label>

            <p className="mt-1 mb-4 text-sm text-gray-500">
              Add clear photos of the artwork or craft.
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

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Videos
            </label>

            <p className="mt-1 mb-4 text-sm text-gray-500">
              Add videos showing the artwork or craft.
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
              Large video uploads will be handled properly when we
              connect the production media storage system.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="font-bold text-gray-900">
              Listing status
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Your listing will first be saved as a Draft.
              You can publish it from your seller area later.
            </p>
          </div>

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