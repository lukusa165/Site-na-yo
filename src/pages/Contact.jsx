import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EMAIL, WHATSAPP } from '../configuration.js';
import { supabase } from '../supabase.js';

const ETAPES = [
  'Vous nous écrivez votre besoin.',
  'Nous vous répondons et validons les détails ensemble.',
  'Nous créons votre site et le mettons en ligne.',
];

export default function Contact() {
  const [etat, setEtat] = useState('repos'); // repos, envoi, ok, erreur

  async function envoyer(e) {
    e.preventDefault();
    const formulaire = e.target;
    const f = Object.fromEntries(new FormData(formulaire));
    if (f.siteweb) return; // champ piège contre les robots
    setEtat('envoi');
    const { error } = await supabase.from('messages').insert({
      name: f.nom,
      email: f.email,
      message: f.message,
    });
    setEtat(error ? 'erreur' : 'ok');
    if (!error) formulaire.reset();
  }

  return (
    <>
      <section className="conteneur entete-page">
        <h1>Contact</h1>
        <p className="intro">Une question avant de commander ? Écrivez-nous.</p>
      </section>

      <section className="conteneur section deux-colonnes">
        <div className="contacts">
          <h2>Nous joindre directement</h2>

          {WHATSAPP && (
            <a className="contact-lien avec-icone" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              <div className="contact-icone">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 5h16v11H9l-5 4V5z" />
                </svg>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <span>Discutons de votre projet</span>
              </div>
            </a>
          )}

          {EMAIL && (
            <a className="contact-lien avec-icone" href={`mailto:${EMAIL}`}>
              <div className="contact-icone">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <div>
                <strong>Email</strong>
                <span>{EMAIL}</span>
              </div>
            </a>
          )}

          {!WHATSAPP && !EMAIL && (
            <p className="intro">Renseignez EMAIL et WHATSAPP dans configuration.js.</p>
          )}

          <div className="note-contact">
            <h3>Comment ça se passe</h3>
            <ol>
              {ETAPES.map((t) => <li key={t}>{t}</li>)}
            </ol>
          </div>

          <div className="note-contact note-commande">
            <div>
              <h3>Prêt à commander ?</h3>
              <p>Choisissez directement un service et ses prix.</p>
            </div>
            <Link className="bouton contour" to="/services">Voir les services</Link>
          </div>
        </div>

        <form onSubmit={envoyer} className="formulaire carte-formulaire">
          <h2>Ou envoyez un message</h2>
          <label>Nom
            <input name="nom" required minLength={2} maxLength={120} autoComplete="name" placeholder="Votre nom" />
          </label>
          <label>Email
            <input name="email" type="email" required maxLength={200} autoComplete="email" placeholder="vous@exemple.com" />
          </label>
          <label>Message
            <textarea name="message" required minLength={5} maxLength={4000} rows={6}
                      placeholder="Décrivez votre projet en quelques lignes." />
          </label>

          <input name="siteweb" tabIndex={-1} autoComplete="off" className="piege" aria-hidden="true" />

          {etat === 'ok' && (
            <div className="confirmation" role="status">
              <span className="confirmation-coche">✓</span>
              <div>
                <strong>Message envoyé</strong>
                <span>Nous vous répondons rapidement.</span>
              </div>
            </div>
          )}
          {etat === 'erreur' && (
            <p className="erreur" role="alert">
              L’envoi a échoué. Vérifiez votre connexion et réessayez.
            </p>
          )}

          <button className="bouton" disabled={etat === 'envoi'}>
            {etat === 'envoi' ? 'Envoi…' : 'Envoyer le message'}
          </button>
          <p className="mention-form">Vos informations servent uniquement à vous répondre.</p>
        </form>
      </section>
    </>
  );
}