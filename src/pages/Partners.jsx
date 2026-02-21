import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import PartnerCard from '../components/PartnerCard';
import { partners } from '../data/partnersData';
import '../styles.css';

/**
 * Partners Page Component
 * Displays all partner businesses using PartnerCard components
 * Supports scroll-to-partner functionality from homepage
 */
function Partners() {
  const location = useLocation();

  // Scroll to partner when coming from homepage
  useEffect(() => {
    if (location.state?.scrollTo) {
      const partnerId = location.state.scrollTo;
      // Handle both numeric IDs (old) and string IDs (new)
      const element = document.getElementById(`partner-${partnerId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          // Add highlight effect
          element.classList.add('highlight-partner');
          setTimeout(() => {
            element.classList.remove('highlight-partner');
          }, 2000);
        }, 300);
      }
    }
  }, [location.state]);

  return (
    <div className="page">
      <SEO
        title="Our Partners - Local Restaurants & Businesses in Okotoks"
        description="Browse our partner restaurants in Okotoks. Order from Boston Pizza, Masala Lounge & Grill, Red Rock Pizza, Pierogi Craft, Social Kebab, and more with fast same-day delivery."
        keywords="Okotoks restaurants, local restaurants Okotoks, partner businesses, restaurant delivery, Boston Pizza Okotoks, Masala Lounge, Red Rock Pizza, Okotoks Donair, Tom's Pizza, J&A Chinese"
        url="/partners"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
      />
      <StructuredData type="website" />
      <section className="partners-hero">
        <div className="container">
          <h1 className="page-title">Our Partners</h1>
          <p className="page-subtitle">
            We're proud to partner with these amazing local businesses in Okotoks
          </p>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={partner.id} className="fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;

