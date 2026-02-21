import { Link } from 'react-router-dom';
import '../styles.css';

/**
 * Footer Component
 * Site footer with company info, links, and copyright
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Okotoks Order Out</h3>
            <p className="footer-tagline">Triple O - Fast & Reliable Local Delivery</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/partners" className="footer-link">Our Partners</Link>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <a href="tel:+14034659349" className="footer-link">Phone: (403) 465-9349</a>
            </p>
            <p>
              <a href="mailto:okotoksorderout@gmail.com" className="footer-link">Email: okotoksorderout@gmail.com</a>
            </p>
            <p>
              <a 
                href="https://www.facebook.com/profile.php?id=61586524262320" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                Follow us on Facebook
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2026 Okotoks Order Out (Triple O). Website developed by <a href="https://poudelanil.com" target="_blank" rel="noopener noreferrer" className="footer-link">Astronil</a>.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

