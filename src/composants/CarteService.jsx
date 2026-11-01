import { Link } from 'react-router-dom';
import { libellePrix } from '../configuration.js';

export default function CarteService({ service }) {
  return (
    <article className="carte">
      <h3>{service.titre}</h3>
      <p className="prix">{libellePrix(service)}</p>
      <p>{service.description}</p>
      <ul>
        {service.points.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <Link className="bouton" to={`/commander/${service.id}`}>
        {service.devis ? 'Demander un devis' : 'Commander'}
      </Link>
    </article>
  );
}