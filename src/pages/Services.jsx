import { Link } from 'react-router-dom';
import { SERVICES } from '../configuration.js';
import CarteService from '../composants/CarteService.jsx';

export default function Services() {
  return (
    <>
      <section className="services-haut">
        <div className="conteneur">
          <h1>Services et prix</h1>
          <p className="intro">
            Choisissez un service et passez commande en quelques minutes.
            Nous vous recontactons ensuite pour valider les détails.
          </p>
        </div>
      </section>

      <section className="conteneur section">
        <div className="grille-services">
          {SERVICES.map((s) => <CarteService key={s.id} service={s} avecPhoto />)}
        </div>
      </section>

      <div className="zone-blanche zone-cta">
        <section className="conteneur">
          <div className="cta-blanc">
            <div>
              <h2>Un doute sur l’offre à choisir ?</h2>
              <p>Écrivez-nous : nous vous aidons à trouver celle qui correspond à votre activité.</p>
            </div>
            <Link className="bouton" to="/contact">Nous contacter</Link>
          </div>
        </section>
      </div>
    </>
  );
}