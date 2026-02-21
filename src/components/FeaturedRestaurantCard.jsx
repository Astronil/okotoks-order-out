import '../styles.css';

/**
 * FeaturedRestaurantCard Component
 * Card for featured restaurants on homepage
 * Navigates to partners page and scrolls to specific partner
 */
function FeaturedRestaurantCard({ restaurant, onViewPartner }) {
  const handleViewPartner = () => {
    if (onViewPartner) {
      onViewPartner(restaurant.id);
    }
  };

  return (
    <div className="featured-restaurant-card">
      <div className="featured-restaurant-image">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          loading="lazy"
        />
        <div className="image-overlay"></div>
      </div>
      <div className="featured-restaurant-info">
        <h3>{restaurant.name}</h3>
        <p className="featured-restaurant-description">{restaurant.description}</p>
        <button className="btn-secondary" onClick={handleViewPartner}>
          View Partner
        </button>
      </div>
    </div>
  );
}

export default FeaturedRestaurantCard;

