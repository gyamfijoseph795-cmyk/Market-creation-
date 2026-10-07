import Link from "next/link";

export default function EventsEntertainmentPage() {
  const categories = [
    {
      name: "Event Planning & Coordination",
      slug: "event-planning-coordination",
      icon: "📋",
    },
    {
      name: "Singers & Musicians",
      slug: "singers-musicians",
      icon: "🎤",
    },
    {
      name: "DJs",
      slug: "djs",
      icon: "🎧",
    },
    {
      name: "MCs & Event Hosts",
      slug: "mcs-event-hosts",
      icon: "🎙️",
    },
    {
      name: "Dancers & Performers",
      slug: "dancers-performers",
      icon: "💃",
    },
    {
      name: "Actors & Comedians",
      slug: "actors-comedians",
      icon: "🎭",
    },
    {
      name: "Photography & Videography",
      slug: "photography-videography",
      icon: "📸",
    },
    {
      name: "Other Events & Entertainment Services",
      slug: "other",
      icon: "🎪",
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Events & Entertainment</h1>

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
            href={`/sell/services/events-entertainment/${item.slug}`}
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