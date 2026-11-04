# Mostafa Lahfa — Portfolio

Portfolio Full-Stack premium construit avec Next.js 15, React 19, TypeScript,
Tailwind CSS 4, Framer Motion, GSAP, Lenis et React Three Fiber.

## Démarrage

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur `http://localhost:3000`.

```bash
npm run build   # build de production
npm run start   # lancer le build de production
```

## Structure du projet

```
app/                     # App Router (layout, page, styles globaux)
components/
  sections/               # Hero, About, Skills, Technologies, Experience,
                           # Services, Projects, GitHubStats, Contact, Footer
  ui/                      # Éléments réutilisables (TiltCard, MagneticButton,
                           # AuroraBackground, ParticlesCanvas, ScrollProgress)
  Nav.tsx, Loader.tsx, CustomCursor.tsx, SmoothScroll.tsx
constants/data.ts          # Contenu du site (textes, projets, expérience...)
hooks/                     # useLenis, useMousePosition
utils/cn.ts                # Helper de fusion de classes Tailwind
```

## Personnalisation

- **Contenu** : tout le texte (projets, expérience, services, compétences)
  se modifie dans `constants/data.ts`.
- **Palette** : les couleurs sont définies dans `app/globals.css` sous le
  bloc `@theme` (`--color-bg`, `--color-blue`, `--color-purple`, etc.).
- **Photo de profil** : remplacez le bloc "ML" dans `components/sections/Hero.tsx`
  par une balise `next/image` pointant vers `public/images/avatar.jpg`.
- **GitHub** : changez `GITHUB_USERNAME` dans `constants/data.ts` pour
  afficher vos propres statistiques dans la section GitHub.
- **Polices** : le projet référence `Clash Display` (titres) et `Inter`
  (texte courant). Ajoutez ces polices via `next/font` ou Google Fonts dans
  `app/layout.tsx` pour un rendu fidèle à la maquette — actuellement le
  projet retombe sur les polices système équivalentes.

## Notes techniques

- Le scroll fluide est géré par **Lenis** (`hooks/useLenis.ts`), synchronisé
  avec `requestAnimationFrame`.
- Le curseur personnalisé (`components/CustomCursor.tsx`) se désactive
  automatiquement sur les écrans tactiles.
- Le fond de particules de la Hero utilise **React Three Fiber**, chargé en
  dynamique (`ssr: false`) pour ne pas alourdir le rendu serveur.
- Les statistiques GitHub sont récupérées côté client via l'API publique
  GitHub (`api.github.com`), sans authentification — limitée à 60 requêtes/heure
  par IP par GitHub.
- Toutes les animations respectent `prefers-reduced-motion`.

## Déploiement

Le projet est prêt pour un déploiement sur Vercel :

```bash
vercel deploy
```
