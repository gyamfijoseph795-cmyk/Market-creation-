import Link from "next/link";

export default function EntertainmentPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-green-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Entertainment
        </h1>

        <p className="text-gray-600 mb-8">
          Find talented people and businesses offering entertainment for
          events, occasions and personal bookings.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/buy/services/entertainment/singers"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Singers & Musicians
            </h2>
          </Link>

          <Link
            href="/buy/services/entertainment/djs"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              DJs
            </h2>
          </Link>

          <Link
            href="/buy/services/entertainment/mcs"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              MCs & Event Hosts
            </h2>
          </Link>

          <Link
            href="/buy/services/entertainment/dancers"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Dancers & Performers
            </h2>
          </Link>

          <Link
            href="/buy/services/entertainment/actors-comedians"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Actors & Comedians
            </h2>
          </Link>

          <Link
            href="/buy/services/entertainment/events"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Event Entertainment
            </h2>
          </Link>
        </div>
      </div>
    </main>
  );
}