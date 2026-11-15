import { Link } from 'react-router-dom';
import { SERVICES, DELAIS, CAPACITE, PAIEMENT } from '../configuration.js';
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
        <h2>Choisissez vos services</h2>
        <div className="grille-services">
          {SERVICES.map((s) => <CarteService key={s.id} service={s} avecPhoto />)}
        </div>
      </section>

      <section className="conteneur section">
        <h2>Yoka musala</h2>
        <p className="intro">Votre site est prêt dans combien de jours ?</p>
        <div className="delais">
          {SERVICES.map((s) => (
            <div className="delai" key={s.id}>
              <strong>{s.titre}</strong>
             <span>{DELAIS[s.id] || 'Précisé à la confirmation'}</span>
            </div>
          ))}
        </div>
        {CAPACITE && <p className="capacite">{CAPACITE}</p>}
      </section>

      <section className="conteneur section">
        <div className="paiement">
          <div>
            <h2>Où payer ? Simplement.</h2>
            <p className="paiement-tag">Bongo na poche</p>
            <p>{PAIEMENT.note}</p>
          </div>
          <ul className="moyens-paiement">
            {PAIEMENT.moyens.map((m) => <li key={m}>{m}</li>)}
          </ul>
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