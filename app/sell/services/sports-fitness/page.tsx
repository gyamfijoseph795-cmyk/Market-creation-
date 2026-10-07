import Link from "next/link";

export default function SportsFitnessPage() {
  const categories = [
    {
      name: "Football & Soccer Services",
      slug: "football-soccer",
      icon: "⚽",
    },
    {
      name: "Personal Training & Fitness",
      slug: "personal-training-fitness",
      icon: "🏋️",
    },
    {
      name: "Sports Coaching",
      slug: "sports-coaching",
      icon: "🏅",
    },
    {
      name: "Gym & Fitness Classes",
      slug: "gym-fitness-classes",
      icon: "💪",
    },
    {
      name: "Sports Training & Development",
      slug: "sports-training-development",
      icon: "🎯",
    },
    {
      name: "Sports Event Services",
      slug: "sports-event-services",
      icon: "🏟️",
    },
    {
      name: "Sports Equipment & Training Services",
      slug: "sports-equipment-training",
      icon: "🥅",
    },
    {
      name: "Other Sports & Fitness Services",
      slug: "other",
      icon: "🔧",
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Sports & Fitness</h1>

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
            href={`/sell/services/sports-fitness/${item.slug}`}
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