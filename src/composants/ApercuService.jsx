function Vitrine() {
  return (
    <svg viewBox="0 0 400 250" role="img" aria-label="Maquette d’un site vitrine">
      <defs>
        <linearGradient id="v-fond" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#DCEBFF" /><stop offset="1" stopColor="#F4F9FF" />
        </linearGradient>
        <linearGradient id="v-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E7490" /><stop offset="1" stopColor="#22B8CF" />
        </linearGradient>
        <linearGradient id="v-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EEF0F4" /><stop offset="1" stopColor="#B9BFC9" />
        </linearGradient>
        <filter id="v-ombre" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dy="5" stdDeviation="6" floodColor="#1D4ED8" floodOpacity="0.28" />
        </filter>
      </defs>
      <rect width="400" height="250" fill="url(#v-fond)" />
      <circle cx="46" cy="40" r="60" fill="#fff" opacity="0.5" />

      {/* Ordinateur portable */}
      <g filter="url(#v-ombre)">
        <rect x="68" y="24" width="264" height="162" rx="10" fill="#0B0C10" />
      </g>
      <rect x="75" y="31" width="250" height="148" rx="4" fill="#fff" />
      <text x="86" y="46" fontSize="8.5" fontWeight="800" fill="#0F1B33">Atelier Lumière</text>
      <rect x="212" y="41" width="22" height="4" rx="2" fill="#CBD5E8" />
      <rect x="240" y="41" width="22" height="4" rx="2" fill="#CBD5E8" />
      <rect x="284" y="38" width="32" height="11" rx="5.5" fill="#1D4ED8" />
      <rect x="84" y="56" width="232" height="64" rx="6" fill="url(#v-hero)" />
      <circle cx="292" cy="86" r="30" fill="#fff" opacity="0.14" />
      <circle cx="292" cy="86" r="16" fill="#fff" opacity="0.18" />
      <text x="98" y="80" fontSize="11" fontWeight="800" fill="#fff">Votre expertise,</text>
      <text x="98" y="93" fontSize="11" fontWeight="800" fill="#fff">mise en lumière.</text>
      <rect x="98" y="101" width="54" height="12" rx="6" fill="#fff" />
      <text x="125" y="109.4" fontSize="6" fontWeight="700" fill="#0E7490" textAnchor="middle">Prendre rendez-vous</text>
      {[84, 164, 244].map((x, i) => (
        <g key={x}>
          <rect x={x} y="128" width="72" height="44" rx="6" fill="#F3F7FF" stroke="#E3E9F4" />
          <circle cx={x + 13} cy="141" r="5" fill={['#1D4ED8', '#0E7490', '#F59E0B'][i]} />
          <rect x={x + 8} y="152" width="48" height="4" rx="2" fill="#CBD5E8" />
          <rect x={x + 8} y="160" width="32" height="4" rx="2" fill="#DCE4F2" />
        </g>
      ))}
      <path d="M40 186 H360 L350 198 Q348 202 342 202 H58 Q52 202 50 198 Z" fill="url(#v-base)" />
      <rect x="170" y="186" width="60" height="4" rx="2" fill="#A4AAB5" />

      {/* Notification flottante */}
      <g filter="url(#v-ombre)">
        <rect x="270" y="150" width="116" height="38" rx="10" fill="#fff" />
      </g>
      <circle cx="288" cy="169" r="9" fill="#16A34A" />
      <path d="M283.5 169.3l3.2 3.2 5.2-6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="303" y="167" fontSize="7.5" fontWeight="700" fill="#0F1B33">Devis envoyé</text>
      <text x="303" y="177" fontSize="6" fill="#64748B">il y a 2 minutes</text>
    </svg>
  );
}

