import { useEffect } from 'react';

/**
 * SEO Component
 * Dynamically updates meta tags, title, and Open Graph tags for each page
 * 
 * @param {Object} props - SEO configuration
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords (optional)
 * @param {string} props.image - Open Graph image URL (optional)
 * @param {string} props.url - Canonical URL (optional)
 * @param {string} props.type - Open Graph type (default: 'website')
 */
function SEO({ 
  title, 
  description, 
  keywords = '', 
  image = 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
  url = '',
  type = 'website'
}) {
  const siteName = 'Okotoks Order Out (Triple O)';
  const defaultTitle = `${siteName} - Fast & Reliable Local Delivery in Okotoks`;
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to set attribute correctly
    const setMetaTag = (attr, value, content) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'author', siteName);

    // Open Graph tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', fullImage);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', siteName);
    setMetaTag('property', 'og:locale', 'en_CA');

    // Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Cleanup function (optional, but good practice)
    return () => {
      // Reset to default on unmount if needed
    };
  }, [title, description, keywords, image, url, type, fullTitle, fullImage, fullUrl, siteName]);

  return null; // This component doesn't render anything
}

export default SEO;

