/**
 * Partners Data
 *
 * Centralized data file for all partner businesses.
 *
 * To add a new partner:
 * 1. Import the partner image in assets/images/images.js
 * 2. Add a new object to this array with:
 *    - id: unique identifier (kebab-case)
 *    - name: restaurant name
 *    - category: "Restaurant", "Grocery", or "Retail"
 *    - description: brief description
 *    - image: imported image from images.js
 *    - website: external website URL (use "#" for placeholder)
 */

import {
  bostonPizza,
  pierogiCraft,
  masalaLounge,
  socialKebab,
  redRockPizza,
  spicesCuisine,
  gorkhaSpice,
  donairPizza,
  tomsPizza,
  jAChinese,
} from "../assets/images/images";

export const partners = [
  {
    id: "boston-pizza",
    name: "Boston Pizza (Okotoks)",
    category: "Restaurant",
    description:
      "Family-friendly restaurant serving pizza, pasta, wings, and more. Perfect for family dinners and group gatherings.",
    image: bostonPizza,
    website: "https://bostonpizza.com/en/locations/okotoks.html",
  },
  {
    id: "pierogi-craft",
    name: "Pierogi Craft",
    category: "Restaurant",
    description:
      "Authentic Polish pierogi and traditional Eastern European cuisine. Handmade with love and traditional recipes.",
    image: pierogiCraft,
    website: "#",
  },
  {
    id: "masala-lounge",
    name: "Masala Lounge & Grill",
    category: "Restaurant",
    description:
      "Authentic Indian cuisine with rich flavors and aromatic spices. From classic curries to tandoori specialties.",
    image: masalaLounge,
    website: "https://www.masalaloungeandgrill.ca/",
  },
  {
    id: "social-kebab",
    name: "Social Kebab",
    category: "Restaurant",
    description:
      "Fresh Mediterranean and Middle Eastern cuisine. Delicious kebabs, shawarma, and traditional dishes.",
    image: socialKebab,
    website: "https://www.socialkabob.ca/",
  },
  {
    id: "red-rock-pizza",
    name: "Red Rock Pizza",
    category: "Restaurant",
    description:
      "Artisan pizza with fresh ingredients and creative toppings. A local favorite for quality pizza in Okotoks.",
    image: redRockPizza,
    website: "https://redrockpizza.ca/okotoks",
  },
  {
    id: "spices-cuisine",
    name: "Spices – East Indian & Nepalese Cuisine",
    category: "Restaurant",
    description:
      "Authentic East Indian and Nepalese dishes with bold flavors and traditional cooking methods.",
    image: spicesCuisine,
    website: "https://spicesrestaurant.ca/",
  },
  {
    id: "gorkha-spice",
    name: "Gorkha Spice – Indian & Nepalese Cuisine",
    category: "Restaurant",
    description:
      "Traditional Indian and Nepalese cuisine featuring aromatic spices and authentic regional recipes.",
    image: gorkhaSpice,
    website: "https://www.gorkha-spice.com/",
  },
  {
    id: "donair-pizza",
    name: "Okotoks Donair & Pizza",
    category: "Restaurant",
    description:
      "Fresh donairs, pizza, and Mediterranean favorites. A local staple for quick and delicious meals.",
    image: donairPizza,
    website: "https://okotoksdonairandpizza.ca/",
  },
  {
    id: "toms-pizza",
    name: "Tom's House of Pizza",
    category: "Restaurant",
    description:
      "Classic pizza house serving traditional pizzas, subs, and Italian favorites. Family-owned and operated.",
    image: tomsPizza,
    website: "https://www.tomshouseofpizza.com/",
  },
  {
    id: "j-a-chinese",
    name: "J&A Chinese Restaurant",
    category: "Restaurant",
    description:
      "Authentic Chinese cuisine with a wide variety of dishes. From classic favorites to regional specialties.",
    image: jAChinese,
    website: "https://jachineserestaurant.com/",
  },
];

/**
 * Get partner by ID
 * @param {string} id - Partner ID
 * @returns {Object|null} Partner object or null if not found
 */
export const getPartnerById = (id) => {
  return partners.find((partner) => partner.id === id) || null;
};

/**
 * Get featured partners (for homepage)
 * Always includes Spices, plus 2 random other partners
 * Order is randomized so Spices placement varies
 * @returns {Array} Array of featured partner objects
 */
export const getFeaturedPartners = () => {
  // Always include Spices
  const alwaysFeatured = "spices-cuisine";

  // Get all partner IDs except Spices
  const otherPartners = partners
    .filter((partner) => partner.id !== alwaysFeatured)
    .map((partner) => partner.id);

  // Randomly select 2 other partners
  const shuffled = [...otherPartners].sort(() => 0.5 - Math.random());
  const randomPartners = shuffled.slice(0, 2);

  // Combine: Spices + 2 random partners
  const featuredIds = [alwaysFeatured, ...randomPartners];

  // Get the partner objects
  const featuredPartners = partners.filter((partner) =>
    featuredIds.includes(partner.id),
  );

  // Randomize the order so Spices isn't always first
  return featuredPartners.sort(() => 0.5 - Math.random());
};
