import Link from "next/link";

export default function BusinessFinancialPage() {
  const categories = [
    {
      name: "Banking & Financial Advisory",
      slug: "banking-financial-advisory",
      icon: "🏦",
    },
    {
      name: "Insurance Services",
      slug: "insurance-services",
      icon: "🛡️",
    },
    {
      name: "Investment & Wealth Management",
      slug: "investment-wealth-management",
      icon: "📈",
    },
    {
      name: "Bookkeeping & Financial Management",
      slug: "bookkeeping-financial-management",
      icon: "📊",
    },
    {
      name: "Business Registration & Compliance",
      slug: "business-registration-compliance",
      icon: "📋",
    },
    {
      name: "Business Planning & Strategy",
      slug: "business-planning-strategy",
      icon: "💼",
    },
    {
      name: "Loans & Financial Support Services",
      slug: "loans-financial-support",
      icon: "💵",
    },
    {
      name: "Other Business & Financial Services",
      slug: "other",
      icon: "🔧",
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Business & Financial Services</h1>

      <p>Select the service you provide.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {categories.map((item) => (
          <Link
            key={item.slug}
            href={`/sell/services/business-financial/${item.slug}`}
            style={{
              textDecoration: "none",
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              color: "black",
            }}
          >
            <h2>
              {item.icon} {item.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}