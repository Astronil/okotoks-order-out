import { useEffect } from 'react';

/**
 * StructuredData Component
 * Adds JSON-LD structured data for better SEO
 * 
 * @param {Object} props - Structured data configuration
 * @param {string} props.type - Type of structured data ('organization', 'localBusiness', 'website')
 */
function StructuredData({ type = 'organization' }) {
  useEffect(() => {
    // Remove existing structured data script if any
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData = {};

    if (type === 'organization' || type === 'localBusiness') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': type === 'localBusiness' ? 'LocalBusiness' : 'Organization',
        name: 'Okotoks Order Out',
        alternateName: 'Triple O',
        url: typeof window !== 'undefined' ? window.location.origin : 'https://okotoksorderout.com',
        logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : 'https://okotoksorderout.com/logo.png',
        description: 'Fast and reliable local delivery service for restaurants, groceries, and businesses in Okotoks, Alberta.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Okotoks',
          addressRegion: 'AB',
          addressCountry: 'CA'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'info@okotoksorderout.com'
        },
        sameAs: [
          // Add social media links when available
        ],
        areaServed: {
          '@type': 'City',
          name: 'Okotoks'
        }
      };

      if (type === 'localBusiness') {
        structuredData.priceRange = '$$';
        structuredData.serviceArea = {
          '@type': 'City',
          name: 'Okotoks'
        };
      }
    } else if (type === 'website') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Okotoks Order Out (Triple O)',
        url: typeof window !== 'undefined' ? window.location.origin : 'https://okotoksorderout.com',
        description: 'Fast and reliable local delivery service in Okotoks, Alberta',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: typeof window !== 'undefined' ? `${window.location.origin}/partners?search={search_term_string}` : 'https://okotoksorderout.com/partners?search={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      };
    }

    // Create and append script tag
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type]);

  return null;
}

export default StructuredData;

