export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  image: string; // chemin public/
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "bento-grid-project",
    title: "Bento Grid Project",
    subtitle: "Interface responsive en React (Vite) + Tailwind",
    description:
      "Réalisation d’une mise en page moderne de type “bento grid”, responsive, avec une attention portée à la structure UI, aux composants et à la cohérence visuelle.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repoUrl: "https://github.com/ennajehyamen/Bento-Grid-Project",
    image: "/projects/bento-grid.png",
    highlights: ["UI responsive", "Structuration par composants", "Design moderne"]
  },
  {
    slug: "api-rest-php-mysql-jwt",
    title: "API RESTful PHP & MySQL",
    subtitle: "API sécurisée avec JWT",
    description:
      "Développement d’une API REST en PHP avec MySQL et authentification/autorisation via JWT. CRUD + contrôle d’accès (public / connecté / admin).",
    tech: ["PHP", "MySQL", "JWT", "REST"],
    repoUrl: "https://github.com/ennajehyamen/projet-final",
    image: "/projects/projet-final.png",
    highlights: ["Authentification JWT", "Rôles & autorisations", "CRUD complet"]
  },
  {
    slug: "tp1-api-locaux-equipements",
    title: "TP1 — API Gestion des Locaux & Équipements (Node/Express)",
    subtitle: "API backend de gestion pour un collège",
    description:
      "API Node.js/Express orientée gestion : locaux, équipements et ressources. Mise en avant de la structuration des routes, de la logique métier et de la validation des données.",
    tech: ["Node.js", "Express", "API REST", "Validation"],
    repoUrl:
      "https://github.com/ennajehyamen/Tp1--API-de-Gestion-des-Locaux-et-quipements-d-un-Coll-ge",
    image: "/projects/tp1-locaux.png",
    highlights: ["Architecture Express", "Routes REST", "Logique métier"]
  },
  {
    slug: "bibliotheque-laravel",
    title: "Bibliothèque (Laravel)",
    subtitle: "Application web Laravel (MVC)",
    description:
      "Projet Laravel orienté gestion (architecture MVC, routage, vues, base de données). Vitrine de compétences PHP framework et organisation applicative.",
    tech: ["Laravel", "PHP", "MVC", "MySQL"],
    repoUrl: "https://github.com/francistalbot/402.709-projet1-Bibliotheque",
    image: "/projects/bibliotheque.png",
    highlights: ["Architecture Laravel", "MVC", "Base de données"]
  },
  {
    slug: "nextjs-dashboard",
    title: "Next.js Dashboard",
    subtitle: "Projet Next.js (App Router) + Tailwind",
    description:
      "Dashboard construit avec Next.js (App Router). Objectif : maîtriser les conventions Next, l’architecture app/ et la mise en page d’une application moderne.",
    tech: ["Next.js", "TypeScript", "App Router", "Tailwind CSS"],
    repoUrl: "https://github.com/ennajehyamen/nextjs-dashboard",
    image: "/projects/nextjs-dashboard.png",
    highlights: ["Routage App Router", "Structure app/", "UI dashboard"]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
