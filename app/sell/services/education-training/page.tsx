import Link from "next/link";

const services = [
  {
    name: "Academic Tutoring",
    path: "academic-tutoring",
    description:
      "Tutoring and academic support for school, university and other learners.",
  },
  {
    name: "Language Teaching",
    path: "language-teaching",
    description:
      "Teaching and practice in English, French and other languages.",
  },
  {
    name: "Vocational & Technical Training",
    path: "vocational-technical",
    description:
      "Practical training in trades, technical skills and vocational work.",
  },
  {
    name: "Professional Training",
    path: "professional-training",
    description:
      "Career development, workplace skills and professional training.",
  },
  {
    name: "Music & Performing Arts Training",
    path: "music-performing-arts",
    description:
      "Music, singing, dance, acting and other performing arts training.",
  },
  {
    name: "Sports Coaching",
    path: "sports-coaching",
    description:
      "Sports coaching, personal training and athletic development.",
  },
  {
    name: "Online Courses & Training",
    path: "online-courses",
    description:
      "Online classes, courses, workshops and remote training.",
  },
  {
    name: "Other Education & Training",
    path: "other",
    description:
      "Education and training services not listed above.",
  },
];

export default function EducationTrainingPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Education & Training
        </h1>

        <p className="mt-3 max-w-3xl text-gray-600">
          Offer teaching, training, coaching or educational
          services to people who want to learn new skills.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.path}
              href={`/sell/services/education-training/${service.path}`}
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