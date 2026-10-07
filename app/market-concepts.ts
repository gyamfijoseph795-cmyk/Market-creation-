export type MarketConcept = {
  concept: string;
  type: "Goods" | "Services";
  category: string;
  subcategory?: string;
  relatedTerms: string[];
};

export const marketConcepts: MarketConcept[] = [
  // GOODS — ELECTRONICS
  {
    concept: "Smartphones",
    type: "Goods",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    relatedTerms: [
      "phone",
      "phones",
      "smartphone",
      "smartphones",
      "mobile",
      "mobile phone",
      "cellphone",
      "iphone",
      "android",
      "tecno",
      "samsung",
      "infinix",
      "itel",
      "xiaomi",
    ],
  },

  {
    concept: "Computers",
    type: "Goods",
    category: "Electronics",
    subcategory: "Computers & Laptops",
    relatedTerms: [
      "computer",
      "computers",
      "pc",
      "desktop",
      "laptop",
      "laptops",
      "notebook",
      "macbook",
      "chromebook",
    ],
  },

  {
    concept: "Televisions",
    type: "Goods",
    category: "Electronics",
    subcategory: "Televisions",
    relatedTerms: [
      "tv",
      "television",
      "televisions",
      "smart tv",
      "screen",
      "display",
    ],
  },

  {
    concept: "Home Appliances",
    type: "Goods",
    category: "Electronics",
    subcategory: "Home Appliances",
    relatedTerms: [
      "fridge",
      "refrigerator",
      "freezer",
      "fan",
      "air conditioner",
      "ac",
      "washing machine",
      "microwave",
      "oven",
      "cooker",
      "blender",
      "kettle",
    ],
  },

  // GOODS — FURNITURE
  {
    concept: "Furniture",
    type: "Goods",
    category: "Furniture & Home",
    relatedTerms: [
      "furniture",
      "sofa",
      "couch",
      "chair",
      "chairs",
      "table",
      "tables",
      "bed",
      "beds",
      "wardrobe",
      "cabinet",
      "desk",
      "shelf",
      "shelves",
      "stool",
    ],
  },

  // GOODS — FOOD
  {
    concept: "Food",
    type: "Goods",
    category: "Food",
    relatedTerms: [
      "food",
      "foods",
      "rice",
      "beans",
      "yam",
      "plantain",
      "maize",
      "corn",
      "tomato",
      "tomatoes",
      "pepper",
      "meat",
      "fish",
      "chicken",
      "beef",
      "pork",
      "fruit",
      "fruits",
      "vegetable",
      "vegetables",
    ],
  },

  // GOODS — AGRICULTURE
  {
    concept: "Agricultural Products",
    type: "Goods",
    category: "Agriculture",
    relatedTerms: [
      "agriculture",
      "farming",
      "farm",
      "farmer",
      "farmers",
      "crop",
      "crops",
      "livestock",
      "poultry",
      "produce",
      "seed",
      "seeds",
      "fertilizer",
      "animal",
      "animals",
    ],
  },

  // GOODS — FASHION
  {
    concept: "Clothing",
    type: "Goods",
    category: "Fashion",
    relatedTerms: [
      "clothes",
      "clothing",
      "dress",
      "dresses",
      "shirt",
      "shirts",
      "trousers",
      "pants",
      "skirt",
      "skirts",
      "jeans",
      "jacket",
      "coat",
      "shorts",
      "wear",
      "outfit",
      "outfits",
    ],
  },

  // GOODS — TRANSPORT EQUIPMENT
  {
    concept: "Watercraft",
    type: "Goods",
    category: "Transportation",
    relatedTerms: [
      "boat",
      "boats",
      "canoe",
      "canoes",
      "ship",
      "ships",
      "yacht",
      "yachts",
      "vessel",
      "vessels",
      "ferry",
      "ferries",
      "watercraft",
      "kayak",
      "kayaks",
    ],
  },

  // GOODS — WASTE & USED MATERIALS
  {
    concept: "Waste & Used Materials",
    type: "Goods",
    category: "Waste & Used Materials",
    relatedTerms: [
      "waste",
      "trash",
      "garbage",
      "rubbish",
      "scrap",
      "used materials",
      "reusable",
      "recyclable",
      "plastic waste",
      "metal scrap",
      "paper waste",
      "old materials",
    ],
  },

  // SERVICES — ENTERTAINMENT
  {
    concept: "Singers & Musicians",
    type: "Services",
    category: "Entertainment",
    relatedTerms: [
      "singer",
      "singers",
      "musician",
      "musicians",
      "artist",
      "artists",
      "vocalist",
      "band",
      "bands",
      "music",
      "live music",
    ],
  },

  {
    concept: "DJs",
    type: "Services",
    category: "Entertainment",
    relatedTerms: [
      "dj",
      "djs",
      "disc jockey",
      "disc jockeys",
      "music dj",
    ],
  },

  {
    concept: "Event Hosts & MCs",
    type: "Services",
    category: "Entertainment",
    relatedTerms: [
      "mc",
      "mcs",
      "host",
      "hosts",
      "event host",
      "event hosts",
      "presenter",
      "presenters",
      "master of ceremonies",
    ],
  },

  // SERVICES — SPORTS
  {
    concept: "Footballers",
    type: "Services",
    category: "Sports",
    relatedTerms: [
      "footballer",
      "footballers",
      "football player",
      "football players",
      "soccer player",
      "soccer players",
      "soccer",
      "football",
      "player",
      "players",
      "athlete",
      "athletes",
    ],
  },

  {
    concept: "Sports Coaches",
    type: "Services",
    category: "Sports",
    relatedTerms: [
      "coach",
      "coaches",
      "trainer",
      "trainers",
      "sports coach",
      "football coach",
      "fitness coach",
    ],
  },

  // SERVICES — TRANSPORTATION
  {
    concept: "Transportation",
    type: "Services",
    category: "Transportation",
    relatedTerms: [
      "transport",
      "transportation",
      "taxi",
      "cab",
      "driver",
      "drivers",
      "car hire",
      "ride",
      "rides",
      "delivery",
      "courier",
      "moving",
      "moving service",
    ],
  },

  // SERVICES — RECYCLING
  {
    concept: "Recycling",
    type: "Services",
    category: "Recycling & Waste",
    relatedTerms: [
      "recycling",
      "recycle",
      "recycler",
      "waste collection",
      "waste disposal",
      "garbage collection",
      "trash collection",
      "composting",
      "compost",
    ],
  },

  // SERVICES — REPAIRS
  {
    concept: "Plumbing",
    type: "Services",
    category: "Repairs & Maintenance",
    relatedTerms: [
      "plumber",
      "plumbers",
      "plumbing",
      "pipe repair",
      "water pipe",
      "leak repair",
    ],
  },

  {
    concept: "Electrical Services",
    type: "Services",
    category: "Repairs & Maintenance",
    relatedTerms: [
      "electrician",
      "electricians",
      "electrical",
      "electric repair",
      "wiring",
      "wiring service",
    ],
  },

  {
    concept: "Phone & Electronics Repair",
    type: "Services",
    category: "Repairs & Maintenance",
    relatedTerms: [
      "phone repair",
      "mobile repair",
      "screen repair",
      "computer repair",
      "laptop repair",
      "electronics repair",
      "technician",
      "technicians",
    ],
  },

  // SERVICES — EDUCATION
  {
    concept: "Teaching & Tutoring",
    type: "Services",
    category: "Education & Tutoring",
    relatedTerms: [
      "teacher",
      "teachers",
      "teaching",
      "tutor",
      "tutors",
      "tutoring",
      "lesson",
      "lessons",
      "private teacher",
      "private tutor",
      "academic help",
    ],
  },

  // SERVICES — CREATIVE
  {
    concept: "Photography",
    type: "Services",
    category: "Design & Creative",
    relatedTerms: [
      "photographer",
      "photographers",
      "photography",
      "photo",
      "photos",
      "picture",
      "pictures",
      "wedding photography",
      "event photography",
    ],
  },

  {
    concept: "Graphic Design",
    type: "Services",
    category: "Design & Creative",
    relatedTerms: [
      "graphic designer",
      "graphic design",
      "designer",
      "design",
      "logo",
      "logos",
      "flyer",
      "flyers",
      "poster",
      "posters",
      "branding",
    ],
  },
];