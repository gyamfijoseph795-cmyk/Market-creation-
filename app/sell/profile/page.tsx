"use client";

import { useEffect, useState } from "react";

type UserAccount = {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  accountType: "Buyer" | "Seller" | "Both";
};

type SellerProfile = {
  sellerId: string;
  sellerName: string;
  phone: string;
  location: string;
  description: string;
};

export default function SellerProfilePage() {
  const [sellerId, setSellerId] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let account: UserAccount | null = null;
    let profile: SellerProfile | null = null;

    // Get the currently logged-in account.
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      try {
        account = JSON.parse(loggedInUser);
      } catch {
        account = null;
      }
    }

    // If loggedInUser is unavailable, use the registered account.
    if (!account) {
      const registeredAccount =
        localStorage.getItem("userAccount");

      if (registeredAccount) {
        try {
          account = JSON.parse(registeredAccount);
        } catch {
          account = null;
        }
      }
    }

    // Get existing seller profile information.
    const savedProfile =
      localStorage.getItem("sellerProfile");

    if (savedProfile) {
      try {
        profile = JSON.parse(savedProfile);
      } catch {
        profile = null;
      }
    }

    if (account) {
      // The account User ID is now the seller identity.
      setSellerId(account.userId);

      // Preserve existing seller information where available.
      setSellerName(
        profile?.sellerName || account.fullName || ""
      );

      setPhone(
        profile?.phone || account.phone || ""
      );

      setLocation(
        profile?.location || ""
      );

      setDescription(
        profile?.description || ""
      );
    }

    setLoading(false);
  }, []);

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();

    const profile: SellerProfile = {
      sellerId,
      sellerName,
      phone,
      location,
      description,
    };

    localStorage.setItem(
      "sellerProfile",
      JSON.stringify(profile)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <p className="text-gray-600">
          Loading your seller profile...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">
          Seller Profile
        </h1>

        <p className="text-gray-600 mb-8">
          Your seller profile is connected to your Your Market
          account.
        </p>

        <form
          onSubmit={handleSave}
          className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
        >

          {/* User ID */}

          <div className="mb-6">

            <label
              htmlFor="sellerId"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Your Market User ID
            </label>

            <input
              id="sellerId"
              type="text"
              value={sellerId}
              readOnly
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 font-mono"
            />

            <p className="text-xs text-gray-500 mt-2">
              This is the same unique ID used for your Your Market
              account.
            </p>

          </div>

          {/* Seller Name */}

          <div className="mb-6">

            <label
              htmlFor="sellerName"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Seller or Business Name
            </label>

            <input
              id="sellerName"
              type="text"
              value={sellerName}
              onChange={(event) =>
                setSellerName(event.target.value)
              }
              placeholder="Enter your name or business name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Phone */}

          <div className="mb-6">

            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) =>
                setPhone(event.target.value)
              }
              placeholder="Enter your phone number"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Location */}

          <div className="mb-6">

            <label
              htmlFor="location"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Location
            </label>

            <input
              id="location"
              type="text"
              value={location}
              onChange={(event) =>
                setLocation(event.target.value)
              }
              placeholder="Example: Accra"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Description */}

          <div className="mb-8">

            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              About You or Your Business
            </label>

            <textarea
              id="description"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Tell buyers briefly about yourself or your business."
              rows={5}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {saved && (
            <div className="mb-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm font-semibold text-green-700">
              Seller profile saved successfully.
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-5 py-4 font-bold text-white hover:bg-blue-700 transition"
          >
            Save Seller Profile
          </button>

        </form>

      </div>
    </main>
  );
}