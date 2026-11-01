export const BRAND = 'site-na-yo';
export const EMAIL = 'ondev@gmail.com';
export const WHATSAPP = '2430831511015'; // format international sans + ni espaces, ex : 33612345678
export const ADMIN_PATH = '/admin-na-yo-DON'; // à changer

export const DEVISE = '€';

export const SERVICES = [
  {
    id: 'vitrine',
    titre: 'Site vitrine',
    prix: 490,
    apartirDe: true,
    description:
      'Votre entreprise en 3 à 5 pages, adaptées au mobile et visibles sur Google.',
    points: ['Design sur mesure', 'Formulaire de contact', 'Référencement de base'],
  },
  {
    id: 'ecommerce',
    titre: 'Site e-commerce',
    prix: 1290,
    apartirDe: true,
    description: 'Une boutique en ligne avec catalogue, panier et paiement sécurisé.',
    points: ['Catalogue produits', 'Paiement en ligne', 'Gestion des commandes'],
  },
  {
    id: 'sur-mesure',
    titre: 'Application web sur mesure',
    prix: null,
    devis: true,
    description:
      'Réservation, espace client, tableau de bord : l’outil précis dont votre activité a besoin.',
    points: ['Analyse du besoin', 'Développement dédié', 'Formation à l’usage'],
  },
  {
    id: 'refonte',
    titre: 'Refonte de site',
    prix: 690,
    apartirDe: true,
    description: 'Modernisez votre site existant : design, vitesse et affichage mobile.',
    points: ['Audit de l’existant', 'Nouveau design', 'Reprise des contenus'],
  },
  {
    id: 'maintenance',
    titre: 'Maintenance et hébergement',
    prix: 29,
    apartirDe: false,
    par: '/mois',
    description:
      'Mises à jour, sauvegardes, sécurité et hébergement : votre site reste rapide et protégé.',
    points: ['Hébergement inclus', 'Sauvegardes', 'Support par email'],
  },
];

export function libellePrix(s) {
  if (s.devis) return 'Sur devis';
  return `${s.apartirDe ? 'À partir de ' : ''}${s.prix} ${DEVISE}${s.par || ''}`;
}

export const PROJETS = [
  {
    nom: 'Cabinet de conseil',
    type: 'Site vitrine',
    couleur: '#0B5C55',
    service: 'vitrine',
    apercu: 'vitrine',
    description: 'Un site clair qui présente l’activité, les compétences et permet de prendre contact.',
    // image: '/realisations/cabinet.png',  // à ajouter quand tu as une vraie capture
  },
  {
    nom: 'Boutique de mode',
    type: 'E-commerce',
    couleur: '#C77B12',
    service: 'ecommerce',
    apercu: 'boutique',
    description: 'Une boutique en ligne avec catalogue, panier et paiement sécurisé.',
  },
  {
    nom: 'Réseau de coiffeurs',
    type: 'Application de réservation',
    couleur: '#2B3A67',
    service: 'sur-mesure',
    apercu: 'app',
    description: 'Une application pour réserver en ligne et suivre l’activité de chaque salon.',
  },
];