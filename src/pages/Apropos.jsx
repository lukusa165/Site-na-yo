import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../configuration.js';

const VALEURS = [
  { titre: 'Clarté', texte: 'Des sites simples à comprendre pour vos visiteurs, et simples à faire évoluer pour vous.' },
  { titre: 'Qualité', texte: 'Des sites soignés, rapides et adaptés au mobile, de la conception à la mise en ligne.' },
  { titre: 'Proximité', texte: 'Nous restons joignables après la livraison pour vous accompagner dans la durée.' },
];

const ETAPES = [
  { titre: 'Comprendre', texte: 'Nous écoutons votre activité, vos clients et vos objectifs avant de dessiner quoi que ce soit.' },
  { titre: 'Construire', texte: 'Nous concevons et développons un site clair, rapide et adapté au mobile, puis nous le mettons en ligne.' },
  { titre: 'Faire évoluer', texte: 'Hébergement, mises à jour et accompagnement : votre site reste à jour dans la durée.' },
];

function PhotoApropos() {
  const [ok, setOk] = useState(true);
  return (
    <div className="photo-apropos">
      {ok ? (
        <img src="/a-propos.jpg" alt="Notre équipe au travail" loading="lazy" onError={() => setOk(false)} />
      ) : (
        <span>Photo : public/a-propos.jpg</span>
      )}
    </div>
  );
}

export default function Apropos() {
  return (
    <>
      <section className="services-haut">
        <div className="conteneur">
          <h1>À propos</h1>
          <p className="intro">
            {BRAND} est une société creer par one-dev de création de sites internet pour les entreprises, les écoles ,les hopitaux et pour chaque individue.
          </p>
        </div>
      </section>

      <section className="conteneur section">
        <div className="apropos-duo">
          <div>
            <h2>Qui sommes-nous</h2>
            <p>
              Nous accompagnons chaque client de la première idée à la mise en
              ligne, puis dans la durée : conception, développement, hébergement
              et maintenance.
            </p>
            <p>
              Notre objectif est simple : vous donner un site professionnel, qui
              présente votre activité clairement et qui vous apporte des clients.
            </p>
            <Link className="bouton" to="/services">Découvrir nos services</Link>
          </div>
          <PhotoApropos />
        </div>
      </section>

      <section className="conteneur section">
        <h2>Ce qui nous guide</h2>
        <div className="grille">
          {VALEURS.map((v) => (
            <article className="carte" key={v.titre}>
              <h3>{v.titre}</h3>
              <p>{v.texte}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="section-bleue">
        <div className="conteneur">
          <h2>Notre méthode</h2>
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