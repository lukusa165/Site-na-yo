import { Link } from 'react-router-dom';
import { BRAND, SERVICES, libellePrix } from '../configuration.js';

// À REMPLIR : tant que "texte" est vide, le bloc de présentation reste caché.
// Exemple : { nom: 'Prénom Nom', role: 'Développeur web', texte: 'Deux ou trois phrases sur toi...' }
const PRESENTATION = { nom: '', role: '', texte: '' };

const ENGAGEMENTS = [
  { titre: 'Rapidité', texte: 'Des sites légers, pensés pour s’afficher vite sur ordinateur et mobile.' },
  { titre: 'Sécurité', texte: 'Hébergement sécurisé et protection des données de vos visiteurs.' },
  { titre: 'Référencement', texte: 'Les bases du référencement incluses pour être trouvé sur Google.' },
  { titre: 'Accompagnement', texte: 'Nous restons joignables après la mise en ligne.' },
];

const ETAPES = [
  { titre: 'Comprendre', texte: 'Nous écoutons votre activité, vos clients et vos objectifs avant de dessiner quoi que ce soit.' },
  { titre: 'Construire', texte: 'Nous concevons et développons un site clair, rapide et adapté au mobile, puis nous le mettons en ligne.' },
  { titre: 'Faire évoluer', texte: 'Hébergement, mises à jour et accompagnement : votre site reste à jour dans la durée.' },
];

function initiales(nom) {
  return nom.split(' ').filter(Boolean).map((m) => m[0]).join('').slice(0, 2).toUpperCase();
}

export default function Apropos() {
  return (
    <>
      <section className="conteneur entete-page">
        <h1>À propos</h1>
        <p className="intro">{BRAND} crée des sites internet pour les entreprises.</p>
      </section>

      {/* Approche + services */}
      <section className="conteneur section">
        <div className="apropos-grille">
          <div className="texte">
            <h2>Notre approche</h2>
            <p>
              Nous accompagnons chaque client de la première idée à la mise en
              ligne, puis dans la durée : conception, développement,
              hébergement et maintenance.
            </p>
            <p>
              Nos prix sont affichés dès le départ. Après votre commande, nous
              vous recontactons pour valider les détails ensemble.
            </p>
            <div className="rangee">
              <Link className="bouton" to="/services">Voir les services</Link>
              <Link className="bouton contour" to="/contact">Nous contacter</Link>
            </div>
          </div>

          <div className="carte">
            <h3>Ce que nous réalisons</h3>
            <ul className="apropos-liste">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to="/services">
                    <span>{s.titre}</span>
                    <b>{libellePrix(s)}</b>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Engagements : bande bleu clair */}
      <div className="bande">
        <section className="conteneur">
          <div className="bloc-titre">
            <h2>Nos engagements</h2>
            <p>Ce que vous retrouvez dans chacun de nos projets.</p>
          </div>
          <div className="engagements">
            {ENGAGEMENTS.map((e) => (
              <div className="engagement" key={e.titre}>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Méthode : blanc */}
      <section className="conteneur section bloc-accueil">
        <div className="bloc-titre">
          <h2>Notre méthode</h2>
          <p>Trois étapes, de la première discussion à la mise en ligne.</p>
        </div>
        <div className="etapes">
          {ETAPES.map((e, i) => (
            <div className="etape" key={e.titre}>
              <span>{i + 1}</span>
              <h3>{e.titre}</h3>
              <p>{e.texte}</p>
            </div>
          ))}
        </div>

        {PRESENTATION.texte && (
          <div className="presentation">
            <div className="presentation-photo" aria-hidden="true">
              {initiales(PRESENTATION.nom) || '•'}
            </div>
            <div>
              <h3>Qui est derrière {BRAND}</h3>
              <p className="presentation-nom">
                <strong>{PRESENTATION.nom}</strong>
                {PRESENTATION.role && <span> · {PRESENTATION.role}</span>}
              </p>
              <p>{PRESENTATION.texte}</p>
            </div>
          </div>
        )}

        <div className="bandeau bandeau-bleu">
          <p>Un projet en tête ? Parlons-en.</p>
          <Link className="bouton" to="/contact">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}