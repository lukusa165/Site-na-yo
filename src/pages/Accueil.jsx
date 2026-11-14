import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../configuration.js';
import CarteService from '../composants/CarteService.jsx';

const ICONES = {
  rapidite: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  securite: <><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  seo: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /></>,
  suivi: <path d="M4 5h16v11H9l-5 4V5z" />,
};

function Icone({ nom }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONES[nom]}
    </svg>
  );
}

const ATOUTS = [
  { icone: 'rapidite', titre: 'Rapidité', texte: 'Des sites légers, rapides sur ordinateur et mobile.' },
  { icone: 'securite', titre: 'Sécurité', texte: 'Hébergement sécurisé et données protégées.' },
  { icone: 'seo', titre: 'Référencement', texte: 'Les bases du référencement incluses.' },
  { icone: 'suivi', titre: 'Accompagnement', texte: 'Nous restons joignables après la mise en ligne.' },
];

const ETAPES = [
  { titre: 'Comprendre', texte: 'Nous écoutons votre activité, vos clients et vos objectifs avant de dessiner quoi que ce soit.' },
  { titre: 'Construire', texte: 'Nous concevons et développons un site clair, rapide et adapté au mobile, puis nous le mettons en ligne.' },
  { titre: 'Faire évoluer', texte: 'Hébergement, mises à jour et accompagnement : votre site reste à jour dans la durée.' },
];

function PhotoHeros() {
  const [ok, setOk] = useState(true);
  if (!ok) {
    return (
      <div className="photo-heros photo-vide">
        <strong>Votre photo ici</strong>
        <small>Fichier : public/photo-accueil.jpg</small>
      </div>
    );
  }
  return (
    <div className="photo-heros">
      <img src="/photo-accueil.jpg" alt="Photo de présentation" onError={() => setOk(false)} />
    </div>
  );
}

export default function Accueil() {
  return (
    <>
      {/* 1. Bleu : présentation */}
      <div className="bande-bleue">
        <section className="conteneur heros">
          <div>
            <h1>Des sites web qui <span className="accent">propulsent</span> votre réussite.</h1>
            <p className="intro">
              Nous créons des sites modernes, rapides et soignés pour aider les
              entreprises à se démarquer et à attirer plus de clients.
            </p>
            <div className="rangee">
              <Link className="bouton" to="/services">Découvrir nos offres</Link>
              <Link className="bouton contour" to="/contact">Nous contacter</Link>
            </div>
          </div>
          <PhotoHeros />
        </section>

        <section className="conteneur">
          <div className="atouts">
            {ATOUTS.map((a) => (
              <div className="atout" key={a.titre}>
                <span className="atout-icone"><Icone nom={a.icone} /></span>
                <div>
                  <h3>{a.titre}</h3>
                  <p>{a.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 2. Blanc : services */}
      <div className="zone-blanche">
        <section className="conteneur section">
          <h2>Ce que nous faisons</h2>
          <p className="intro">Du site vitrine à l’application sur mesure, choisissez l’offre qui correspond à votre activité.</p>
          <div className="grille">
            {SERVICES.map((s) => <CarteService key={s.id} service={s} avecPhoto />)}
          </div>
          <p><Link to="/services" className="lien-fort">Voir tous les services et prix</Link></p>
        </section>
      </div>

      {/* 3. Bleu : méthode */}
      <div className="section-bleue">
        <div className="conteneur">
          <h2>Comment nous travaillons</h2>
          <div className="etapes">
            {ETAPES.map((e, i) => (
              <div className="etape" key={e.titre}>
                <span>{i + 1}</span>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Blanc : appel à l'action, bien encadré */}
      <div className="zone-blanche zone-cta">
        <section className="conteneur">
          <div className="cta-blanc">
            <div>
              <h2>Un projet en tête ?</h2>
              <p>Parlons-en : nous vous répondons pour valider les détails ensemble.</p>
            </div>
            <Link className="bouton" to="/contact">Nous contacter</Link>
          </div>
        </section>
      </div>
    </>
  );
}