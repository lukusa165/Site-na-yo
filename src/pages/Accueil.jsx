import { Link } from 'react-router-dom';
import { SERVICES, libellePrix } from '../configuration.js';
import CarteService from '../composants/CarteService.jsx';
import MaquetteSite from '../composants/MaquetteSite.jsx';
import ApercuService from '../composants/ApercuService.jsx';

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

const GARANTIES = [
  'Sites adaptés au mobile',
  'Hébergement sécurisé',
  'Bases du référencement incluses',
];

const ATOUTS = [
  { icone: 'rapidite', titre: 'Rapidité', texte: 'Des sites légers, pensés pour s’afficher vite sur ordinateur et mobile.' },
  { icone: 'securite', titre: 'Sécurité', texte: 'Hébergement sécurisé et protection des données de vos visiteurs.' },
  { icone: 'seo', titre: 'Référencement', texte: 'Les bases du référencement incluses pour être trouvé sur Google.' },
  { icone: 'suivi', titre: 'Accompagnement', texte: 'Nous restons joignables après la mise en ligne.' },
];

const ETAPES = [
  { titre: 'Comprendre', texte: 'Nous écoutons votre activité, vos clients et vos objectifs avant de dessiner quoi que ce soit.' },
  { titre: 'Construire', texte: 'Nous concevons et développons un site clair, rapide et adapté au mobile, puis nous le mettons en ligne.' },
  { titre: 'Faire évoluer', texte: 'Hébergement, mises à jour et accompagnement : votre site reste à jour dans la durée.' },
];

const QUESTIONS = [
  {
    q: 'Combien coûte un site ?',
    r: 'Un site vitrine démarre à 490 € et une boutique en ligne à 1290 €. Une application web sur mesure fait l’objet d’un devis, selon vos besoins.',
  },
  {
    q: 'Comment passer commande ?',
    r: 'Choisissez un service et cliquez sur « Commander », puis remplissez le formulaire. Nous vous recontactons ensuite pour valider les détails ensemble.',
  },
  {
    q: 'Mon site sera-t-il adapté au mobile ?',
    r: 'Oui. Tous nos sites sont conçus pour s’afficher correctement sur ordinateur, tablette et téléphone.',
  },
  {
    q: 'Que comprend la maintenance ?',
    r: 'À 29 €/mois : hébergement, mises à jour, sauvegardes, sécurité et support par email. Votre site reste rapide et protégé.',
  },
  {
    q: 'Puis-je faire refaire mon site existant ?',
    r: 'Oui. La refonte, à partir de 690 €, comprend un audit de l’existant, un nouveau design et la reprise de vos contenus.',
  },
  {
    q: 'Et si j’ai une question avant de commander ?',
    r: 'Écrivez-nous par WhatsApp, par email ou avec le formulaire de la page Contact. Nous sommes là pour vous conseiller.',
  },
];

// Ordre des illustrations = ordre des 3 premiers services
const TYPES_APERCU = ['vitrine', 'boutique', 'app'];

export default function Accueil() {
  return (
    <>
      {/* 1. Hero : blanc */}
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
          <ul className="garanties">
            {GARANTIES.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>

        <Link to="/realisations" className="imac" aria-label="Voir nos réalisations">
          <div className="imac-ecran"><MaquetteSite /></div>
          <div className="imac-menton" />
          <div className="imac-pied" />
          <div className="imac-socle" />
          <small className="legende-maquette">Maquette d’illustration</small>
        </Link>
      </section>

      {/* 2. Atouts : blanc */}
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

      {/* 3. Ce que nous faisons : bande bleu clair */}
      <div className="bande">
        <section className="conteneur">
          <div className="bloc-titre">
            <h2>Ce que nous faisons</h2>
            <p>Une offre claire, avec des prix affichés, pour chaque besoin.</p>
          </div>
          <div className="grille">
            {SERVICES.slice(0, 3).map((s, i) => (
              <div className="service-accueil" key={s.id}>
                <ApercuService type={TYPES_APERCU[i]} />
                <CarteService service={s} />
              </div>
            ))}
          </div>

          {SERVICES.length > 3 && (
            <div className="et-aussi">
              <h3>Et aussi</h3>
              <div className="et-aussi-liste">
                {SERVICES.slice(3, 5).map((s) => (
                  <Link className="et-aussi-item" to={`/commander/${s.id}`} key={s.id}>
                    <div>
                      <strong>{s.titre}</strong>
                      <span>{s.description}</span>
                    </div>
                    <b>{libellePrix(s)}</b>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="centre">
            <Link to="/services" className="bouton contour">Voir tous les services</Link>
          </div>
        </section>
      </div>

      {/* 4. Comment ça marche : blanc */}
      <section className="conteneur section bloc-accueil">
        <div className="bloc-titre">
          <h2>Comment ça marche</h2>
          <p>Trois étapes simples, de la première discussion à la mise en ligne.</p>
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
      </section>

      {/* 5. FAQ : bande bleu clair */}
      <div className="bande">
        <section className="conteneur">
          <div className="bloc-titre">
            <h2>Questions fréquentes</h2>
            <p>Les réponses aux questions que l’on nous pose le plus souvent.</p>
          </div>
          <div className="faq">
            {QUESTIONS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.r}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* 6. Appel final : blanc */}
      <section className="conteneur section bloc-accueil">
        <div className="bandeau bandeau-bleu">
          <p>Un projet en tête ? Parlons-en.</p>
          <Link className="bouton" to="/contact">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}