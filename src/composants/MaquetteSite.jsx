export default function MaquetteSite() {
  return (
    <div className="mc" aria-hidden="true">
      <div className="mc-page">
        <div className="mc-nav">
          <b>Votre marque</b>
          <span>Services</span>
          <span>Portfolio</span>
          <span>Témoignages</span>
          <i>Contactez-nous</i>
        </div>

        <div className="mc-hero">
          <h4>Un site clair pour<br />des idées brillantes</h4>
          <p>Nous transformons vos visions en réalité numérique</p>
          <em>Découvrir nos services</em>
        </div>

        <div className="mc-cartes">
          <div><b>Site vitrine</b><s /><s /></div>
          <div><b>Boutique</b><s /><s /></div>
          <div><b>Référencement</b><s /><s /></div>
        </div>
      </div>
    </div>
  );
}