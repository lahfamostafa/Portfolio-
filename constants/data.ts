export const NAV_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/mostafalahfa" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mostafalahfa" },
  { label: "Twitter", href: "https://twitter.com/mostafalahfa" },
];

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces modernes, performantes et animées.",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion / GSAP", level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs robustes et architectures scalables.",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PHP / Laravel", level: 90 },
      { name: "REST / GraphQL", level: 85 },
      { name: "Authentification & sécurité", level: 82 },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Modélisation et optimisation des données.",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 75 },
      { name: "Design de schémas", level: 88 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Déploiement, conteneurisation et monitoring.",
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 85 },
    ],
  },
];

export const TECHNOLOGIES = [
  "HTML", "CSS", "JavaScript", "PHP", "Laravel",
  "React", "Tailwind", "Bootstrap", "Node.js",
  "MySQL", "Git", "GitHub", "Linux", "AWS",
  "Figma", "Postman",
];

export const EXPERIENCE = [
  {
    year: "2024 — Présent",
    role: "Développeur Full Stack Senior",
    company: "Freelance",
    description:
      "Conception et développement d'applications web sur mesure pour des clients internationaux, de l'architecture backend à l'interface finale.",
  },
  {
    year: "2022 — 2024",
    role: "Développeur Full Stack",
    company: "Agence Digitale",
    description:
      "Développement de plateformes e-commerce et d'outils internes avec Laravel, React et des architectures API REST.",
  },
  {
    year: "2020 — 2022",
    role: "Développeur Web",
    company: "Studio Web",
    description:
      "Intégration front-end avancée et développement de sites vitrines et applications métier.",
  },
  {
    year: "2019 — 2020",
    role: "Développeur Junior",
    company: "Premiers projets",
    description:
      "Apprentissage intensif du développement web moderne, premiers projets clients et contributions open-source.",
  },
];

export const SERVICES = [
  {
    title: "Développement Web",
    description: "Sites et applications web rapides, sécurisés et évolutifs.",
  },
  {
    title: "Applications Laravel",
    description: "Backends robustes et applications métier sur mesure.",
  },
  {
    title: "REST API",
    description: "Conception et documentation d'APIs claires et performantes.",
  },
  {
    title: "UI/UX Design",
    description: "Interfaces soignées, pensées pour l'expérience utilisateur.",
  },
  {
    title: "Optimisation",
    description: "Amélioration des performances et du score Lighthouse.",
  },
  {
    title: "SEO",
    description: "Structuration technique pour un meilleur référencement.",
  },
  {
    title: "Maintenance",
    description: "Suivi, corrections et évolutions continues des projets.",
  },
  {
    title: "Consulting",
    description: "Accompagnement technique et choix d'architecture.",
  },
];

export const PROJECTS = [
  {
    title: "Nova Commerce",
    description: "Plateforme e-commerce headless avec paiements et gestion de stock en temps réel.",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Tailwind"],
    github: "https://github.com/mostafalahfa",
    demo: "#",
  },
  {
    title: "Pulse Dashboard",
    description: "Tableau de bord analytique temps réel avec visualisation de données avancée.",
    tech: ["React", "Node.js", "Redis", "Chart.js"],
    github: "https://github.com/mostafalahfa",
    demo: "#",
  },
  {
    title: "Orbit CRM",
    description: "Outil de gestion de la relation client pensé pour les petites équipes.",
    tech: ["Laravel", "MySQL", "Alpine.js"],
    github: "https://github.com/mostafalahfa",
    demo: "#",
  },
  {
    title: "Aether Booking",
    description: "Système de réservation modulaire avec API REST publique.",
    tech: ["Next.js", "Express", "PostgreSQL"],
    github: "https://github.com/mostafalahfa",
    demo: "#",
  },
];

export const GITHUB_USERNAME = "mostafalahfa";
