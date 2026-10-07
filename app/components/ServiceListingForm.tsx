"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ServiceListingFormProps = {
  category: string;
  subcategory: string;
};

export default function ServiceListingForm({
  category,
  subcategory,
}: ServiceListingFormProps) {
  const router = useRouter();

  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pricingMethod, setPricingMethod] =
    useState("Fixed price");
  const [location, setLocation] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [availability, setAvailability] =
    useState("Available now");
  const [availabilityDate, setAvailabilityDate] =
    useState("");
  const [experience, setExperience] = useState("");
  const [languages, setLanguages] = useState("");
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
      id: `SERVICE-${Date.now()}`,
      listingType: "Services",
      category,
      subcategory,
      service: serviceName,
      serviceName,
      description,
      price,
      pricingMethod,
      location,
      serviceArea,
      availability,
      availabilityDate,
      experience,
      languages,
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
          Offer {subcategory}
        </h1>

        <p className="mt-2 mb-8 text-gray-600">
          Provide the details of the service you want to offer.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700">
              Service name
            </label>

            <input
              type="text"
              value={serviceName}
              onChange={(event) =>
                setServiceName(event.target.value)
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
              placeholder={`Describe the ${subcategory.toLowerCase()} service you offer...`}
              rows={6}
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Price / Rate
              </label>

              <input
                type="number"
                min="0"
                value={price}
                onChange={(event) =>
                  setPrice(event.target.value)
                }
                placeholder="e.g. 150"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Pricing method
              </label>

              <select
                value={pricingMethod}
                onChange={(event) =>
                  setPricingMethod(event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="Fixed price">
                  Fixed price
                </option>

                <option value="Hourly rate">
                  Hourly rate
                </option>

                <option value="Daily rate">
                  Daily rate
                </option>

                <option value="Per trip">
                  Per trip
                </option>

                <option value="Per project">
                  Per project
                </option>

                <option value="Negotiable">
                  Negotiable
                </option>

                <option value="Contact for price">
                  Contact for price
                </option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Provider location
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
                Service area
              </label>

              <input
                type="text"
                value={serviceArea}
                onChange={(event) =>
                  setServiceArea(event.target.value)
                }
                placeholder="e.g. Accra and Tema"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Experience
              </label>

              <input
                type="text"
                value={experience}
                onChange={(event) =>
                  setExperience(event.target.value)
                }
                placeholder="e.g. 5 years"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700">
                Languages
              </label>

              <input
                type="text"
                value={languages}
                onChange={(event) =>
                  setLanguages(event.target.value)
                }
                placeholder="e.g. English, French, Twi"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
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
              Add photos that help buyers understand your service.
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
              Add videos demonstrating your service, skills,
              previous work or performances.
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

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="font-bold text-gray-900">
              Listing status
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Your service will first be saved as a Draft.
              You can publish it from your seller area later.
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Save {subcategory} Service
          </button>

        </form>
      </div>
    </main>
  );
}