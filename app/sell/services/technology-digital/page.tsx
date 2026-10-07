import Link from "next/link";

export default function TechnologyDigitalPage() {
  const categories = [
    {
      name: "Web Development & Design",
      slug: "web-development-design",
      icon: "🌐",
    },
    {
      name: "Mobile App Development",
      slug: "mobile-app-development",
      icon: "📱",
    },
    {
      name: "Graphic Design",
      slug: "graphic-design",
      icon: "🎨",
    },
    {
      name: "Digital Marketing & Social Media",
      slug: "digital-marketing-social-media",
      icon: "📣",
    },
    {
      name: "IT Support & Computer Services",
      slug: "it-support-computer-services",
      icon: "💻",
    },
    {
      name: "Software & Technology Consulting",
      slug: "software-technology-consulting",
      icon: "⚙️",
    },
    {
      name: "Data & AI Services",
      slug: "data-ai-services",
      icon: "🤖",
    },
    {
      name: "Other Technology & Digital Services",
      slug: "other-technology-digital-services",
      icon: "🔧",
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Technology & Digital Services</h1>
      <p>Select the service you provide.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {categories.map((item) => (
          <Link
            key={item.slug}
            href={`/sell/services/technology-digital/${item.slug}`}
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