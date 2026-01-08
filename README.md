# Portfolio — Yamen Najeh

Portfolio professionnel construit avec Next.js (App Router), TypeScript et Tailwind CSS.
Le site présente mes projets (routes dynamiques), mon parcours et un formulaire de contact.

## Démo
- URL Vercel : (ajoutez votre lien après déploiement)

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- API Route Next.js (contact)

## Pages
- `/` : Accueil
- `/about` : À propos
- `/projects` : Liste des projets (données dynamiques)
- `/projects/[slug]` : Détails projet (route dynamique + generateStaticParams)
- `/contact` : Formulaire + validation + API Route
- `POST /api/contact` : Endpoint contact (log serveur)

## Données
Les projets sont définis dans :
- `src/data/projects.ts`

## Lancer en local
```bash
npm install
npm run dev
