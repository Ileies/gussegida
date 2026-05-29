# Gusse Gıda - Website

Corporate website for **Gusse Gıda**, a Turkish manufacturer of coffee and cocktail syrups, fruit sauces, herbal teas, and related products. Built with SvelteKit 5, served as a Node.js process with a local SQLite database.

**Live domains:** [gussegida.com](https://gussegida.com) · [gussegida.com.tr](https://gussegida.com.tr)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [SvelteKit 5](https://kit.svelte.dev) (Runes) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + [shadcn-svelte](https://www.shadcn-svelte.com) |
| UI primitives | [bits-ui](https://bits-ui.com) |
| Database | SQLite via [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) |
| ORM | [Drizzle ORM](https://orm.drizzle.team) |
| Adapter | `@sveltejs/adapter-node` |
| i18n | Custom (JSON message files, `DE / EN / AR / TR`) |
| Runtime | [Bun](https://bun.sh) |

---

## Getting Started

**Prerequisites:** Bun ≥ 1.0

```bash
# Install dependencies
bun install

# Push the DB schema (creates / migrates gussegida.db)
bun run db:push

# Seed products and categories
bun run scripts/seed.ts

# Start dev server
bun run dev
```

The SQLite database file (`gussegida.db`) lives next to the process - no external database instance needed.

---

## Project Structure

```
src/
├── lib/
│   ├── db/          # Drizzle schema and client
│   ├── i18n/        # Translation helpers and type definitions
│   └── components/  # Shared UI components
├── routes/
│   ├── /            # Home - hero, category grid, feature sections
│   ├── products/    # All-products overview
│   ├── products/[category]/  # Category detail page
│   ├── about/
│   ├── catalog/     # PDF catalog download
│   ├── blog/        # Cocktail & recipe posts
│   ├── contact/
│   ├── quality/     # Quality policy
│   └── careers/
├── app.html
└── hooks.server.ts  # Locale detection, lang/dir injection

messages/            # i18n JSON files (de, en, ar, tr)
static/
└── assets-original/ # Raw product images (pre-cleanup)
scripts/
└── seed.ts          # DB seeder
```

---

## i18n

Four locales are supported: **German (de)**, **English (en)**, **Arabic (ar)**, and **Turkish (tr)**. Arabic triggers RTL layout via a `dir` attribute injected by the server hook.

Translation files live under `messages/<locale>.json`. The active locale is resolved server-side and passed through the layout.

---

## Database

Schema is defined in `src/lib/db/schema.ts` using Drizzle. Two main tables:

- **`categories`** - `id`, `slug`, `name_de/en/ar/tr`, `sort_order`, `image_path`
- **`products`** - `id`, `category_id`, `slug`, `name_de/en/ar/tr`, `image_path`

The catalog spans **209 product variants** across 8 categories:

| Category | Count |
|---|---|
| Şuruplar (Syrups) | 78 |
| Meyveli Soslar (Fruit Sauces) | 38 |
| Bitki Çayları (Herbal Teas) - *Gustea* | 13 |
| Dekor Sos (Decor Sauces) | 10 |
| Bar Sosları (Bar Sauces) | 9 |
| Topping | 8 |
| Toz İçecekler (Powder Drinks) | 6 |
| Dondurulmuş Ürünler (Frozen) | 4 |

Useful DB commands:

```bash
bun run db:push       # sync schema to DB
bun run db:generate   # generate migration files
bun run db:studio     # open Drizzle Studio
```

---

## Building & Deployment

```bash
bun run build
node build/index.js
```

The app uses `adapter-node`, so it runs as a plain Node.js server. The `gussegida.db` file must be present alongside the build output at startup.

---

## Contact

**Gusse Gıda**  
Mimarsinan Mahallesi, 253. Sokak No:8  
Çerkezköy / Tekirdağ, Türkiye  
[siparis@gussegida.com.tr](mailto:siparis@gussegida.com.tr)
