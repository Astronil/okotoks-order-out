# Refactoring Guide - Centralized Image Management & Real Partners

This document explains the file structure, how to add new partners, and how image replacement works.

## 📁 File Structure

```
src/
├── assets/
│   └── images/
│       ├── images.js          # Centralized image exports
│       └── images/            # Image files folder
│           ├── hero.jpg
│           ├── boston-pizza.jpg
│           ├── pierogi-craft.jpg
│           ├── masala-lounge.jpg
│           ├── social-kebab.jpg
│           ├── red-rock-pizza.jpg
│           ├── spices-cuisine.jpg
│           ├── gorkha-spice.jpg
│           ├── donair-pizza.jpg
│           ├── toms-pizza.jpg
│           ├── j-a-chinese.jpg
│           ├── margherita-pizza.jpg
│           ├── dragon-roll.jpg
│           ├── artisan-sourdough.jpg
│           └── grilled-salmon.jpg
│
├── data/
│   └── partnersData.js        # Centralized partner data
│
├── components/
│   ├── PartnerCard.jsx        # Uses partner.image (from data)
│   ├── FeaturedRestaurantCard.jsx  # Uses restaurant.image
│   └── DishCard.jsx           # Uses dish.image
│
└── pages/
    ├── Home.jsx               # Imports from images.js and partnersData.js
    └── Partners.jsx           # Imports from partnersData.js
```

## 🎯 How It Works

### 1. Centralized Image Management (`src/assets/images/images.js`)

All images are imported and exported from a single file:

```javascript
// Import images
import heroImage from "./images/hero.jpg";
import bostonPizza from "./images/boston-pizza.jpg";

// Export them
export {
  heroImage,
  bostonPizza,
  // ... more images
};
```

**Benefits:**
- Single source of truth for all images
- Easy to find and replace images
- Type safety (if using TypeScript)
- Better tree-shaking and bundling

### 2. Centralized Partner Data (`src/data/partnersData.js`)

All partner information is stored in one place:

```javascript
import { bostonPizza } from '../assets/images/images';

export const partners = [
  {
    id: 'boston-pizza',
    name: 'Boston Pizza (Okotoks)',
    category: 'Restaurant',
    description: '...',
    image: bostonPizza,  // Imported from images.js
    website: '#'
  },
  // ... more partners
];
```

**Benefits:**
- Easy to add/remove partners
- Consistent data structure
- Reusable helper functions
- Single place to update partner info

### 3. Component Usage

Components receive images as props or import directly:

```javascript
// In Home.jsx
import { heroImage } from '../assets/images/images';
import { getFeaturedPartners } from '../data/partnersData';

// Use in JSX
<div style={{ backgroundImage: `url(${heroImage})` }}></div>

// PartnerCard receives image from partner object
<PartnerCard partner={partner} />  // partner.image is already set
```

## ➕ How to Add a New Partner

### Step 1: Add the Image File
1. Place the image file in `src/assets/images/images/`
2. Name it appropriately (e.g., `new-restaurant.jpg`)

### Step 2: Import and Export in `images.js`
```javascript
// In src/assets/images/images.js
import newRestaurant from "./images/new-restaurant.jpg";

export {
  // ... existing exports
  newRestaurant
};
```

### Step 3: Add Partner Data
```javascript
// In src/data/partnersData.js
import { newRestaurant } from '../assets/images/images';

export const partners = [
  // ... existing partners
  {
    id: 'new-restaurant',
    name: 'New Restaurant Name',
    category: 'Restaurant',
    description: 'Description of the restaurant...',
    image: newRestaurant,  // Use imported image
    website: 'https://newrestaurant.com'  // Or '#' for placeholder
  }
];
```

### Step 4: (Optional) Add to Featured Partners
If you want to feature this partner on the homepage:

```javascript
// In src/data/partnersData.js
export const getFeaturedPartners = () => {
  const featuredIds = [
    'boston-pizza', 
    'masala-lounge', 
    'red-rock-pizza',
    'new-restaurant'  // Add new partner ID here
  ];
  return partners.filter(partner => featuredIds.includes(partner.id));
};
```

That's it! The partner will automatically appear on the Partners page.

## 🖼️ How Image Replacement Works

### Current System
Images are imported as modules, which means:
- Vite processes them during build
- They get optimized and hashed
- They're bundled with the app

### To Replace an Image

**Method 1: Replace the File (Recommended)**
1. Keep the same filename
2. Replace the file in `src/assets/images/images/`
3. Rebuild: `npm run build`
4. The new image will be used automatically

**Method 2: Update the Import**
1. Add new image file with different name
2. Update import in `images.js`:
   ```javascript
   // Old
   import bostonPizza from "./images/boston-pizza-old.jpg";
   
   // New
   import bostonPizza from "./images/boston-pizza-new.jpg";
   ```
3. Rebuild

### Why This Works
- Images are imported as modules, not as strings
- Vite handles the path resolution
- No hardcoded paths in components
- Easy to swap images without touching component code

## 📋 Real Partners List

The following real partners are now in the system:

1. **Boston Pizza (Okotoks)** - Restaurant
2. **Pierogi Craft** - Restaurant
3. **Masala Lounge & Grill** - Restaurant
4. **Social Kebab** - Restaurant
5. **Red Rock Pizza** - Restaurant
6. **Spices – East Indian & Nepalese Cuisine** - Restaurant
7. **Gorkha Spice – Indian & Nepalese Cuisine** - Restaurant
8. **Okotoks Donair & Pizza** - Restaurant
9. **Tom's House of Pizza** - Restaurant
10. **J&A Chinese Restaurant** - Restaurant

## 🎨 Featured Partners (Homepage)

Currently featured on homepage:
- Boston Pizza
- Masala Lounge & Grill
- Red Rock Pizza

To change featured partners, update `getFeaturedPartners()` in `partnersData.js`.

## 🔧 Helper Functions

### `getPartnerById(id)`
Get a specific partner by ID:
```javascript
import { getPartnerById } from '../data/partnersData';
const partner = getPartnerById('boston-pizza');
```

### `getFeaturedPartners()`
Get featured partners for homepage:
```javascript
import { getFeaturedPartners } from '../data/partnersData';
const featured = getFeaturedPartners();
```

## ✅ Benefits of This Structure

1. **Maintainability**: All data in one place
2. **Scalability**: Easy to add new partners
3. **Consistency**: Same structure for all partners
4. **Type Safety**: Clear data structure
5. **Performance**: Images optimized by Vite
6. **Flexibility**: Easy to update images or data

## 🚨 Important Notes

- **Image Files**: The actual image files don't exist yet. They need to be added to `src/assets/images/images/` with the exact filenames specified in `images.js`
- **Website Links**: Currently all set to `#` (placeholder). Update in `partnersData.js` when real URLs are available
- **No Hardcoded Paths**: All images use imports, no string paths in components
- **PWA Compatible**: Images are properly bundled for PWA caching

## 📝 Next Steps

1. Add actual image files to `src/assets/images/images/`
2. Update website URLs in `partnersData.js` when available
3. Test that all images load correctly
4. Verify partner cards display properly
5. Check featured restaurants on homepage

---

**Note**: The build will fail if image files are missing. Add placeholder images or actual images before building.

