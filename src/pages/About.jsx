import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import '../styles.css';

/**
 * About Page Component
 * Company information including mission, story, vision, and team
 */
function About() {
  return (
    <div className="page">
      <SEO
        title="About Us - Local Delivery Service in Okotoks"
        description="Learn about Okotoks Order Out (Triple O), a community-focused local delivery service in Okotoks. Discover our mission to strengthen local businesses and provide fast, reliable delivery services."
        keywords="about Okotoks Order Out, Triple O delivery, local delivery company Okotoks, community delivery service, local business support"
        url="/about"
        image="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80"
      />
      <StructuredData type="organization" />
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Okotoks Order Out</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title fade-in-up">Our Mission</h2>
          <p className="about-text fade-in-up" style={{ animationDelay: '0.1s' }}>
            At Okotoks Order Out (Triple O), our mission is to strengthen local communities by providing 
            fast, reliable, and affordable delivery services. We connect local businesses 
            with their customers, ensuring that everyone has access to the products and 
            services they need, delivered right to their doorstep.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section about-section-alt">
        <div className="container">
          <h2 className="section-title fade-in-up">Our Story</h2>
          <p className="about-text fade-in-up" style={{ animationDelay: '0.1s' }}>
            Okotoks Order Out (Triple O) was founded with a simple idea: local businesses deserve the same 
            delivery capabilities as big corporations. What started as a small operation 
            with a few trusted drivers has grown into a community-focused delivery service 
            that supports dozens of local restaurants, shops, and businesses.
          </p>
          <p className="about-text fade-in-up" style={{ animationDelay: '0.2s' }}>
            We believe in keeping business local, supporting our neighbors, and building 
            a service that truly serves the community. Every delivery we make strengthens 
            the local economy and brings convenience to your daily life.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title fade-in-up">Our Vision</h2>
          <p className="about-text fade-in-up" style={{ animationDelay: '0.1s' }}>
            We envision a future where local businesses thrive alongside modern convenience. 
            By making delivery accessible and affordable, we're helping build stronger, 
            more connected communities where everyone benefits—from the local shop owner 
            to the busy family needing groceries delivered.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title fade-in-up">Our Team</h2>
          <div className="team-grid">
            <div className="team-member fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="team-photo">
                <div className="photo-placeholder">JD</div>
              </div>
              <h3>John Doe</h3>
              <p className="team-role">Founder</p>
            </div>
            <div className="team-member fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="team-photo">
                <div className="photo-placeholder">SM</div>
              </div>
              <h3>Sarah Miller</h3>
              <p className="team-role">Operations Manager</p>
            </div>
            <div className="team-member fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="team-photo">
                <div className="photo-placeholder">MJ</div>
              </div>
              <h3>Mike Johnson</h3>
              <p className="team-role">Driver</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

