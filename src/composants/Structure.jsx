import { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { BRAND, EMAIL, WHATSAPP } from '../configuration.js';

export default function Structure() {
  const { pathname } = useLocation();
  const [ouvert, setOuvert] = useState(false);
  const theme = pathname === '/' ? 'theme-sombre' : 'theme-clair';

  useEffect(() => {
    setOuvert(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`theme ${theme}`}>
      <header className="entete">
        <div className="conteneur entete-barre">
         <Link to="/" className="logo" aria-label={BRAND}>
  <img src="/logo-blanc.png" alt="" className="logo-img" />
  <span>{BRAND}</span>
</Link>
          <button
            className={'burger' + (ouvert ? ' ouvert' : '')}
            aria-label="Ouvrir le menu"
            aria-expanded={ouvert}
            aria-controls="menu-principal"
            onClick={() => setOuvert(!ouvert)}
          >
            <span /><span /><span />
          </button>

          <nav id="menu-principal" className={'menu' + (ouvert ? ' ouvert' : '')}>
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
         <strong className="pied-marque">
  <img src={theme === 'theme-sombre' ? '/logo-blanc.png' : '/logo-bleu.png'} alt="" className="logo-pied" />
  {BRAND}
</strong>
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