function Boutique() {
  const produits = [
    { x: 40, a: '#F59E0B', b: '#FCD34D', prix: '29 €' },
    { x: 120, a: '#1D4ED8', b: '#60A5FA', prix: '49 €' },
    { x: 200, a: '#0E7490', b: '#22D3EE', prix: '89 €' },
  ];
  return (
    <svg viewBox="0 0 400 250" role="img" aria-label="Maquette d’une boutique en ligne">
      <defs>
        <linearGradient id="b-fond" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFF1DC" /><stop offset="1" stopColor="#FFF9F0" />
        </linearGradient>
        <linearGradient id="b-sac" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F59E0B" /><stop offset="1" stopColor="#FCD34D" />
        </linearGradient>
        {produits.map((p, i) => (
          <linearGradient id={`b-p${i}`} key={i} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={p.a} /><stop offset="1" stopColor={p.b} />
          </linearGradient>
        ))}
        <filter id="b-ombre" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dy="6" stdDeviation="7" floodColor="#B45309" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect width="400" height="250" fill="url(#b-fond)" />

      {/* Fenêtre de la boutique */}
      <g filter="url(#b-ombre)">
        <rect x="26" y="30" width="264" height="178" rx="10" fill="#fff" />
      </g>
      <path d="M26 40a10 10 0 0 1 10-10h244a10 10 0 0 1 10 10v6H26z" fill="#F1F4FA" />
      <circle cx="38" cy="38" r="2.5" fill="#CBD5E8" />
      <circle cx="47" cy="38" r="2.5" fill="#CBD5E8" />
      <circle cx="56" cy="38" r="2.5" fill="#CBD5E8" />
      <text x="40" y="66" fontSize="10" fontWeight="800" fill="#0F1B33">Maison Éclat</text>
      <rect x="226" y="55" width="52" height="15" rx="7.5" fill="#1D4ED8" />
      <text x="252" y="65" fontSize="6.5" fontWeight="700" fill="#fff" textAnchor="middle">Panier · 2</text>
      <rect x="40" y="76" width="30" height="10" rx="5" fill="#1D4ED8" />
      <rect x="76" y="76" width="30" height="10" rx="5" fill="#EEF2FA" />
      <rect x="112" y="76" width="30" height="10" rx="5" fill="#EEF2FA" />
      {produits.map((p, i) => (
        <g key={p.x}>
          <rect x={p.x} y="94" width="72" height="54" rx="6" fill={`url(#b-p${i})`} />
          <rect x={p.x} y="154" width="48" height="5" rx="2.5" fill="#DCE4F2" />
          <text x={p.x} y="174" fontSize="9" fontWeight="800" fill="#0F1B33">{p.prix}</text>
          <rect x={p.x} y="182" width="72" height="14" rx="7" fill="none" stroke="#1D4ED8" strokeWidth="1.2" />
          <text x={p.x + 36} y="191.6" fontSize="6.5" fontWeight="700" fill="#1D4ED8" textAnchor="middle">Ajouter</text>
        </g>
      ))}

      {/* Téléphone */}
      <g filter="url(#b-ombre)">
        <rect x="268" y="16" width="106" height="218" rx="18" fill="#0B0C10" />
      </g>
      <rect x="274" y="24" width="94" height="202" rx="13" fill="#fff" />
      <rect x="308" y="28" width="26" height="5" rx="2.5" fill="#0B0C10" />
      <rect x="280" y="42" width="82" height="80" rx="8" fill="url(#b-sac)" />
      <circle cx="348" cy="54" r="8" fill="#fff" />
      <text x="348" y="57.5" fontSize="9" fill="#E11D48" textAnchor="middle">♥</text>
      <text x="282" y="138" fontSize="9" fontWeight="800" fill="#0F1B33">Sac en cuir</text>
      <text x="282" y="155" fontSize="13" fontWeight="800" fill="#1D4ED8">49 €</text>
      <text x="282" y="168" fontSize="8" fill="#F59E0B">★★★★★</text>
      <rect x="282" y="174" width="60" height="4" rx="2" fill="#DCE4F2" />
      <rect x="282" y="182" width="42" height="4" rx="2" fill="#DCE4F2" />
      <rect x="282" y="194" width="78" height="22" rx="8" fill="#1D4ED8" />
      <text x="321" y="208" fontSize="7.5" fontWeight="700" fill="#fff" textAnchor="middle">Ajouter au panier</text>
      <rect x="313" y="221" width="16" height="2.5" rx="1.2" fill="#CBD5E8" />
    </svg>
  );
}

