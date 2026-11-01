import { Link } from 'react-router-dom';

export default function Introuvable() {
  return (
    <section className="conteneur section texte">
      <h1>Page introuvable</h1>
      <p className="intro">Cette adresse n’existe pas.</p>
      <Link className="bouton" to="/">Retour à l’accueil</Link>
    </section>
  );
}