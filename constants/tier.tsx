export type Tier = {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  onClick: () => void;
};

export const tiers: Tier[] = [
  {
    name: "Découverte",
    id: "tier-decouverte",
    href: "#",
    priceMonthly: "Gratuit",
    priceYearly: "Gratuit",
    description: "Parfait pour découvrir MedPilot",
    features: [
      "Jusqu'à 50 rédactions de CR",
      "5 conversations avec l'IA",
      "Accès aux fonctionnalités de base",
      "Support communautaire",
    ],
    featured: false,
    cta: "Démarrer",
    onClick: () => {},
  },
  {
    name: "RX-Pro",
    id: "tier-rx-pro",
    href: "#",
    priceMonthly: "70€",
    priceYearly: "700€",
    description: "Idéal pour les radiologues indépendants",
    features: [
      "Rédactions de CR illimitées",
      "Conversations IA illimitées",
      "Tous les modèles de CR",
      "Mode IA et Recco",
      "Support prioritaire 24/7",
      "Intégration PACS/RIS",
    ],
    featured: true,
    cta: "Démarrer",
    onClick: () => {},
  },
  {
    name: "RX-Entreprise",
    id: "tier-entreprise",
    href: "#",
    priceMonthly: "Nous contacter",
    priceYearly: "Nous contacter",
    description: "Pour les cliniques et hôpitaux",
    features: [
      "Tout de RX-Pro",
      "Utilisateurs illimités",
      "API personnalisée",
      "Déploiement sur site",
      "Formation sur mesure",
      "Support dédié",
      "Contrat SLA personnalisé",
    ],
    featured: false,
    cta: "Nous contacter",
    onClick: () => {},
  },
];