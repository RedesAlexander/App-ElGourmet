import { useState, useEffect } from 'react';
import './CookieBanner.css';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Comprobar consentimiento al cargar
  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');

    if (!consent) {
      // pequeño delay para mejor UX
      setTimeout(() => {
        setVisible(true);
      }, 500);
    }
  }, []);

  // Aceptar cookies
  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  // Rechazar cookies
  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setVisible(false);
  };

  // Si no es visible, no renderiza nada
  if (!visible) return null;

  return (
    <div className={`cookie-banner ${visible ? 'visible' : ''}`} role="dialog" aria-live="polite">
      <div className="cookie-content">

        <p className="cookie-text">
          Utilizamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar su uso.{' '}
          <a href="/privacy" className="cookie-link">
            Más información
          </a>
        </p>

        <div className="cookie-actions">
          <button
            className="cookie-btn cookie-btn--secondary"
            onClick={handleReject}
          >
            Rechazar
          </button>

          <button
            className="cookie-btn cookie-btn--primary"
            onClick={handleAccept}
          >
            Aceptar
          </button>
        </div>

      </div>
    </div>
  );
}

export default CookieBanner;