import Link from "next/link";

export default function AgricultureEnvironmentPage() {
  const categories = [
    {
      name: "Farming & Crop Production Services",
      slug: "farming-crop-production",
      icon: "🌾",
    },
    {
      name: "Livestock & Animal Services",
      slug: "livestock-animal-services",
      icon: "🐄",
    },
    {
      name: "Agricultural Equipment & Machinery Services",
      slug: "agricultural-equipment-machinery",
      icon: "🚜",
    },
    {
      name: "Land Preparation & Farm Services",
      slug: "land-preparation-farm-services",
      icon: "🌱",
    },
    {
      name: "Environmental & Conservation Services",
      slug: "environmental-conservation",
      icon: "🌳",
    },
    {
      name: "Waste Management & Environmental Cleaning",
      slug: "waste-management-environmental-cleaning",
      icon: "♻️",
    },
    {
      name: "Agricultural Consultancy & Training",
      slug: "agricultural-consultancy-training",
      icon: "📚",
    },
    {
      name: "Other Agriculture & Environmental Services",
      slug: "other",
      icon: "🔧",
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Agriculture & Environmental Services</h1>

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
            href={`/sell/services/agriculture-environment/${item.slug}`}
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