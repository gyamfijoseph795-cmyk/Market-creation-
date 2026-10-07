"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

type UserAccount = {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  accountType: "Buyer" | "Seller" | "Both";
};

export default function CreateListingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const listingType =
    searchParams.get("listingType") || "Not selected";

  const category =
    searchParams.get("category") || "Not selected";

  const subcategory =
    searchParams.get("subcategory") || "Not selected";

  const product =
    searchParams.get("product") || "Not selected";

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] =
    useState("Available now");
  const [availabilityDate, setAvailabilityDate] =
    useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const handlePhotoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    setPhotos((currentPhotos) => [
      ...currentPhotos,
      ...selectedFiles,
    ]);
  };

  const removePhoto = (index: number) => {
    setPhotos((currentPhotos) =>
      currentPhotos.filter(
        (_, photoIndex) => photoIndex !== index
      )
    );
  };

  const convertPhotosToDataUrls = (
    files: File[]
  ): Promise<string[]> => {
    return Promise.all(
      files.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
              resolve(reader.result as string);
            };

            reader.onerror = () => {
              reject(new Error("Could not read image"));
            };

            reader.readAsDataURL(file);
          })
      )
    );
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    /*
      Get the currently logged-in account.
      Every new listing must belong to an account.
    */
    const loggedInUser =
      localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      alert(
        "Please log in to your Your Market account before creating a listing."
      );

      router.push("/login");
      return;
    }

    let account: UserAccount | null = null;

    try {
      account = JSON.parse(loggedInUser);
    } catch {
      account = null;
    }

    if (!account?.userId) {
      alert(
        "Your account information could not be verified. Please log in again."
      );

      localStorage.removeItem("loggedInUser");
      router.push("/login");
      return;
    }

    if (
      availability === "Available from a date" &&
      !availabilityDate
    ) {
      alert(
        "Please select the date when this item will be available."
      );
      return;
    }

    try {
      const photoData =
        await convertPhotosToDataUrls(photos);

      const listingData = {
        sellerId: account.userId,
        listingType,
        category,
        subcategory,
        product,
        productName,
        description,
        price,
        condition,
        quantity,
        location,
        availability,
        availabilityDate,
        photos: photoData,
      };

      localStorage.setItem(
        "listingPreview",
        JSON.stringify(listingData)
      );

      router.push("/sell/preview-listing");
    } catch (error) {
      console.error(
        "Error processing photos:",
        error
      );

      alert(
        "There was a problem processing the photos. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Create Listing
        </h1>

        <p className="text-gray-600 mb-8">
          Provide information about the product or service you want to offer.
        </p>

        {/* Selected Listing Information */}

        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-5 mb-8">

          <h2 className="text-lg font-bold text-gray-900 mb-4">
            What are you listing?
          </h2>

          <div className="grid gap-4 sm:grid-cols-4">

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Type
              </p>

              <p className="font-semibold text-gray-900 mt-1">
                {listingType}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Category
              </p>

              <p className="font-semibold text-gray-900 mt-1">
                {category}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Subcategory
              </p>

              <p className="font-semibold text-gray-900 mt-1">
                {subcategory}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Product Type
              </p>

              <p className="font-semibold text-gray-900 mt-1">
                {product}
              </p>
            </div>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
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
                setProductName(e.target.value)
              }
              placeholder="e.g. Samsung Galaxy S25"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Photos */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Photos
            </label>

            <p className="text-sm text-gray-500 mb-3">
              Add clear photos of the product. You can select multiple photos.
            </p>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white"
            />

            {photos.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">

                {photos.map((photo, index) => (
                  <div
                    key={`${photo.name}-${index}`}
                    className="relative rounded-xl border border-gray-200 overflow-hidden bg-gray-50"
                  >

                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Product photo ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removePhoto(index)
                      }
                      className="absolute top-2 right-2 rounded-full bg-red-600 text-white w-8 h-8 font-bold hover:bg-red-700"
                    >
                      ×
                    </button>

                  </div>
                ))}

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
                setDescription(e.target.value)
              }
              placeholder="Describe the product or service..."
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
                setPrice(e.target.value)
              }
              placeholder="e.g. 4500"
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
                setCondition(e.target.value)
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
                setQuantity(e.target.value)
              }
              placeholder="e.g. 1"
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
                setAvailability(e.target.value);

                if (
                  e.target.value === "Available now" ||
                  e.target.value ===
                    "Temporarily unavailable"
                ) {
                  setAvailabilityDate("");
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

            <p className="text-sm text-gray-500 mt-2">
              You can advertise something even when it is not currently available.
            </p>
          </div>

          {/* Availability Date */}

          {(availability === "Available from a date" ||
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
                value={availabilityDate}
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

              {availability ===
                "Pre-order / Pre-booking" && (
                <p className="text-sm text-gray-500 mt-2">
                  This date is optional. You can accept interest or bookings even if you do not have a confirmed availability date yet.
                </p>
              )}

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
                setLocation(e.target.value)
              }
              placeholder="e.g. Accra, Ghana"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Continue */}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700 transition"
          >
            Continue to Preview →
          </button>

        </form>

      </div>
    </main>
  );
}