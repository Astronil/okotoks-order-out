import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import FeaturedRestaurantCard from '../components/FeaturedRestaurantCard';
import DishCard from '../components/DishCard';
import { getFeaturedPartners } from '../data/partnersData';
import { 
  heroImage,
  margheritaPizza, 
  dragonRoll, 
  artisanSourdough, 
  grilledSalmon 
} from '../assets/images/images';
import '../styles.css';

/**
 * Home Page Component
 * Main landing page with hero section, services, featured restaurants, dishes, and why choose us
 */
function Home() {
  const navigate = useNavigate();

  // Get featured restaurants from centralized data
  const featuredRestaurants = getFeaturedPartners();

  // Featured dishes data
  const featuredDishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      restaurant: "Red Rock Pizza",
      description: "Classic Italian pizza with fresh mozzarella and basil",
      image: margheritaPizza
    },
    {
      id: 2,
      name: "Butter Chicken",
      restaurant: "Masala Lounge & Grill",
      description: "Creamy and aromatic butter chicken with basmati rice",
      image: dragonRoll
    },
    {
      id: 3,
      name: "Traditional Pierogi",
      restaurant: "Pierogi Craft",
      description: "Handmade pierogi with traditional fillings",
      image: artisanSourdough
    },
    {
      id: 4,
      name: "Donair Plate",
      restaurant: "Okotoks Donair & Pizza",
      description: "Fresh donair meat with pita and signature sauce",
      image: grilledSalmon
    }
  ];

  const handleViewPartner = (partnerId) => {
    navigate('/partners', { state: { scrollTo: partnerId } });
  };

  const handleBrowseAll = () => {
    navigate('/partners');
  };

  return (
    <div className="page">
      <SEO
        title="Fast & Reliable Local Delivery in Okotoks"
        description="Okotoks Order Out (Triple O) provides fast, reliable same-day delivery services for local restaurants, groceries, and businesses in Okotoks. Support local businesses with convenient delivery to your doorstep."
        keywords="Okotoks delivery, local delivery service, restaurant delivery Okotoks, grocery delivery, same-day delivery, Triple O, Okotoks Order Out, food delivery, local business delivery"
        url="/"
        image="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80"
      />
      <StructuredData type="localBusiness" />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Fast & Reliable Local Delivery</h1>
            <p className="hero-subtitle">
              Connecting your favorite local businesses in Okotoks with your doorstep. 
              Same-day delivery you can trust, right here in your community.
            </p>
            <button className="btn-primary">Partner With Us</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title fade-in-up">Our Services</h2>
          <div className="services-grid">
            <div className="service-card fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="service-icon">🍽️</div>
              <h3>Restaurant Delivery</h3>
              <p>Get your favorite meals delivered fresh from local restaurants to your door.</p>
            </div>
            <div className="service-card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="service-icon">🛒</div>
              <h3>Grocery & Shops</h3>
              <p>Shop local groceries and essentials with convenient same-day delivery.</p>
            </div>
            <div className="service-card fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="service-icon">🏪</div>
              <h3>Local Business Support</h3>
              <p>Supporting local businesses by bringing their products directly to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="featured-restaurants">
        <div className="container">
          <h2 className="section-title fade-in-up">Featured Local Restaurants</h2>
          <p className="section-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
            Discover some of our most popular restaurant partners in Okotoks
          </p>
          <div className="featured-restaurants-grid">
            {featuredRestaurants.map((restaurant, index) => (
              <div key={restaurant.id} className="fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                <FeaturedRestaurantCard 
                  restaurant={restaurant} 
                  onViewPartner={handleViewPartner}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="featured-dishes">
        <div className="container">
          <h2 className="section-title fade-in-up">Popular Items in Okotoks</h2>
          <p className="section-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
            What's trending in your neighborhood
          </p>
          <div className="dishes-grid">
            {featuredDishes.map((dish, index) => (
              <div key={dish.id} className="fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                <DishCard dish={dish} />
              </div>
            ))}
          </div>
          <div className="browse-all-container fade-in-up" style={{ animationDelay: '0.5s' }}>
            <button className="btn-primary" onClick={handleBrowseAll}>
              Browse All Partners
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title fade-in-up">Why Choose Us</h2>
          <div className="features-list">
            <div className="feature-item fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="feature-icon">✓</span>
              <div>
                <h3>Same-day Delivery</h3>
                <p>Fast delivery when you need it most</p>
              </div>
            </div>
            <div className="feature-item fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="feature-icon">✓</span>
              <div>
                <h3>Local Trusted Drivers</h3>
                <p>Your neighbors delivering with care</p>
              </div>
            </div>
            <div className="feature-item fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="feature-icon">✓</span>
              <div>
                <h3>Affordable Pricing</h3>
                <p>Fair rates that work for everyone</p>
              </div>
            </div>
            <div className="feature-item fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="feature-icon">✓</span>
              <div>
                <h3>Community-Focused</h3>
                <p>Supporting local businesses and neighbors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

