import Link from "next/link";

const categories = [
  {
    name: "Fresh Produce",
    description:
      "Fruits, vegetables, grains and other fresh agricultural produce.",
    href: "/sell/goods/food/fresh-produce?listingType=Goods",
  },
  {
    name: "Meat & Poultry",
    description:
      "Beef, chicken, pork, goat, turkey and other meat products.",
    href: "/sell/goods/food/meat-poultry?listingType=Goods",
  },
  {
    name: "Fish & Seafood",
    description:
      "Fresh fish, frozen fish, seafood and other aquatic food products.",
    href: "/sell/goods/food/fish-seafood?listingType=Goods",
  },
  {
    name: "Prepared Food",
    description:
      "Cooked meals, local dishes, snacks and ready-to-eat food.",
    href: "/sell/goods/food/prepared-food?listingType=Goods",
  },
  {
    name: "Drinks & Beverages",
    description:
      "Water, juices, soft drinks and other non-alcoholic beverages.",
    href: "/sell/goods/food/drinks-beverages?listingType=Goods",
  },
  {
    name: "Grains & Legumes",
    description:
      "Rice, beans, maize, millet, sorghum and other grains and legumes.",
    href: "/sell/goods/food/grains-legumes?listingType=Goods",
  },
  {
    name: "Spices & Ingredients",
    description:
      "Spices, cooking ingredients, sauces and food preparation products.",
    href: "/sell/goods/food/spices-ingredients?listingType=Goods",
  },
  {
    name: "Other Food",
    description:
      "Food products that do not fit into the categories above.",
    href: "/sell/goods/food/other?listingType=Goods",
  },
];

export default function SellFoodPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Food
        </h1>

        <p className="text-gray-600 mb-10">
          Choose the type of food product you want to sell.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {category.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {category.description}
              </p>

              <div className="mt-5 text-blue-600 font-semibold">
                Choose {category.name} →
              </div>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}