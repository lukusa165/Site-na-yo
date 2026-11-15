import { useState } from 'react';
import { Link } from 'react-router-dom';
import { libellePrix } from '../configuration.js';

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

function PhotoService({ service }) {
  const [i, setI] = useState(0);

  return (
    <div className="carte-photo">
      {i < EXTENSIONS.length ? (
        <img
          src={`/services/${service.id}.${EXTENSIONS[i]}`}
          alt={service.titre}
          loading="lazy"
          style={{ objectPosition: service.cadrage || 'center' }}
          onError={() => setI(i + 1)}
        />
      ) : (
        <span>Photo : public/services/{service.id}.jpg</span>
      )}
    </div>
  );
}

export default function CarteService({ service, avecPhoto = false }) {
  return (
    <article className="carte">
      {avecPhoto && <PhotoService service={service} />}
      <h3>{service.titre}</h3>
      <p className="prix">{libellePrix(service)}</p>
      <p>{service.description}</p>
      <ul>
        {service.points.map((p) => <li key={p}>{p}</li>)}
      </ul>
      {service.inclus ? (
        <p className="inclus">Incluse après la livraison de votre site</p>
      ) : (
        <Link className="bouton" to={`/commander/${service.id}`}>
          {service.devis ? 'Demander un devis' : 'Commander'}
        </Link>
      )}
    </article>
  );
}