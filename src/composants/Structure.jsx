import { useEffect, useState } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { BRAND, EMAIL, WHATSAPP } from '../configuration.js';

export default function Structure() {
  const { pathname } = useLocation();
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOuvert(false);
  }, [pathname]);

  return (
    <div className="theme theme-clair">
      <header className="entete">
        <div className="conteneur entete-barre">
          <Link to="/" className="logo">{BRAND}</Link>

          <button
            type="button"
            className="burger"
            aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={ouvert}
            onClick={() => setOuvert((o) => !o)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
                 strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {ouvert ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>

          <nav className={`menu${ouvert ? ' ouvert' : ''}`}>
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
        <div className="conteneur">
          <div className="pied-haut">
            <div className="pied-marque">
              <strong>{BRAND}</strong>
              <p>Création de sites web pour les entreprises : conception, hébergement et accompagnement.</p>
            </div>

            <div>
              <h4>Navigation</h4>
              <div className="pied-liens">
                <Link to="/services">Services et prix</Link>
                <Link to="/realisations">Réalisations</Link>
                <Link to="/a-propos">À propos</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <h4>Nous joindre</h4>
              <div className="pied-liens">
                {EMAIL && <a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
                {WHATSAPP && (
                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp</a>
                )}
              </div>
            </div>
          </div>

          <div className="pied-bas">© {new Date().getFullYear()} {BRAND}. Tous droits réservés.</div>
        </div>
      </footer>
    </div>
  );
}