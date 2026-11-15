import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND, VILLE, WHATSAPP, SERVICES, SECTEURS, PARCOURS, A_NOTER } from '../configuration.js';
import CarteService from '../composants/CarteService.jsx';

const ICONES = {
  rapidite: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  securite: <><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  seo: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /></>,
  suivi: <path d="M4 5h16v11H9l-5 4V5z" />,
  prix: <><path d="M3 12V4h8l10 10-8 8L3 12z" /><circle cx="7.5" cy="8.5" r="1.5" /></>,
  mobile: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  commande: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.5 12h11L21 7H6" /></>,
  lieu: <><path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></>,
};

function Icone({ nom, taille = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={taille} height={taille} fill="none" stroke="currentColor"
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

const RAISONS = [
  { icone: 'prix', titre: 'Des prix clairs', texte: 'Le prix de chaque offre est affiché avant que vous commandiez.' },
  { icone: 'mobile', titre: 'Pensé pour le mobile', texte: 'Un site lisible sur téléphone, là où vos clients vous cherchent.' },
  { icone: 'commande', titre: 'Une commande simple', texte: 'Vous commandez en ligne en quelques minutes, puis nous vous recontactons.' },
  { icone: 'suivi', titre: 'Une équipe joignable', texte: 'Écrivez-nous par WhatsApp ou par email, avant comme après la mise en ligne.' },
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
          <div className="grille-services">
            {SERVICES.map((s) => <CarteService key={s.id} service={s} avecPhoto />)}
          </div>
          <p><Link to="/services" className="lien-fort">Voir tous les services et prix</Link></p>
        </section>
      </div>

      {/* 3. Bleu : comment ça se passe */}
      <div className="section-bleue">
        <div className="conteneur">
          <h2>Comment ça se passe</h2>
          <ol className="parcours-client">
            {PARCOURS.map((e, i) => (
              <li key={e.titre}>
                <span>{i + 1}</span>
                <div>
                  <h3>{e.titre}</h3>
                  <p>{e.texte}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="a-noter"><strong>À noter :</strong> {A_NOTER}</p>
        </div>
      </div>

      {/* 4. Blanc : pourquoi choisir */}
      <div className="zone-blanche">
        <section className="conteneur section">
          <h2>Pourquoi choisir {BRAND} ?</h2>
          <div className="raisons">
            {RAISONS.map((r) => (
              <article className="raison" key={r.titre}>
                <span className="raison-icone"><Icone nom={r.icone} /></span>
                <h3>{r.titre}</h3>
                <p>{r.texte}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* 5. Bleu : Toleka, Kinshasa */}
      <div className="section-bleue section-lieu">
        <div className="conteneur lieu">
          <span className="lieu-icone"><Icone nom="lieu" taille={34} /></span>
          <div>
            <h2>Toleka</h2>
            <p className="lieu-sous">Nous travaillons à {VILLE}</p>
            <p>
              Nous accompagnons à {VILLE}, comme à l’international, dans la
              création de leur site internet :
            </p>
            <ul className="secteurs">
              {SECTEURS.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <div className="rangee">
              {WHATSAPP && (
                <a className="bouton" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  Écrire sur WhatsApp
                </a>
              )}
              <Link className="bouton contour" to="/contact">Nous contacter</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Blanc : appel à l'action */}
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