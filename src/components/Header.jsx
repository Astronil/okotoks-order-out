import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images/images';
import '../styles.css';

/**
 * Header Component
 * Navigation bar with company logo and menu links
 * Responsive with hamburger menu for mobile devices
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Company Logo/Name */}
          <Link to="/" className="logo">
            <img src={logo} alt="Okotoks Order Out Logo" className="logo-image" />
            <div className="logo-text">
              <h1>Okotoks Order Out</h1>
              <span className="logo-subtitle">Triple O</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/partners" className="nav-link">Our Partners</Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="hamburger" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/partners" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Partners</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

