import { Link } from 'react-router-dom';
import { SERVICES, libellePrix } from '../configuration.js';
import CarteService from '../composants/CarteService.jsx';
import ApercuService from '../composants/ApercuService.jsx';

const TYPES_APERCU = ['vitrine', 'boutique', 'app'];

const ETAPES = [
  { titre: 'Choisissez', texte: 'Sélectionnez le service qui correspond à votre projet et cliquez sur « Commander ».' },
  { titre: 'Décrivez votre besoin', texte: 'Remplissez le formulaire avec vos coordonnées et quelques lignes sur votre activité.' },
  { titre: 'Nous vous recontactons', texte: 'Nous revenons vers vous pour valider ensemble les détails du projet.' },
];

export default function Services() {
  const principaux = SERVICES.slice(0, 3);
  const complementaires = SERVICES.slice(3);

  return (
    <>
      <section className="conteneur entete-page">
        <h1>Services et prix</h1>
        <p className="intro">
          Choisissez un service et passez commande en quelques minutes.
          Nous vous recontactons ensuite pour valider les détails.
        </p>

        <div className="chips">
          {SERVICES.map((s, i) => (
            <a className="chip" key={s.id} href={i < 3 ? '#offres' : '#complements'}>
              {s.titre} <b>{libellePrix(s)}</b>
            </a>
          ))}
        </div>
      </section>

      {/* Offres principales */}
      <section className="conteneur section" id="offres">
        <div className="grille">
          {principaux.map((s, i) => (
            <div className="service-accueil" key={s.id}>
              <ApercuService type={TYPES_APERCU[i]} />
              <CarteService service={s} />
            </div>
          ))}
        </div>
        <p className="note-prix">
          Les prix « à partir de » dépendent de votre projet : nous validons
          les détails avec vous après votre commande.
        </p>
      </section>

      {/* Refonte et maintenance */}
      {complementaires.length > 0 && (
        <div className="bande bande-services" id="complements">
          <section className="conteneur">
            <div className="bloc-titre">
              <h2>Pour aller plus loin</h2>
              <p>Modernisez un site existant ou confiez-nous son suivi au quotidien.</p>
            </div>
            <div className="grille-deux">
              {complementaires.map((s) => <CarteService key={s.id} service={s} />)}
            </div>
          </section>
        </div>
      )}

      {/* Comment commander */}
      <section className="conteneur section bloc-accueil">
        <div className="bloc-titre">
          <h2>Comment commander</h2>
          <p>Trois étapes, sans paiement en ligne à cette étape.</p>
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

        <div className="bandeau bandeau-bleu">
          <p>Besoin d’aide pour choisir ?</p>
          <Link className="bouton" to="/contact">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}