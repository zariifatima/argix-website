# Argix website (React + Vite, static, GitHub Pages)

Content source of truth: https://argix.net (audited and migrated October 2026). Page copy lives in `src/content/*.json`
(12 service pages, 7 industry pages, privacy policy), `src/content/blog/*.json` (articles) and `src/data/siteData.js`
(navigation, hubs, certifications, FAQ, stats). Do not add claims that are not on the live site.

## Run
    npm install
    npm run dev
    npm run build    # builds, then prerenders one HTML file per URL + sitemap.xml + noindex 404.html

## URLs
The URL structure matches the current site (`/about/`, `/contact/`, `/certifications/`, `/services/`, `/industries/`,
`/custom-software/` ... `/blog/`, `/blog/soc-2-type-1-vs-type-2/`, `/privacy/`). Each is a real file in `dist/` so GitHub Pages
returns 200 with its own title, description, canonical and Open Graph tags. Unknown URLs get `404.html` (noindex, with a home button).
Adding a page: add a JSON file in `src/content/`; routes, sitemap and meta are generated.

## Deploy (not done yet)
Settings > Pages > Source: GitHub Actions; push to `main`. `public/CNAME` already contains `argix.net`; do not point DNS until the
checklist below is complete. For a `github.io/<repo>/` preview URL, build with `VITE_BASE=/<repo>/`.

## Before pointing argix.net at this site
1. Supply real brand assets: see `docs/ASSETS-NEEDED.txt` (logo, OG image, favicon, client logos, certification badges).
   Put the logo at `public/assets/logo-white.svg` and it is used automatically (navbar + footer). Until then a plain text wordmark shows.
2. Connect a form service. The contact form has the same fields as the live form, but a static site cannot send mail. Until
   `VITE_FORM_ENDPOINT` is set, the form only opens an email draft to info@argix.net and says so on the page.
   The privacy policy currently says the form sends nothing to Argix servers; update it when a form service is connected.
3. Analytics (optional): set `VITE_GA_ID` (G-XXXXXXXXXX). Google Analytics then loads only after a visitor accepts in Cookie settings.
   Without an ID nothing is loaded, and the privacy policy says so. If you enable a form service or analytics, update `src/content/privacy.json` first (original live wording: `docs/PRIVACY-LIVE-TEXT.md`).
4. Decide about the blog: the live site has one article; it is migrated.
5. Review `.env.example` for optional settings. Never put secret API keys in frontend code: everything `VITE_*` is public.

## AI demo
Sample answers only, labelled as such. To connect a real service later, set `VITE_AI_API_URL` to your own server endpoint.
