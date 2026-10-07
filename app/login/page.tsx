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

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    setError("");

    const savedAccount = localStorage.getItem("userAccount");

    if (!savedAccount) {
      setError("No account found. Please create an account first.");
      return;
    }

    const account: UserAccount = JSON.parse(savedAccount);

    if (
      account.email !== email ||
      account.password !== password
    ) {
      setError("Incorrect email or password.");
      return;
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(account)
    );

    router.push("/account");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-2xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Sign In
        </h1>

        <p className="text-gray-600 mt-3 mb-8">
          Sign in to access your Your Market account.
        </p>

        <form
          onSubmit={handleLogin}
          className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
        >

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
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {error && (
            <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-5 py-4 font-bold text-white hover:bg-blue-700 transition"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Create an account
            </Link>
          </p>

        </form>

      </div>
    </main>
  );
}