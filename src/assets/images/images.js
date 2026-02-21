/**
 * Centralized Image Management
 * 
 * All images are imported here and exported as named exports.
 * 
 * To add a new image:
 * 1. Place the image file in the same directory as this file
 * 2. Import it here: import imageName from "./filename.jpg";
 * 3. Export it: export { imageName };
 * 
 * Then use it in components: import { imageName } from "../assets/images/images";
 */

// Hero images
import heroImage from "./hero.jpg";

// Logo
import logo from "./logo.jpg";

// Partner restaurant images
import bostonPizza from "./boston-pizza.jpg";
import pierogiCraft from "./pierogi-craft.png";
import masalaLounge from "./masala-lounge.jpg";
import socialKebab from "./social-kebab.png";
import redRockPizza from "./red-rock-pizza.png";
import spicesCuisine from "./spices-cuisine.png";
import gorkhaSpice from "./gorkha-spice.png";
import donairPizza from "./donair-pizza.png";
import tomsPizza from "./toms-pizza.png";
import jAChinese from "./j-a-chinese.png";

// Featured dish images (using partner images as placeholders for now)
// These can be replaced with actual dish images later
import margheritaPizza from "./red-rock-pizza.png";
import dragonRoll from "./masala-lounge.jpg";
import artisanSourdough from "./boston-pizza.jpg";
import grilledSalmon from "./social-kebab.png";

// Export all images
export {
  heroImage,
  logo,
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
  margheritaPizza,
  dragonRoll,
  artisanSourdough,
  grilledSalmon
};

