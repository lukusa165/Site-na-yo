import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SERVICES, libellePrix } from '../configuration.js';
import { supabase } from '../supabase.js';
import Introuvable from './Introuvable.jsx';

export default function Commande() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);
  const [etat, setEtat] = useState('repos'); // repos, envoi, ok, erreur

  if (!service) return <Introuvable />;

  async function envoyer(e) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));
    if (f.siteweb) return; // champ piège contre les robots
    setEtat('envoi');
    const { error } = await supabase.from('orders').insert({
      service: service.titre,
      price: libellePrix(service),
      name: f.nom,
      email: f.email,
      phone: f.telephone || null,
      company: f.entreprise || null,
      details: f.details || null,
    });
    setEtat(error ? 'erreur' : 'ok');
  }

  if (etat === 'ok') {
    return (
      <section className="conteneur section texte">
        <h1>{service.devis ? 'Demande envoyée' : 'Commande envoyée'}</h1>
        <p className="intro">
          Merci. Nous vous contactons très vite pour valider votre demande « {service.titre} ».
        </p>
        <Link className="bouton" to="/">Retour à l’accueil</Link>
      </section>
    );
  }

  return (
    <section className="conteneur section texte">
      <h1>{service.devis ? 'Demander un devis' : 'Commander'}</h1>
      <p className="resume-service">
        <strong>{service.titre}</strong> · <span className="prix">{libellePrix(service)}</span>
      </p>

      <form onSubmit={envoyer} className="formulaire carte-formulaire">
        <label>Nom complet
          <input name="nom" required minLength={2} maxLength={120} autoComplete="name" />
        </label>
        <label>Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
        <label>Téléphone ou WhatsApp
          <input name="telephone" type="tel" maxLength={40} autoComplete="tel" />
        </label>
        <label>Entreprise
          <input name="entreprise" maxLength={200} autoComplete="organization" />
        </label>
        <label>Décrivez votre projet
          <textarea name="details" rows={5} maxLength={4000} />
        </label>

        <input name="siteweb" tabIndex={-1} autoComplete="off" className="piege" aria-hidden="true" />

        {etat === 'erreur' && (
          <p className="erreur" role="alert">
            L’envoi a échoué. Vérifiez votre connexion et réessayez.
          </p>
        )}

        <button className="bouton" disabled={etat === 'envoi'}>
          {etat === 'envoi' ? 'Envoi…' : service.devis ? 'Envoyer la demande' : 'Envoyer la commande'}
        </button>
      </form>
    </section>
  );
}