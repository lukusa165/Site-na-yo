export const BRAND = 'kotonga-site';
export const EMAIL = 'ondev@gmail.com';
export const WHATSAPP = '2430831511015'; // format international sans + ni espaces, ex : 33612345678
export const ADMIN_PATH = '/admin-na-yo-DON'; // à changer

export const DEVISE = '$';

export const SERVICES = [
  {
    id: 'vitrine',
    titre: 'Site vitrine',
    prix: 49,
    apartirDe: true,
    description:
      'Votre entreprise en 3 à 5 pages, adaptées au mobile et visibles sur Google.',
    points: ['Design sur mesure', 'Formulaire de contact', 'Référencement de base'],
  },
  {
    id: 'ecommerce',
    titre: 'Site e-commerce',
    prix: 70,
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
    prix: 60,
    apartirDe: true,
    description: 'Modernisez votre site existant : design, vitesse et affichage mobile.',
    points: ['Audit de l’existant', 'Nouveau design', 'Reprise des contenus'],
  },
  {
    id: 'maintenance',
    titre: 'Maintenance et hébergement',
    prix: 15,
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
 ];