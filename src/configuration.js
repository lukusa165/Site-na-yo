// ===== Informations générales =====
export const BRAND = 'Tosala-site';
export const EMAIL = 'ondev@gmail.com';
export const WHATSAPP = '243831511015'; // format international sans + ni espaces, ex : 243812345678
export const ADMIN_PATH = '/tolekaa'; // adresse secrète de l'admin
export const VILLE = 'Kinshasa';
export const DEVISE = '$';
export const DOMAINE = 15; // renouvellement annuel du nom de domaine

export const SECTEURS = ['Écoles', 'Hôpitaux', 'Entreprises'];

// ===== Services =====
// cadrage : position de la photo dans la carte ('center', 'center top', 'center bottom', 'center 20%'...)
export const SERVICES = [
  {
    id: 'vitrine', titre: 'Site vitrine', prix: 49, apartirDe: true,
    description: 'Présentez votre entreprise en 3 à 5 pages, adaptées au mobile et prêtes à être trouvées sur Google.',
    points: ['Design sur mesure', 'Formulaire de contact', 'Référencement de base'],
  },
  {
    id: 'ecommerce', titre: 'Site e-commerce', prix: 100, apartirDe: true,
    description: 'Une boutique en ligne avec catalogue, panier et paiement sécurisé.',
    points: ['Catalogue produits', 'Paiement en ligne', 'Gestion des commandes'],
  },
  {
    id: 'sur-mesure', titre: 'Application web sur mesure', prix: null, devis: true,
    cadrage: 'center top',
    description: 'Réservation, espace client, tableau de bord : une fonctionnalité précise pour votre activité.',
    points: ['Analyse du besoin', 'Développement dédié', 'Formation à l’usage'],
  },
  {
    id: 'refonte', titre: 'Refonte de site', prix: 30, apartirDe: true,
    description: 'Modernisez un site existant : design, vitesse et affichage mobile.',
    points: ['Audit de l’existant', 'Nouveau design', 'Reprise des contenus'],
  },
  {
    id: 'maintenance-3-mois', titre: 'Maintenance des 3 premiers mois', prix: 0, apartirDe: true, inclus: true,
    cadrage: 'center bottom',
    description: 'Après la livraison de votre site, nous assurons sa maintenance pendant les trois premiers mois.',
    points: ['Suivi de votre site après la livraison', 'Corrections si un problème apparaît', 'Nous restons joignables pendant ces trois mois'],
  },
  {
    id: 'maintenance', titre: 'Maintenance et hébergement', prix: 15, apartirDe: false, par: '/mois',
    description: 'Mises à jour, sauvegardes, sécurité et hébergement : votre site reste rapide et protégé.',
    points: ['Hébergement inclus', 'Sauvegardes', 'Support par email'],
  },
];

export function libellePrix(s) {
  if (s.devis) return 'Sur devis';
  return `${s.apartirDe ? 'À partir de ' : ''}${s.prix} ${DEVISE}${s.par || ''}`;
}

// ===== Yoka musala : délais et capacité =====
// Exemple de délai : '5 à 7 jours'. Laissez vide pour afficher « Précisé à la confirmation ».
export const DELAIS = {
  vitrine: '48 à 72 heures',
  ecommerce: '1 à 2 semaines',
  'sur-mesure': '1 à 2 mois',
  refonte: '48heures',
  'maintenance-3-mois': 'Dès la livraison de votre site',
  maintenance: '24heures',
};
export const CAPACITE = ''; // Exemple : 'Nous prenons 5 projets à la fois.'

// ===== Paiement =====
export const PAIEMENT = {
  moyens: ['M-PESA'],
  note: 'Vous payez une fois votre site validé. Nous vous indiquons alors comment envoyer le paiement.',
};

// ===== Comment ça se passe =====
export const PARCOURS = [
  { titre: 'Vous nous envoyez votre commande', texte: 'Remplissez le formulaire de commande sur le site.' },
  { titre: 'Nous vous écrivons', texte: 'Nous vous prévenons que votre commande est bien arrivée.' },
  { titre: 'Vous voyez votre site', texte: 'Après le délai convenu, nous vous envoyons un lien pour voir votre site et parler des modifications.' },
  { titre: 'Vous envoyez le paiement', texte: 'Une fois le site validé, vous nous envoyez le paiement.' },
  { titre: 'Nous le mettons en ligne', texte: 'Nous achetons votre nom de domaine et nous hébergeons votre site.' },
  { titre: 'Trois mois de maintenance', texte: 'Vous utilisez votre site pendant les trois premiers mois. Pendant ce temps, la maintenance est garantie par nous.' },
  { titre: 'Ensuite, la maintenance', texte: 'Après ces trois mois, la maintenance devient payante.' },
];
export const A_NOTER = `le nom de domaine doit être renouvelé chaque année (${DOMAINE} ${DEVISE} par an).`;

// ===== Réalisations =====
// Ajoutez ici seulement de vrais projets. Modèle :
// { nom: 'Nom du projet', type: 'Site vitrine', description: 'Une phrase.', lien: 'https://...', image: '/realisations/nom.png' }
export const PROJETS = [];