# Anish A. Kale — Portfolio

Personal portfolio website for Anish A. Kale, Data Scientist & Machine Learning Engineer.

**Live site:** https://www.anishkale.dev/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Package manager | pnpm (monorepo workspace) |
| Hosting | Replit (editing) → Vercel (production) |
| Analytics | Google Analytics 4 (`G-2BQH2FN569`) |

The site is fully static — no backend, no database, no authentication.

---

## Project Structure

```
artifacts/portfolio/
├── index.html                  # SEO metadata, OG tags, GA4 script, JSON-LD schema
├── public/
│   ├── og-image.png            # 1200×630 Open Graph preview image
│   ├── og-image.svg            # Source SVG for the OG image
│   ├── favicon.svg             # Browser tab icon
│   ├── sitemap.xml             # XML sitemap (all section anchors)
│   ├── robots.txt              # Crawler rules + sitemap pointer
│   ├── images/                 # Personal photos (headshot.jpg, outdoor.png, etc.)
│   └── logos/                  # Company/institution logos used in Experience section
└── src/
    ├── data/
    │   └── portfolio.ts        # ALL portfolio content lives here — edit this file
    ├── components/             # One component per section (About, Skills, Experience…)
    ├── pages/
    │   └── Home.tsx            # Root page — assembles all section components in order
    └── index.css               # Global styles (minimal — Tailwind handles most styling)
```

---

## Running Locally

This project lives inside a pnpm monorepo. From the repository root:

```bash
# Install dependencies
pnpm install

# Start the portfolio dev server
pnpm --filter @workspace/portfolio run dev
```

The dev server reads the `PORT` environment variable automatically (set by Replit workflows).
To run locally outside Replit, set a port manually:

```bash
PORT=5173 pnpm --filter @workspace/portfolio run dev
```

Then open `http://localhost:5173` in your browser.

---

## Building for Production

```bash
pnpm --filter @workspace/portfolio run build
```

Output goes to `artifacts/portfolio/dist/`. Vercel runs this command automatically on every deploy — you do not need to run it manually.

---

## Deployment Flow

```
Edit in Replit
     ↓
Push to GitHub  (git add . → git commit → git push)
     ↓
Vercel detects push → runs build → deploys automatically
     ↓
Live at https://www.anishkale.dev/
```

Vercel is connected to the GitHub repository and deploys the `main` branch on every push. No manual Vercel steps are needed after the initial setup.

**Custom domain:** `https://www.anishkale.dev/` is configured in Vercel's domain settings and pointed at Vercel's nameservers via the domain registrar.

---

## Updating Portfolio Content

**All content is in one file:**

```
artifacts/portfolio/src/data/portfolio.ts
```

Edit that file and push to GitHub. Vercel will redeploy automatically.

Sections and their data keys:

| Section | Key in `portfolio.ts` |
|---|---|
| Hero / name / tagline | `personalInfo` |
| About paragraphs | `about` |
| Education | `education` |
| Skills grid | `skills` |
| Experience | `experience` |
| Projects | `projects` |
| Publications | `publications` |
| Certifications | `certifications` |
| Beyond Work | `beyondWork` |
| Contact tagline | `contact` |

---

## SEO & Open Graph Metadata

All SEO tags live in `artifacts/portfolio/index.html`:

- `<title>` — browser tab and Google search title
- `<meta name="description">` — Google search snippet
- `<link rel="canonical">` — canonical URL (always `https://www.anishkale.dev/`)
- `og:*` tags — Facebook, iMessage, LinkedIn link previews
- `twitter:*` tags — Twitter/X card previews
- `<script type="application/ld+json">` — Google rich results (Person schema)

The Open Graph image is at `public/og-image.png` (1200×630px).
Its source SVG is `public/og-image.svg` — edit the SVG and regenerate the PNG if the image needs updating.

---

## Images & Assets

| Asset | Location |
|---|---|
| Personal photos | `artifacts/portfolio/public/images/` |
| Company / institution logos | `artifacts/portfolio/public/logos/` |
| OG preview image | `artifacts/portfolio/public/og-image.png` |
| OG image source | `artifacts/portfolio/public/og-image.svg` |
| Favicon | `artifacts/portfolio/public/favicon.svg` |
