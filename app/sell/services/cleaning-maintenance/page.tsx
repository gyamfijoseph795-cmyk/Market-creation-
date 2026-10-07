import Link from "next/link";

export default function CleaningMaintenancePage() {
  const categories = [
    {
      name: "House & Residential Cleaning",
      slug: "house-residential-cleaning",
      icon: "🏠",
    },
    {
      name: "Office & Commercial Cleaning",
      slug: "office-commercial-cleaning",
      icon: "🏢",
    },
    {
      name: "Laundry & Dry Cleaning",
      slug: "laundry-dry-cleaning",
      icon: "👕",
    },
    {
      name: "Car Cleaning & Detailing",
      slug: "car-cleaning-detailing",
      icon: "🚗",
    },
    {
      name: "Garden & Landscaping Maintenance",
      slug: "garden-landscaping",
      icon: "🌿",
    },
    {
      name: "Pest Control & Fumigation",
      slug: "pest-control-fumigation",
      icon: "🦟",
    },
    {
      name: "Repair & General Maintenance",
      slug: "repair-general-maintenance",
      icon: "🔧",
    },
    {
      name: "Other Cleaning & Maintenance Services",
      slug: "other",
      icon: "🧹",
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Cleaning & Maintenance</h1>

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
            href={`/sell/services/cleaning-maintenance/${item.slug}`}
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