import { useState } from 'react';
import { EMAIL, WHATSAPP } from '../configuration.js';
import { supabase } from '../supabase.js';

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
      <section className="services-haut">
        <div className="conteneur">
          <h1>Contact</h1>
          <p className="intro">Une question avant de commander ? Écrivez-nous.</p>
        </div>
      </section>

      <section className="conteneur section">
        <div className="contact-duo">
          <div className="contact-moyens">
            <h2>Nous joindre directement</h2>
            <p className="contact-texte">
              Choisissez le moyen qui vous convient. Nous vous répondons dès que possible.
            </p>

            {WHATSAPP && (
              <a className="moyen" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                <span className="moyen-icone" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5h16v11H9l-5 4V5z" />
                  </svg>
                </span>
                <span>
                  <strong>WhatsApp</strong>
                  <small>Discutons de votre projet</small>
                </span>
              </a>
            )}

            {EMAIL && (
              <a className="moyen" href={`mailto:${EMAIL}`}>
                <span className="moyen-icone" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span>
                  <strong>Email</strong>
                  <small>{EMAIL}</small>
                </span>
              </a>
            )}

            {!WHATSAPP && !EMAIL && (
              <p className="contact-texte">Renseignez EMAIL et WHATSAPP dans configuration.js.</p>
            )}
          </div>

          <form onSubmit={envoyer} className="formulaire carte-formulaire contact-form">
            <h2>Ou envoyez un message</h2>
            <label>Nom
              <input name="nom" required minLength={2} maxLength={120} autoComplete="name" />
            </label>
            <label>Email
              <input name="email" type="email" required maxLength={200} autoComplete="email" />
            </label>
            <label>Message
              <textarea name="message" required minLength={5} maxLength={4000} rows={6} />
            </label>

            <input name="siteweb" tabIndex={-1} autoComplete="off" className="piege" aria-hidden="true" />

            {etat === 'ok' && (
              <p className="succes" role="status">Message envoyé. Nous vous répondons dès que possible.</p>
            )}
            {etat === 'erreur' && (
              <p className="erreur" role="alert">
                L’envoi a échoué. Vérifiez votre connexion et réessayez.
              </p>
            )}

            <button className="bouton" disabled={etat === 'envoi'}>
              {etat === 'envoi' ? 'Envoi…' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}