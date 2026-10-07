import Link from "next/link";

const services = [
  {
    name: "Driving Services",
    path: "driving",
    description: "Professional drivers and personal driving services.",
  },
  {
    name: "Taxi & Ride Services",
    path: "taxi-rides",
    description: "Taxi, ride-hailing and private transportation services.",
  },
  {
    name: "Delivery Services",
    path: "delivery",
    description: "Delivery of goods, documents, food and other items.",
  },
  {
    name: "Moving & Relocation",
    path: "moving-relocation",
    description: "House moving, office relocation and transportation.",
  },
  {
    name: "Logistics Services",
    path: "logistics",
    description: "Logistics coordination, transport and distribution.",
  },
  {
    name: "Car Rental Services",
    path: "car-rental",
    description: "Cars and other vehicles available for rental.",
  },
  {
    name: "Courier Services",
    path: "courier",
    description: "Local and international courier services.",
  },
  {
    name: "Other Transportation Services",
    path: "other",
    description: "Transportation services not listed above.",
  },
];

export default function TransportationDeliveryPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Transportation & Delivery
        </h1>

        <p className="mt-3 max-w-3xl text-gray-600">
          Choose the transportation or delivery service you
          want to offer.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.path}
              href={`/sell/services/transportation-delivery/${service.path}`}
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