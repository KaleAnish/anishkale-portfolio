# Portfolio Maintenance Guide

Quick reference for common updates to the Anish Kale portfolio site.
All changes follow the same pattern: **edit a file → push to GitHub → Vercel redeploys automatically.**

---

## How to Push Changes to GitHub

```bash
git add .
git commit -m "Brief description of what changed"
git push
```

Vercel picks up the push within ~30 seconds and deploys to https://www.anishkale.dev/ automatically.

---

## How Vercel Auto-Deployment Works

1. Vercel is connected to the GitHub repository (main branch).
2. Every push to `main` triggers a new build: `pnpm --filter @workspace/portfolio run build`.
3. The built output (`artifacts/portfolio/dist/`) is deployed globally via Vercel's CDN.
4. The custom domain `https://www.anishkale.dev/` always points to the latest successful build.
5. If a build fails, Vercel keeps the previous deployment live — nothing breaks.

To check deployment status: log in to vercel.com → your project → "Deployments" tab.

---

## How to Update Resume Links

**File:** `artifacts/portfolio/src/data/portfolio.ts`

Find the `personalInfo` block near the top:

```ts
resumeDataML: "https://drive.google.com/...",
resumeFinConsulting: "https://drive.google.com/...",
```

Replace the Google Drive URLs with your new links. Make sure sharing is set to "Anyone with the link."

---

## How to Add or Edit a Project

**File:** `artifacts/portfolio/src/data/portfolio.ts`

Find the `projects` array. Each project follows this shape:

```ts
{
  title: "Your Project Title",
  description: "One or two sentence summary.",
  tech: ["Python", "PyTorch", "..."],
  impact: "Key metric or outcome.",
  links: { github: "https://github.com/KaleAnish/your-repo" },
  // Set github: null if the repo is private or unavailable
},
```

- To **add** a project: paste a new object at the top of the array (shown first on site).
- To **edit** a project: find its `title` and update the fields.
- To **remove** a project: delete the entire object including its surrounding `{ }` and trailing comma.

---

## How to Update SEO Metadata

**File:** `artifacts/portfolio/index.html`

Key tags to update:

| Tag | What it controls |
|---|---|
| `<title>` | Browser tab title and Google search headline |
| `<meta name="description">` | Google search result snippet |
| `<link rel="canonical">` | Canonical URL (keep as `https://www.anishkale.dev/`) |
| `og:title` | Title shown in iMessage / LinkedIn / Facebook link previews |
| `og:description` | Description in social link previews |
| `og:url` | Canonical URL in OG metadata |
| `twitter:title` | Title on Twitter/X cards |
| `twitter:description` | Description on Twitter/X cards |
| JSON-LD `description` | Google rich result description |

Never change `og:url` or `canonical` away from `https://www.anishkale.dev/` — it tells search engines where the authoritative version of the site lives.

---

## How to Update the Open Graph Image

The image shown when sharing the site on iMessage, LinkedIn, Twitter, etc.

**Step 1 — Edit the source SVG:**

```
artifacts/portfolio/public/og-image.svg
```

The SVG is hand-authored with standard SVG elements. Edit text content, colors, or layout as needed.

**Step 2 — Regenerate the PNG** (requires ImageMagick):

```bash
magick artifacts/portfolio/public/og-image.svg artifacts/portfolio/public/og-image.png
```

Target dimensions: **1200×630px**. Verify with:

```bash
identify artifacts/portfolio/public/og-image.png
```

**Step 3 — Push to GitHub.** Vercel deploys the new PNG automatically.

> Note: iMessage and LinkedIn cache OG images aggressively. After deploying, previews may take a few hours to refresh. Testing with a new message thread or LinkedIn's Post Inspector (linkedin.com/post-inspector/) forces a refresh.

---

## How to Add or Edit a Certification

**File:** `artifacts/portfolio/src/data/portfolio.ts`

Find the `certifications` array:

```ts
{
  title: "Certification Name",
  issuer: "Issuing Organization",
  issued: "MM/YYYY",
  expiry: "MM/YYYY",     // or null if no expiry
  credentialId: "...",   // or null if not applicable
  link: "https://...",   // or null if no verify URL
},
```

---

## How to Update Contact Information

**File:** `artifacts/portfolio/src/data/portfolio.ts`

Find `personalInfo` at the top of the file:

```ts
email: "your@email.com",
linkedin: "https://www.linkedin.com/in/...",
github: "https://github.com/...",
```

The contact tagline (shown in the "Let's Connect" section) is under:

```ts
contact: {
  tagline: "Open to ...",
},
```

---

## Common Troubleshooting

**Site not updating after a push?**
- Check Vercel dashboard → Deployments tab for build errors.
- Most common cause: a syntax error in `portfolio.ts`. Run `pnpm --filter @workspace/portfolio run build` locally to catch errors before pushing.

**OG image not refreshing on iMessage?**
- Apple caches link previews. Send the link in a new iMessage thread or wait a few hours.
- LinkedIn: use https://www.linkedin.com/post-inspector/ to force a re-scrape.
- Facebook: use https://developers.facebook.com/tools/debug/ to clear the cache.

**Resume link not working?**
- Verify the Google Drive file sharing is set to "Anyone with the link can view."
- Open the link in an incognito window to confirm.

**Logo not showing in Experience section?**
- Check the file exists in `artifacts/portfolio/public/logos/`.
- Confirm the `logo` field in `portfolio.ts` matches the exact filename (case-sensitive).
- If the logo has a dark background, set `logoDark: true` in the experience entry — this wraps it in a dark container.

**Analytics not recording?**
- GA4 Measurement ID: `G-2BQH2FN569`
- Open the live site, then check Google Analytics → Reports → Realtime to confirm hits are coming in.
- GA4 does not track localhost traffic by default, so test on the live deployed URL.
