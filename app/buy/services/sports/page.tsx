import Link from "next/link";

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-green-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Sports
        </h1>

        <p className="text-gray-600 mb-8">
          Find sports professionals, athletes and services for training,
          events, competitions and other sporting activities.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/services/sports/footballers"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Footballers
            </h2>
          </Link>

          <Link
  href="/buy/services/sports/coaches-trainers"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Coaches & Trainers
  </h2>
</Link>

          <Link
  href="/buy/services/sports/fitness-personal-training"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Fitness & Personal Training
  </h2>
</Link>
<Link
  href="/buy/services/sports/events"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Sports Events
  </h2>
</Link>

          <Link
  href="/buy/services/sports/referees-officials"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Referees & Officials
  </h2>
</Link>

          <Link
  href="/buy/services/sports/other"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Other Sports Services
  </h2>
</Link>

        </div>

      </div>
    </main>
  );
}