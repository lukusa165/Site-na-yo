import { useEffect } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { BRAND, EMAIL, WHATSAPP } from '../configuration.js';

export default function Structure() {
  const { pathname } = useLocation();
  const theme = pathname === '/' ? 'theme-sombre' : 'theme-clair';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`theme ${theme}`}>
      <header className="entete">
        <div className="conteneur entete-barre">
          <Link to="/" className="logo">{BRAND}</Link>
          <nav className="menu">
            <NavLink to="/" end>Accueil</NavLink>
            <NavLink to="/services">Services et prix</NavLink>
            <NavLink to="/realisations">Réalisations</NavLink>
            <NavLink to="/a-propos">À propos</NavLink>
            <NavLink to="/contact" className="bouton-contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="pied">
        <div className="conteneur pied-contenu">
          <strong>{BRAND}</strong>
          <span>
            {EMAIL && <a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
            {WHATSAPP && (
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp</a>
            )}
          </span>
          <span>© {new Date().getFullYear()} {BRAND}</span>
        </div>
      </footer>
    </div>
  );
}