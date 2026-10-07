import Link from "next/link";

const services = [
  {
    name: "Legal Services",
    path: "legal",
    description:
      "Legal advice, representation, documentation and related services.",
  },
  {
    name: "Accounting & Tax Services",
    path: "accounting-tax",
    description:
      "Bookkeeping, accounting, tax preparation and financial records.",
  },
  {
    name: "Consulting Services",
    path: "consulting",
    description:
      "Professional advice, strategy, planning and specialist consulting.",
  },
  {
    name: "Human Resources & Recruitment",
    path: "hr-recruitment",
    description:
      "Recruitment, staffing, HR support and workforce services.",
  },
  {
    name: "Marketing & Advertising",
    path: "marketing-advertising",
    description:
      "Marketing, advertising, branding, promotion and campaign services.",
  },
  {
    name: "Business Administration",
    path: "business-administration",
    description:
      "Administrative support, documentation and business operations services.",
  },
  {
    name: "Research & Analysis",
    path: "research-analysis",
    description:
      "Research, data collection, analysis, reports and market research.",
  },
  {
    name: "Other Professional Services",
    path: "other",
    description:
      "Professional services that do not fit into the listed categories.",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Professional Services
        </h1>

        <p className="mt-3 max-w-3xl text-gray-600">
          Offer your professional knowledge, expertise,
          experience and business skills to customers.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.path}
              href={`/sell/services/professional/${service.path}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {service.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              <div className="mt-5 font-semibold text-blue-600">
                Offer this service →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}