export default function SportsEventsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-green-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Sports Events
        </h1>

        <p className="text-gray-600 mb-8">
          Find sports event organizers, event services and opportunities for
          competitions, tournaments, matches and other sporting events.
        </p>

        <div className="rounded-xl bg-white p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Sports Event Listings
          </h2>

          <p className="text-gray-600">
            Sports event providers, organizers and available opportunities
            will appear here.
          </p>
        </div>

      </div>
    </main>
  );
}