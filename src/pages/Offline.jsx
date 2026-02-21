import { useState } from 'react';
import '../styles.css';

/**
 * Offline Page Component
 * Shown when user is offline and tries to access uncached content
 */
function Offline() {
  const [retrying, setRetrying] = useState(false);

  const handleRetry = () => {
    setRetrying(true);
    // Try to reload the page
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="offline-page">
      <div className="offline-container">
        <div className="offline-content">
          <div className="offline-logo">
            <h1>Okotoks Order Out</h1>
            <span className="logo-subtitle">Triple O</span>
          </div>
          
          <div className="offline-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L9 1L17 9L9 17L1 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 9L15 1L7 9L15 17L23 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="9" y1="1" x2="15" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="9" y1="23" x2="15" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <h2 className="offline-title">You're Offline</h2>
          
          <p className="offline-message">
            You're offline, but Triple O is still ready to deliver when you're back online.
          </p>

          <p className="offline-submessage">
            Some features may be limited while offline. Please check your internet connection and try again.
          </p>

          <div className="offline-actions">
            <button 
              className="btn-primary" 
              onClick={handleRetry}
              disabled={retrying}
            >
              {retrying ? 'Retrying...' : 'Retry Connection'}
            </button>
            
            <button 
              className="btn-secondary" 
              onClick={handleGoHome}
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offline;

