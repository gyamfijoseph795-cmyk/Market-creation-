"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type UserAccount = {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  accountType: "Buyer" | "Seller" | "Both";
};

export default function AccountPage() {
  const router = useRouter();

  const [account, setAccount] = useState<UserAccount | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");

    if (!savedUser) {
      router.push("/login");
      return;
    }

    setAccount(JSON.parse(savedUser));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  if (!account) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">
          Loading your account...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <div className="flex items-center justify-between mb-10">

          <div>
            <p className="text-sm font-semibold text-blue-600">
              YOUR MARKET
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              Welcome, {account.fullName}
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your Your Market account from here.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-800 transition"
          >
            Sign Out
          </button>

        </div>

        {/* Account Information */}

        <section className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 mb-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Account Information
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500">
                Your Market User ID
              </p>

              <p className="font-mono font-bold text-gray-900 mt-1">
                {account.userId}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Account Type
              </p>

              <p className="font-bold text-gray-900 mt-1">
                {account.accountType}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Full Name
              </p>

              <p className="font-semibold text-gray-900 mt-1">
                {account.fullName}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Email Address
              </p>

              <p className="font-semibold text-gray-900 mt-1">
                {account.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Phone Number
              </p>

              <p className="font-semibold text-gray-900 mt-1">
                {account.phone}
              </p>
            </div>

          </div>

        </section>

        {/* Main Actions */}

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy"
            className="rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Buy
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Browse products and services available on Your Market.
            </p>
          </Link>

          <Link
            href="/sell"
            className="rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Sell
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Create and manage your listings.
            </p>
          </Link>

          <Link
            href="/sell/my-listings"
            className="rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              My Listings
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              View and manage your published listings.
            </p>
          </Link>

          <Link
            href="/sell/messages"
            className="rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Messages
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Communicate with buyers interested in your listings.
            </p>
          </Link>

          <Link
            href="/sell/profile"
            className="rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Seller Profile
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Manage your seller information and identity.
            </p>
          </Link>

        </section>

      </div>
    </main>
  );
}