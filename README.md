# Birva Oza — Portfolio Website

A modern, animated personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

**Live:** [birvaoza-portfolio.vercel.app](https://birvaoza-portfolio.vercel.app)

## Features

- Light theme with smooth scroll-based background color transitions
- Letter-by-letter name animation in the hero section
- Floating particles and animated gradient effects
- Counter animation on impact metrics (numbers count up on scroll)
- Active section highlighting in the navbar
- Expandable project cards with detailed case studies
- Fully responsive (mobile, tablet, desktop)
- Publication links to IEEE papers
- Copy-to-clipboard for email

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (static export)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static `out/` folder ready for deployment.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Metadata & SEO
│   ├── page.tsx          # Main page with scroll color logic
│   └── globals.css       # Global styles & animations
├── components/
│   ├── sections/         # Page sections (Hero, About, etc.)
│   └── ui/               # Reusable components
├── data/
│   └── portfolio.ts      # All portfolio content (easy to edit)
└── lib/
    └── utils.ts          # Utility functions
```

## How to Update Content

All text, projects, skills, and experience data lives in one file:

```
src/data/portfolio.ts
```

Edit that file to update your portfolio content. No need to touch component code for content changes.

## Deployment

This project is connected to Vercel via GitHub. To deploy changes:

```bash
git add .
git commit -m "your change description"
git push
```

Vercel auto-deploys within 30-60 seconds after every push.

## Author

**Birva Oza**
- LinkedIn: [linkedin.com/in/birvaoza01](https://linkedin.com/in/birvaoza01)
- GitHub: [github.com/birvaoza](https://github.com/birvaoza)
- Email: birvaoza07@gmail.com
