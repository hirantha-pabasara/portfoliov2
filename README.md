# Hirantha Portfolio

A personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS v4.

The project follows a warm, friendly, minimal design direction defined in `DESIGN.md`, and includes reusable layout/components for scaling into a CMS-backed portfolio.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Lucide React icons
- next/font (Plus Jakarta Sans + Work Sans)

## Current Features

- Sticky top navigation with responsive mobile menu
- Hero section with profile image and call-to-action buttons
- Skills page with categorized toolkit cards
- Shared global design tokens in `src/app/globals.css`
- Layout shell with global Navbar and Footer
- Route placeholders for About, Projects, Project Detail, and Contact

## Project Structure

```text
.
├── DESIGN.md
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── projects/[slug]/page.tsx
│   │   └── skills/page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Journey.tsx
│   │   │   ├── SkillsGrid.tsx
│   │   │   └── SoftSkills.tsx
│   │   └── ui
│   │       └── Button.tsx
│   ├── sanity
│   │   ├── client.ts
│   │   ├── queries.ts
│   │   └── schemas
│   └── types
└── package.json
```

## Routes

- `/` Home page (Hero)
- `/about` About placeholder
- `/projects` Projects placeholder
- `/projects/[slug]` Project detail placeholder
- `/skills` Skills grid
- `/contact` Contact placeholder

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` Start local development server
- `npm run build` Create production build
- `npm run start` Start production server
- `npm run lint` Run ESLint

## Design System Notes

- Core design palette, typography, spacing, and component behavior are documented in `DESIGN.md`.
- Global tokens and typography utility classes are defined in `src/app/globals.css`.
- Navbar height is controlled with Tailwind classes in `src/components/layout/Navbar.tsx` and linked viewport spacing token `--navbar-height` in `src/app/globals.css`.

## Images

Remote image loading from Unsplash is enabled in `next.config.ts` via `images.remotePatterns`.

## CMS Integration Status

Sanity directories and schema files are present, but CMS client/query files are currently placeholders:

- `src/sanity/client.ts` (empty)
- `src/sanity/queries.ts` (empty)

This means pages are currently rendered from local component content only.

## Next Improvements

- Replace route placeholders with full page content
- Connect Sanity client and queries
- Wire project detail route to real project data
- Add SEO metadata per page
- Add tests for key components and routing behavior

## License

This project is intended for personal portfolio use.
