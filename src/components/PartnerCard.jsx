import '../styles.css';

/**
 * PartnerCard Component
 * Reusable card component to display partner business information
 * 
 * @param {Object} partner - Partner object with name, description, category, image, website
 */
function PartnerCard({ partner }) {
  const handleOrderClick = (e) => {
    e.preventDefault();
    if (partner.website) {
      window.open(partner.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="partner-card" id={`partner-${partner.id}`}>
      <div className="partner-image">
        <img 
          src={partner.image} 
          alt={partner.name}
          loading="lazy"
        />
        <div className="image-overlay"></div>
      </div>
      <div className="partner-info">
        <h3>{partner.name}</h3>
        <p className="partner-description">{partner.description}</p>
        <div className="partner-footer">
          <span className="partner-category">{partner.category}</span>
          {partner.website && (
            <button 
              className="btn-partner-order"
              onClick={handleOrderClick}
            >
              Order from here
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PartnerCard;

