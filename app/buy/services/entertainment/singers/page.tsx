export default function SingersPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-green-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Singers & Musicians
        </h1>

        <p className="text-gray-600 mb-8">
          Find singers and musicians available for events, weddings, parties,
          concerts and other occasions.
        </p>

        <div className="rounded-xl bg-white p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Singer & Musician Listings
          </h2>

          <p className="text-gray-600">
            Singer and musician profiles will appear here.
          </p>
        </div>
      </div>
    </main>
  );
}