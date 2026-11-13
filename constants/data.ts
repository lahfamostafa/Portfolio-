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
  { label: "GitHub", href: "https://github.com/lahfamostafa" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mostafalahfa" },
  { label: "Instagram", href: "https://instagram.com/mostafa._.lh_48" },
];

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Technologies de développement frontend.",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Langages et frameworks backend.",
    skills: [
      { name: "Java" },
      { name: "C" },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Spring Boot", learning: true },
    ],
  },
  {
    id: "database",
    title: "Bases de données",
    description: "Systèmes de gestion de bases de données.",
    skills: ["MySQL", "PostgreSQL" ,"SQL Server"],
  },
  {
    id: "devops",
    title: "Outils & conception",
    description: "Outils de conception, de développement et d'infrastructure.",
    skills: ["UML", "AWS", "Linux", "Docker", "Postman", "Figma"],
  },
];

export const TECHNOLOGIES = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Spring Boot",
  "C",
  "MySQL",
  "PostgreSQL",
  "UML",
  "Tailwind CSS",
  "Bootstrap",
  "PHP",
  "Laravel",
  "AWS",
  "Linux",
  "Docker",
  "Postman",
  "Figma",
];

export const EXPERIENCE = [
  {
    year: "Mai — Juillet 2026",
    role: "Stagiaire Développeur",
    company: "Université Al Akhawayn — DSI",
    description:
      "Développement d’un système automatisé de génération de diplômes PDF à partir des données extraites des CIN par OCR. Intégration du traitement OCR avec un backend Laravel/MySQL via des API REST et contribution à l’optimisation des performances.",
    technologies: [
      "Laravel",
      "PHP",
      "Python",
      "OpenCV",
      "Tesseract",
      "MySQL",
      "REST API",
      "PDF",
      "Tailwind CSS",
    ],
  },
  {
    year: "Juillet 2024",
    role: "Stagiaire Développeur",
    company: "AXA Assurance",
    description:
      "Participation à la maintenance et au développement de modules internes. Collaboration avec l’équipe IT pour la mise à jour des bases de données et l’automatisation de tâches bureautiques. Développement d’une application visant à simplifier la navigation entre les différents sites utilisés par les usagers de la préfecture.",
    technologies: [
      "Développement web",
      "Bases de données",
      "Automatisation",
    ],
  },
];

export const SERVICES = [
  {
    title: "Développement Web Full Stack",
    description:
      "Création de sites et d’applications web fonctionnels, du frontend au backend.",
  },
  {
    title: "Développement Laravel",
    description:
      "Développement d’applications web avec Laravel, PHP et des bases de données relationnelles.",
  },
  {
    title: "Développement Java & Spring Boot",
    description:
      "Création de services backend et d’applications Java avec Spring Boot.",
  },
  {
    title: "Conception d’API REST",
    description:
      "Création d’API REST pour connecter les applications et gérer les échanges de données.",
  },
  {
    title: "Gestion de bases de données",
    description:
      "Conception de modèles de données et intégration avec PostgreSQL, MySQL ou SQLite.",
  },
  {
    title: "Interfaces Web Responsive",
    description:
      "Création d’interfaces adaptées aux ordinateurs, tablettes et smartphones avec des technologies web modernes.",
  },
  {
    title: "Automatisation de Documents",
    description:
      "Développement de solutions pour extraire des données et générer automatiquement des documents PDF.",
  },
  {
    title: "Intégration et Gestion de Projets",
    description:
      "Organisation du code, gestion des versions avec Git et intégration des différentes parties d’une application.",
  },

];

export const PROJECTS = [
  {
    title: "Easymatch",
    description: "Application web Laravel pour la réservation de terrains sportifs, la gestion des matchs et la communication entre joueurs et gestionnaires.",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Tailwind"],
    image: "Fil-rouge.png",
    github: "https://github.com/lahfamostafa/Fil-rouge",
    demo: "#",
  },
  {
    title: "OCR CIN Reader to Diploma Writer",
    description: "Un projet que tu as décrit dans nos échanges : extraction d’informations depuis une CIN et génération automatisée de diplômes PDF. Il pourra être présenté avec son architecture et les fonctionnalités réellement réalisées.",
    tech: ["Laravel", "OpenCV", "Tesseract", "MySQL", "API REST"],
    image: "Stage.png",
    github: "https://github.com/lahfamostafa/Stage",
  },
  {
    title: "Minerva",
    description: "Le dépôt public contient une application PHP avec des répertoires pour l’application, la configuration et la base de données. Je préfère vérifier sa fonction exacte avant de rédiger une description définitive.",
    tech: ["Laravel", "MySQL", "Alpine.js"],
    image: "Minerva.png",
    github: "https://github.com/lahfamostafa/Minerva",
  },
  {
    title: "EasyColoc",
    description: "Application web de gestion de colocations permettant de gérer les membres, les invitations, les dépenses communes et la répartition des soldes.",
    tech: ["Laravel", "PHP", "Blade", "Tailwind", "Alpine.js" , "SQLite"],
    image: "soutenance-croise-EasyColoc.png",
    github: "https://github.com/lahfamostafa/soutenance-croise-EasyColoc",
  },
];

export const GITHUB_USERNAME = "lahfamostafa";