function Application() {
  const barres = [24, 38, 30, 52, 40, 60, 46];
  const rdv = [
    { y: 146, c: '#1D4ED8', h: '09:30' },
    { y: 166, c: '#16A34A', h: '11:00' },
    { y: 186, c: '#F59E0B', h: '14:30' },
  ];
  return (
    <svg viewBox="0 0 400 250" role="img" aria-label="Maquette d’une application web">
      <defs>
        <linearGradient id="a-fond" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E4E8FF" /><stop offset="1" stopColor="#F6F7FF" />
        </linearGradient>
        <linearGradient id="a-barre" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#60A5FA" /><stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <filter id="a-ombre" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dy="6" stdDeviation="7" floodColor="#312E81" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect width="400" height="250" fill="url(#a-fond)" />

      {/* Fenêtre de l'application */}
      <g filter="url(#a-ombre)">
        <rect x="24" y="24" width="352" height="204" rx="10" fill="#fff" />
      </g>
      <rect x="24" y="24" width="62" height="204" rx="10" fill="#0F1B33" />
      <rect x="60" y="24" width="26" height="204" fill="#0F1B33" />
      <circle cx="42" cy="44" r="7" fill="#3B82F6" />
      <rect x="32" y="64" width="46" height="18" rx="6" fill="#1D4ED8" />
      <rect x="38" y="70" width="34" height="6" rx="3" fill="#fff" opacity="0.9" />
      {[96, 112, 128].map((y) => (
        <rect key={y} x="38" y={y} width="34" height="6" rx="3" fill="#fff" opacity="0.3" />
      ))}

      <text x="98" y="50" fontSize="11" fontWeight="800" fill="#0F1B33">Tableau de bord</text>
      <circle cx="352" cy="52" r="8" fill="#CBD5E8" />

      {[
        { x: 98, c: '#1D4ED8', n: '128', l: 'Réservations' },
        { x: 190, c: '#16A34A', n: '42', l: 'Nouveaux clients' },
        { x: 282, c: '#F59E0B', n: '96 %', l: 'Satisfaction' },
      ].map((s) => (
        <g key={s.x}>
          <rect x={s.x} y="64" width="84" height="42" rx="7" fill="#fff" stroke="#E3E9F4" />
          <rect x={s.x + 1} y="64" width="82" height="3.5" rx="1.7" fill={s.c} />
          <text x={s.x + 9} y="88" fontSize="15" fontWeight="800" fill="#0F1B33">{s.n}</text>
          <text x={s.x + 9} y="99" fontSize="6.5" fill="#64748B">{s.l}</text>
        </g>
      ))}

      <rect x="98" y="114" width="170" height="104" rx="8" fill="#fff" stroke="#E3E9F4" />
      <text x="108" y="130" fontSize="7.5" fontWeight="700" fill="#0F1B33">Activité de la semaine</text>
      {barres.map((h, i) => (
        <rect key={i} x={108 + i * 23} y={208 - h} width="15" height={h} rx="3" fill="url(#a-barre)" />
      ))}

      <rect x="278" y="114" width="88" height="104" rx="8" fill="#fff" stroke="#E3E9F4" />
      <text x="287" y="130" fontSize="7.5" fontWeight="700" fill="#0F1B33">Rendez-vous</text>
      {rdv.map((r) => (
        <g key={r.y}>
          <circle cx="293" cy={r.y} r="6" fill={r.c} opacity="0.9" />
          <text x="304" y={r.y - 1} fontSize="6.5" fontWeight="700" fill="#0F1B33">{r.h}</text>
          <rect x="304" y={r.y + 3} width="50" height="4" rx="2" fill="#DCE4F2" />
        </g>
      ))}

      {/* Notification flottante */}
      <g filter="url(#a-ombre)">
        <rect x="236" y="6" width="146" height="32" rx="9" fill="#fff" />
      </g>
      <circle cx="253" cy="22" r="8" fill="#16A34A" />
      <path d="M248.8 22.2l3 3 4.8-5.6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="267" y="20" fontSize="7" fontWeight="700" fill="#0F1B33">Nouvelle réservation</text>
      <text x="267" y="30" fontSize="6" fill="#64748B">Aujourd’hui, 14:30</text>
    </svg>
  );
}

export default function ApercuService({ type }) {
  return (
    <div className="apercu-service" aria-hidden="true">
      {type === 'boutique' ? <Boutique /> : type === 'app' ? <Application /> : <Vitrine />}
    </div>
  );
}