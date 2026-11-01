import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../supabase.js';

const STATUTS = {
  nouvelle: 'Nouvelle',
  en_cours: 'En cours',
  terminee: 'Terminée',
  annulee: 'Annulée',
};

export default function Admin() {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_evenement, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  if (session === undefined) return <p className="conteneur section">Chargement…</p>;
  return session ? <Tableau /> : <Connexion />;
}

function Connexion() {
  const [erreur, setErreur] = useState('');

  async function connecter(e) {
    e.preventDefault();
    setErreur('');
    const f = Object.fromEntries(new FormData(e.target));
    const { error } = await supabase.auth.signInWithPassword({
      email: f.email,
      password: f.motdepasse,
    });
    if (error) setErreur('Email ou mot de passe incorrect.');
  }

  return (
    <section className="conteneur section texte">
      <h1>Connexion</h1>
      <form onSubmit={connecter} className="formulaire carte-formulaire">
        <label>Email
          <input name="email" type="email" required autoComplete="username" />
        </label>
        <label>Mot de passe
          <input name="motdepasse" type="password" required autoComplete="current-password" />
        </label>
        {erreur && <p className="erreur" role="alert">{erreur}</p>}
        <button className="bouton">Se connecter</button>
      </form>
    </section>
  );
}

function Champ({ label, children }) {
  return (
    <div className="champ">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function Tableau() {
  const [onglet, setOnglet] = useState('orders');
  const [lignes, setLignes] = useState([]);
  const [erreur, setErreur] = useState('');

  const charger = useCallback(async () => {
    const { data, error } = await supabase
      .from(onglet)
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      setErreur('Lecture impossible.');
      setLignes([]);
    } else {
      setErreur('');
      setLignes(data);
    }
  }, [onglet]);

  useEffect(() => { charger(); }, [charger]);

  async function changerStatut(id, status) {
    await supabase.from('orders').update({ status }).eq('id', id);
    charger();
  }

  async function supprimer(id) {
    if (!confirm('Supprimer définitivement ?')) return;
    await supabase.from(onglet).delete().eq('id', id);
    charger();
  }

  const date = (d) =>
    new Date(d).toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'short' });

  return (
    <section className="conteneur section">
      <div className="admin-entete">
        <div>
          <h1>Administration</h1>
          <p>Commandes et messages reçus sur le site</p>
        </div>
        <button className="deconnexion" onClick={() => supabase.auth.signOut()}>
          Se déconnecter
        </button>
      </div>

      <div className="rangee">
        <button
          className={'onglet' + (onglet === 'orders' ? ' actif' : '')}
          onClick={() => setOnglet('orders')}
        >
          Commandes
        </button>
        <button
          className={'onglet' + (onglet === 'messages' ? ' actif' : '')}
          onClick={() => setOnglet('messages')}
        >
          Messages
        </button>
      </div>

      {onglet === 'orders' && !erreur && (
        <div className="stats">
          {Object.entries(STATUTS).map(([k, v]) => (
            <div key={k} className={`stat ${k}`}>
              <strong>{lignes.filter((x) => x.status === k).length}</strong>
              <span>{v}</span>
            </div>
          ))}
        </div>
      )}

      {erreur && (
        <p className="erreur">{erreur} Votre compte est-il bien dans la table « admins » ?</p>
      )}
      {!erreur && lignes.length === 0 && <p>Rien pour le moment.</p>}

      <div className="liste">
        {lignes.map((l) =>
          onglet === 'orders' ? (
            <article className={`fiche ${l.status}`} key={l.id}>
              <header className="fiche-tete">
                <span className={`pastille ${l.status}`}>{STATUTS[l.status]}</span>
                <small>{date(l.created_at)}</small>
              </header>

              <dl className="champs">
                <Champ label="Nom du client">{l.name}</Champ>
                <Champ label="Téléphone">
                  {l.phone
                    ? <a href={`tel:${l.phone.replace(/\s/g, '')}`}>{l.phone}</a>
                    : 'Non renseigné'}
                </Champ>
                <Champ label="Adresse email">
                  <a href={`mailto:${l.email}`}>{l.email}</a>
                </Champ>
                {l.company && <Champ label="Entreprise">{l.company}</Champ>}
                <Champ label="Commande">
                  <strong>{l.service}</strong>
                  <span className="prix-commande">{l.price || 'Prix non indiqué'}</span>
                </Champ>
                <Champ label="Description">
                  {l.details ? <span className="note">{l.details}</span> : 'Aucune description'}
                </Champ>
              </dl>

              <footer className="fiche-pied">
                <label className="statut">Statut
                  <select value={l.status} onChange={(e) => changerStatut(l.id, e.target.value)}>
                    {Object.entries(STATUTS).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </label>
                <button className="lien-danger" onClick={() => supprimer(l.id)}>Supprimer</button>
              </footer>
            </article>
          ) : (
            <article className="fiche" key={l.id}>
              <header className="fiche-tete">
                <span className="pastille nouvelle">Message</span>
                <small>{date(l.created_at)}</small>
              </header>

              <dl className="champs">
                <Champ label="Nom">{l.name}</Champ>
                <Champ label="Adresse email">
                  <a href={`mailto:${l.email}`}>{l.email}</a>
                </Champ>
                <Champ label="Message"><span className="note">{l.message}</span></Champ>
              </dl>

              <footer className="fiche-pied">
                <button className="lien-danger" onClick={() => supprimer(l.id)}>Supprimer</button>
              </footer>
            </article>
          )
        )}
      </div>
    </section>
  );
}