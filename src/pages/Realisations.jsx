import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJETS } from '../configuration.js';

function CartePhoto({ projet }) {
  const [ok, setOk] = useState(true);
  return (
    <article className="projet">
      <a href={projet.lien} target="_blank" rel="noreferrer" className="projet-image">
        {ok ? (
          <img src={projet.image} alt={`Capture du site ${projet.nom}`} loading="lazy" onError={() => setOk(false)} />
        ) : (
          <span className="projet-vide">{projet.nom}</span>
        )}
      </a>
      <h3>{projet.nom}</h3>
      <p className="type-projet">{projet.type}</p>
      {projet.description && <p>{projet.description}</p>}
      <a href={projet.lien} target="_blank" rel="noreferrer" className="lien-fort">Voir le site</a>
    </article>
  );
}

export default function Realisations() {
  return (
    <>
      <section className="services-haut">
        <div className="conteneur">
          <h1>Réalisations</h1>
          <p className="intro">Les projets conçus et développés par notre équipe.</p>
        </div>
      </section>

      <section className="conteneur section">
        {PROJETS.length === 0 ? (
          <div className="realisations-vide">
            <span className="realisations-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </span>
            <h2>Nos premières réalisations arrivent</h2>
            <p>
              Nous préparons la présentation de nos projets. En attendant, parlez-nous
              du vôtre : nous le construirons avec vous.
            </p>
            <div className="rangee rangee-centre">
              <Link className="bouton" to="/services">Voir nos services</Link>
              <Link className="bouton contour" to="/contact">Nous contacter</Link>
            </div>
          </div>
        ) : (
          <div className="grille">
            {PROJETS.map((p) => <CartePhoto key={p.nom} projet={p} />)}
          </div>
        )}
      </section>
    </>
  );
}