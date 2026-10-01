export default function FootballersPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-green-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Footballers
        </h1>

        <p className="text-gray-600 mb-8">
          Find footballers available for clubs, teams, competitions,
          events, training and other sporting opportunities.
        </p>

        <div className="rounded-xl bg-white p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Footballer Listings
          </h2>

          <p className="text-gray-600">
            Footballer profiles and available opportunities will appear here.
          </p>
        </div>

      </div>
    </main>
  );
}