import Link from "next/link";

export default function BeautyPersonalCarePage() {
  const categories = [
    {
      name: "Hairdressing & Barbering",
      slug: "hairdressing-barbering",
      icon: "💇",
    },
    {
      name: "Makeup Services",
      slug: "makeup",
      icon: "💄",
    },
    {
      name: "Nail & Manicure Services",
      slug: "nails-manicure",
      icon: "💅",
    },
    {
      name: "Skincare & Beauty Treatments",
      slug: "skincare-beauty-treatments",
      icon: "🧴",
    },
    {
      name: "Massage & Spa Services",
      slug: "massage-spa",
      icon: "💆",
    },
    {
      name: "Personal Styling & Fashion",
      slug: "personal-styling-fashion",
      icon: "👗",
    },
    {
      name: "Beauty & Personal Care Products Services",
      slug: "beauty-products-services",
      icon: "✨",
    },
    {
      name: "Other Beauty & Personal Care Services",
      slug: "other",
      icon: "🔧",
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Beauty & Personal Care</h1>

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
            href={`/sell/services/beauty-personal-care/${item.slug}`}
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