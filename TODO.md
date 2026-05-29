# Gusse Gida - TODO

Stack: SvelteKit 5, Tailwind CSS v4, Drizzle ORM, SQLite (better-sqlite3), custom i18n (DE/EN/AR/TR)

## Now

**DB & Seed:**
- **[INFRA]** Run `bun run db:push` to generate and push Drizzle migration
- **[CONTENT]** Seed all 8 categories (Sirupe, Topping, Fruchtsaucen, Bar-Saucen, Dekor-Saucen, Pulvergetränke, Kräutertees, Tiefkühl)
- **[CONTENT]** Seed all 166 products from `produkte.md` with correct slugs and `image_path`s
- **[CONTENT]** Write seed script (`scripts/seed.ts`)
- **[CONTENT]** Rename images from `static/assets-original/` to clean paths (lowercase, kebab-case, without size suffix, e.g. `topping/beyaz-cikolata.jpg`)
- **[CONTENT]** Audit duplicates and failed downloads in `syrups/` (107 files, should be ~78)

**Core Routes:**
- **[FEATURE]** `/products` route - all categories as sections or tab filter, search/filter, `+page.server.ts` loads all products + categories
- **[FEATURE]** `/products/[category]` - product grid for category, i18n page title, 404 on unknown slug, navbar dropdown links here
- **[FEATURE]** Load homepage `CategoryGrid` data from DB (`+page.server.ts` on `/`)

## Soon

**i18n:**
- **[CONTENT]** Translate all remaining page content (DE/EN/AR/TR): /about full text, /contact form fields + error/success messages, /blog intro + CTA, /catalog description + download button, /quality full text
- **[FEATURE]** RTL: mirror navbar order and check footer column order for Arabic

**Pages:**
- **[FEATURE]** `/about` - replace hardcoded German text with i18n; add company timeline, product counts, production location (Cerkezkoy/Tekirdag), mission; use images from `general/gorsel2.jpg`, `gorsel3-1.jpg`, `Gorselv2.jpg`
- **[FEATURE]** `/contact` - form (Name, Email, Phone optional, Message), server action, email send or DB save, display contact details (address, 3 phone numbers, email), i18n success/error messages
- **[FEATURE]** `ProductCard` component - reusable card with image, name, category badge, hover zoom; for category and product overview pages

**SEO:**
- **[FEATURE]** `<svelte:head>` in `+layout.svelte` with default meta tags (title, description, OG)
- **[CONTENT]** Per-route `<title>` and `<meta name="description">` (i18n)
- **[CONTENT]** OG tags: `og:title`, `og:description`, `og:image`
- **[FEATURE]** Generate `sitemap.xml` (static routes + category routes)
- **[CONTENT]** Canonical URLs per locale

## Later

**Additional Pages:**
- **[FEATURE]** `/catalog` - PDF download button (Google Drive link), catalog cover preview, optional embedded PDF viewer, i18n
- **[FEATURE]** `/blog` - static recipes from `gussegida-referenz.md` as structured data (JSON or DB `recipes` table); recipe cards with title, ingredients, instructions, linked products; "Rezept einsenden" CTA
- **[FEATURE]** `/quality` - new route (old was `/kalite-politikamiz`), translated text (DE/EN/AR/TR), text-focused design
- **[FEATURE]** `/careers` - simple page with headline + contact email for applications, optional static job list

**Code Quality:**
- **[INFRA]** No `.env` needed (SQLite - DB is a file `gussegida.db`)
- **[DEBT]** `src/routes/blog/+page.svelte` is empty - add content or stub
- **[DEBT]** `src/routes/catalog/+page.svelte` is empty - add content
- **[FEATURE]** Error pages: `+error.svelte` for 404, 500
- **[FEATURE]** Loading states for DB queries (skeleton loader or spinner)

**Deployment:**
- **[DECISION]** Clarify hosting target (VPS, Fly.io - Vercel ruled out due to adapter-node)
- **[INFRA]** Write Dockerfile or systemd service (adapter-node is configured)
- **[INFRA]** CI/CD pipeline (GitHub Actions) for build + migrations
- **[INFRA]** Redirect `gussegida.com` to new site (currently redirects to `.com.tr`)

---

## Done

- ~~**[INFRA]** `categories` table: id, slug, name_de/en/ar/tr, sort_order, image_path~~
- ~~**[INFRA]** `products` table: id, category_id, slug, name_de/en/ar/tr, image_path~~
- ~~**[DEBT]** Remove stub `user` table from schema~~
- ~~**[INFRA]** Switch to SQLite: better-sqlite3 + drizzle-orm/better-sqlite3~~
- ~~**[FEATURE]** Turkish (tr) as fourth locale~~
- ~~**[DEBT]** Remove `$inspect(open)` from `LanguageSelector.svelte`~~
- ~~**[CONTENT]** Add Turkish flag and "Turkce" to LanguageSelector~~
- ~~**[CONTENT]** Homepage hero, feature sections, category titles in DE/EN/AR/TR~~
- ~~**[FEATURE]** `dir` attribute globally set via hook (RTL for Arabic)~~
- ~~**[FEATURE]** Mobile hamburger menu with all links + category list~~
- ~~**[FEATURE]** Products dropdown in desktop nav~~
- ~~**[FEATURE]** Active state logic (`$page.url.pathname`, exact match for `/`)~~
- ~~**[FEATURE]** Sticky navbar with backdrop-blur-sm and shadow-sm~~
- ~~**[FEATURE]** Full-bleed hero with overlay gradient, i18n headline, CTA buttons~~
- ~~**[FEATURE]** CategoryGrid: responsive grid (2 mobile, 4 desktop), category images, hover zoom~~
- ~~**[FEATURE]** FeatureSections: alternating image-text blocks (Sirupe, Limonaden, Kaffee), i18n, mobile stacking~~
- ~~**[DEBT]** Rename ProductList → CategoryGrid, ProductsLarge → FeatureSections~~
- ~~**[DEBT]** Replace `location.pathname` with `$page.url.pathname`~~
