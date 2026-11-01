import { Link } from 'react-router-dom';
import { PROJETS, SERVICES } from '../configuration.js';
import ApercuService from '../composants/ApercuService.jsx';

export default function Realisations() {
  return (
    <>
      <section className="conteneur entete-page">
        <h1>Réalisations</h1>
        <p className="intro">
          Des exemples de sites et d’applications que nous pouvons créer pour votre activité.
        </p>
      </section>

      <section className="conteneur section">
        <div className="grille">
          {PROJETS.map((p) => {
            const service = SERVICES.find((s) => s.id === p.service);
            return (
              <article className="service-accueil" key={p.nom}>
                <div className="realisation-visuel">
                  {p.image
                    ? <img src={p.image} alt={`Capture du projet ${p.nom}`} loading="lazy" />
                    : <ApercuService type={p.apercu} />}
                  <span className="badge-exemple">Exemple</span>
                </div>

                <div className="realisation-corps">
                  <p className="realisation-type">{p.type}</p>
                  <h3>{p.nom}</h3>
                  <p>{p.description}</p>

                  {service && (
                    <ul className="tags">
                      {service.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  )}

                  {service && (
                    <Link className="bouton contour" to={`/commander/${service.id}`}>
                      {service.devis ? 'Demander un devis' : 'Commander un site similaire'}
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="note-prix">
          Ces projets sont des exemples illustratifs du type de réalisation que nous proposons.
        </p>

        <div className="bandeau bandeau-bleu">
          <p>Un projet similaire en tête ? Parlons-en.</p>
          <Link className="bouton" to="/contact">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}