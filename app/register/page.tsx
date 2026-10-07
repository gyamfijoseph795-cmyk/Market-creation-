"use client";

import { useState } from "react";
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

function createUserId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let randomPart = "";

  for (let i = 0; i < 8; i++) {
    randomPart += characters.charAt(
      Math.floor(
        Math.random() * characters.length
      )
    );
  }

  return `YU-${randomPart}`;
}

export default function RegisterPage() {
  const router = useRouter();

  const [userId, setUserId] = useState(
    createUserId()
  );

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] =
    useState<"Buyer" | "Seller" | "Both">("Both");

  const [saved, setSaved] = useState(false);

  const handleRegister = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    const account: UserAccount = {
      userId,
      fullName,
      email,
      phone,
      password,
      accountType,
    };

    localStorage.setItem(
      "userAccount",
      JSON.stringify(account)
    );

    setSaved(true);

    setTimeout(() => {
      router.push("/login");
    }, 1200);
  };

  const generateNewId = () => {
    setUserId(createUserId());
    setSaved(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-2xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Create Your Account
        </h1>

        <p className="text-gray-600 mt-3 mb-8">
          Create an account to buy, sell and communicate
          with other users on Your Market.
        </p>

        <form
          onSubmit={handleRegister}
          className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
        >

          {/* User ID */}

          <div className="mb-6">

            <label
              htmlFor="userId"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Your Market User ID
            </label>

            <div className="flex gap-3">

              <input
                id="userId"
                type="text"
                value={userId}
                readOnly
                className="flex-1 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 font-mono text-gray-700"
              />

              <button
                type="button"
                onClick={generateNewId}
                className="rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white hover:bg-gray-800 transition"
              >
                Generate New
              </button>

            </div>

            <p className="text-xs text-gray-500 mt-2">
              This unique ID will identify your account on
              Your Market.
            </p>

          </div>

          {/* Full Name */}

          <div className="mb-6">

            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(event) =>
                setFullName(event.target.value)
              }
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Email */}

          <div className="mb-6">

            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Enter your email address"
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

          {/* Password */}

          <div className="mb-6">

            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Create a password"
              minLength={6}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <p className="text-xs text-gray-500 mt-2">
              Use at least 6 characters.
            </p>

          </div>

          {/* Account Type */}

          <div className="mb-8">

            <p className="block text-sm font-semibold text-gray-900 mb-3">
              What will you use Your Market for?
            </p>

            <div className="grid gap-3 sm:grid-cols-3">

              {[
                {
                  value: "Buyer",
                  label: "Buyer",
                  description: "Buy products and services",
                },
                {
                  value: "Seller",
                  label: "Seller",
                  description: "Sell products and services",
                },
                {
                  value: "Both",
                  label: "Both",
                  description: "Buy and sell",
                },
              ].map((option) => (

                <label
                  key={option.value}
                  className={`cursor-pointer rounded-xl border p-4 transition ${
                    accountType === option.value
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >

                  <input
                    type="radio"
                    name="accountType"
                    value={option.value}
                    checked={
                      accountType === option.value
                    }
                    onChange={() =>
                      setAccountType(
                        option.value as
                          | "Buyer"
                          | "Seller"
                          | "Both"
                      )
                    }
                    className="sr-only"
                  />

                  <span className="block font-bold text-gray-900">
                    {option.label}
                  </span>

                  <span className="block text-xs text-gray-500 mt-1">
                    {option.description}
                  </span>

                </label>

              ))}

            </div>

          </div>

          {saved && (
            <div className="mb-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm font-semibold text-green-700">
              Account created successfully. Redirecting
              to login...
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-5 py-4 font-bold text-white hover:bg-blue-700 transition"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Sign in
            </Link>
          </p>

        </form>

      </div>
    </main>
  );
}