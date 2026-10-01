import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">
        <p className="text-sm font-semibold text-blue-600 mb-4">
          YOUR MARKET
        </p>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Your Market
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Buy and sell products with people around you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/buy"
            className="rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700"
          >
            I&apos;m here to Buy
          </Link>

          <Link
            href="/sell"
            className="rounded-xl bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700"
          >
            I&apos;m here to Sell
          </Link>
        </div>
      </div>
    </main>
  );
}