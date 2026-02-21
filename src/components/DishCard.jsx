import '../styles.css';

/**
 * DishCard Component
 * Card for displaying popular food items
 */
function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <div className="dish-image">
        <img 
          src={dish.image} 
          alt={dish.name}
          loading="lazy"
        />
      </div>
      <div className="dish-info">
        <h4 className="dish-name">{dish.name}</h4>
        <p className="dish-restaurant">{dish.restaurant}</p>
        <p className="dish-description">{dish.description}</p>
      </div>
    </div>
  );
}

export default DishCard;

