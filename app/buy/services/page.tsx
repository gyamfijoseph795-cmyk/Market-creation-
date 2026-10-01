import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-green-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Services
        </h1>

        <p className="text-gray-600 mb-8">
          Find people and businesses offering services, skills and experiences.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/buy/services/entertainment"
            className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Entertainment
            </h2>
          </Link>

     <Link
  href="/buy/services/sports"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Sports
  </h2>
</Link>

          <Link
  href="/buy/services/recycling-waste"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Recycling & Waste Management
  </h2>
</Link>

          <Link
  href="/buy/services/transportation"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Transportation
  </h2>
</Link>

          <Link
  href="/buy/services/repairs-maintenance"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Repairs & Maintenance
  </h2>
</Link>

          <Link
  href="/buy/services/education-tutoring"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Education & Tutoring
  </h2>
</Link>

         <Link
  href="/buy/services/design-creative"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Design & Creative
  </h2>
</Link>

          <Link
  href="/buy/services/professional-services"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Professional Services
  </h2>
</Link>

          <Link
  href="/buy/services/other"
  className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition block"
>
  <h2 className="text-xl font-bold text-gray-900">
    Other Services
  </h2>
</Link>

        </div>

      </div>
    </main>
  );
}