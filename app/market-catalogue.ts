export type MarketCatalogueItem = {
  name: string;
  type: "Goods" | "Services";
  category: string;
  subcategory?: string;
  href: string;
  keywords?: string[];
};

export const marketCatalogue: MarketCatalogueItem[] = [
  // =========================
  // GOODS
  // =========================

  {
    name: "Electronics",
    type: "Goods",
    category: "Electronics",
    href: "/buy/goods/electronics",
    keywords: ["electronics", "electronic", "devices", "gadgets"],
  },

  {
    name: "Fashion",
    type: "Goods",
    category: "Fashion",
    href: "/buy/goods/fashion",
    keywords: ["fashion", "clothes", "clothing", "wear", "outfits"],
  },

  {
    name: "Food",
    type: "Goods",
    category: "Food",
    href: "/buy/goods/food",
    keywords: ["food", "foods", "meals", "edibles"],
  },

  {
    name: "Agriculture",
    type: "Goods",
    category: "Agriculture",
    href: "/buy/goods/agriculture",
    keywords: [
      "agriculture",
      "farming",
      "farm",
      "crops",
      "livestock",
      "produce",
    ],
  },

  {
    name: "Furniture & Home",
    type: "Goods",
    category: "Furniture & Home",
    href: "/buy/goods/furniture-home",
    keywords: [
      "furniture",
      "home",
      "house",
      "chairs",
      "tables",
      "beds",
      "sofas",
    ],
  },

  {
    name: "Waste & Used Materials",
    type: "Goods",
    category: "Waste & Used Materials",
    href: "/buy/goods/waste-used-materials",
    keywords: [
      "waste",
      "used",
      "materials",
      "scrap",
      "reusable",
      "reused",
    ],
  },

  {
    name: "Arts & Crafts",
    type: "Goods",
    category: "Arts & Crafts",
    href: "/buy/goods/arts-crafts",
    keywords: [
      "art",
      "arts",
      "craft",
      "crafts",
      "handmade",
      "creative",
    ],
  },

  {
    name: "Other Goods",
    type: "Goods",
    category: "Other",
    href: "/buy/goods/other",
    keywords: ["other", "miscellaneous"],
  },

  // =========================
  // SERVICES
  // =========================

  {
    name: "Entertainment",
    type: "Services",
    category: "Entertainment",
    href: "/buy/services/entertainment",
    keywords: [
      "entertainment",
      "music",
      "events",
      "performers",
      "performance",
    ],
  },

  {
    name: "Sports",
    type: "Services",
    category: "Sports",
    href: "/buy/services/sports",
    keywords: [
      "sports",
      "sport",
      "football",
      "soccer",
      "athletes",
      "players",
      "coaches",
    ],
  },

  {
    name: "Recycling & Waste",
    type: "Services",
    category: "Recycling & Waste",
    href: "/buy/services/recycling-waste",
    keywords: [
      "recycling",
      "recycle",
      "waste",
      "collection",
      "disposal",
      "composting",
    ],
  },

  {
    name: "Transportation",
    type: "Services",
    category: "Transportation",
    href: "/buy/services/transportation",
    keywords: [
      "transport",
      "transportation",
      "taxi",
      "delivery",
      "moving",
      "driver",
    ],
  },

  {
    name: "Repairs & Maintenance",
    type: "Services",
    category: "Repairs & Maintenance",
    href: "/buy/services/repairs-maintenance",
    keywords: [
      "repair",
      "repairs",
      "maintenance",
      "fix",
      "technician",
    ],
  },

  {
    name: "Education & Tutoring",
    type: "Services",
    category: "Education & Tutoring",
    href: "/buy/services/education-tutoring",
    keywords: [
      "education",
      "teacher",
      "teaching",
      "tutor",
      "tutoring",
      "lessons",
    ],
  },

  {
    name: "Design & Creative",
    type: "Services",
    category: "Design & Creative",
    href: "/buy/services/design-creative",
    keywords: [
      "design",
      "designer",
      "graphic",
      "graphics",
      "creative",
      "artist",
    ],
  },

  {
    name: "Professional Services",
    type: "Services",
    category: "Professional Services",
    href: "/buy/services/professional-services",
    keywords: [
      "professional",
      "consultant",
      "consulting",
      "business",
      "accountant",
      "lawyer",
    ],
  },

  {
    name: "Other Services",
    type: "Services",
    category: "Other",
    href: "/buy/services/other",
    keywords: ["other", "miscellaneous"],
  },
];