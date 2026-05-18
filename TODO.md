# Gusse Gıda — Website Rework TODO

Stack: SvelteKit 5 · Tailwind CSS v4 · Drizzle ORM · **SQLite** (better-sqlite3) · Custom i18n (DE/EN/AR/TR)

---

## 1. Datenbank & Content-Schicht

### 1.1 DB Schema
- [x] `categories`-Tabelle: `id`, `slug`, `name_de`, `name_en`, `name_ar`, `name_tr`, `sort_order`, `image_path`
- [x] `products`-Tabelle: `id`, `category_id`, `slug`, `name_de`, `name_en`, `name_ar`, `name_tr`, `image_path`
- [x] Stub-Schema (`user`-Tabelle) entfernen
- [x] **SQLite** statt PostgreSQL: `better-sqlite3` + `drizzle-orm/better-sqlite3` — `bun add better-sqlite3 && bun add -d @types/better-sqlite3`
- [ ] Drizzle-Migration generieren und pushen (`bun run db:push`)

### 1.2 Seed-Daten
- [ ] Alle 8 Kategorien eintragen (Sirupe, Topping, Fruchtsaucen, Bar-Saucen, Dekor-Saucen, Pulvergetränke, Kräutertees, Tiefkühl)
- [ ] Alle 166 Produkte aus `produkte.md` eintragen — mit korrekten `slug`s und `image_path`s (Pfade zeigen auf `static/assets-original/`)
- [ ] Seed-Skript schreiben (`scripts/seed.ts`)

### 1.3 Produktbilder aufräumen
- [ ] Bilder aus `static/assets-original/` in saubere Endpfade umbenennen (lowercase, kebab-case, ohne Größensuffix)
  - z.B. `beyaz-cikolata-3-488x1024.jpg` → `topping/beyaz-cikolata.jpg`
- [ ] Duplikate und fehlerhafte Downloads aus `syrups/` prüfen (107 Dateien — sollten ~78 sein)

---

## 2. i18n

### 2.1 Fehlende Übersetzungen
- [x] Türkisch (`tr`) als vierte Locale ergänzen — war auf der alten Seite die Primärsprache
- [x] `$inspect(open)` in `LanguageSelector.svelte` entfernen (Debug-Überbleibsel)
- [x] Türkei-Flagge und „Türkçe" in `LanguageSelector` ergänzen
- [x] Startseite: Hero-Claim, Feature-Sektionen (Sirup, Limonade, Kaffee), Kategorietitel — DE/EN/AR/TR
- [ ] Alle weiteren Seiteninhalte übersetzen (DE/EN/AR/TR):
  - Über uns: kompletter Fließtext
  - Kontakt: Formularfelder, Fehlermeldungen, Erfolgs-Feedback
  - Blog: Einleitungstext, „Rezept einsenden"-CTA
  - Katalog: Beschreibungstext, Download-Button
  - Qualitätspolitik: gesamter Text

### 2.2 RTL-Unterstützung (Arabisch)
- [x] `dir`-Attribut global gesetzt — Hook ersetzt `%dir%` in `app.html` via `getTextDirection(locale)`
- [ ] Navbar-Reihenfolge bei RTL spiegeln
- [ ] Footer-Spaltenreihenfolge bei RTL prüfen

---

## 3. Komponenten

### 3.1 Navbar
- [x] **Mobile Hamburger-Menü** implementieren — Dropdown mit allen Links + Kategorieliste
- [x] **Produkte-Dropdown** in Desktop-Nav: Klick öffnet Unterliste aller Kategorien
- [x] Active-State-Logik: exakter Match für `/`, `startsWith(href + '/')` für den Rest; `$page.url.pathname` statt `location.pathname`
- [x] Sticky-Navbar mit `backdrop-blur-sm` und `shadow-sm`

### 3.2 Hero
- [x] Vollflächiges Hero-Bild mit Overlay-Gradient
- [x] Headline (i18n) prominent zentriert
- [x] CTA-Button „Produkte entdecken" → `/products`
- [x] Zweiter CTA „Katalog herunterladen" → `/catalog`

### 3.3 CategoryGrid (ehem. ProductList)
- [x] Responsive Grid (2 Spalten mobil, 4 Desktop)
- [x] Jede Kachel: Kategoriebild, Name (i18n), Hover-Zoom-Effekt, Link zur Kategorie-Unterseite
- [ ] Daten aus DB laden (`+page.server.ts` auf `/`) — aktuell statische Daten

### 3.4 FeatureSections (ehem. ProductsLarge)
- [x] Drei alternierend angeordnete Bild-Text-Blöcke (Sirupe, Limonaden, Kaffee)
- [x] i18n für alle Texte (DE/EN/AR/TR)
- [x] Abschnitte mobil stacken (Bild oben, Text unten)

### 3.5 ProductCard
- [ ] Wiederverwendbare Karte: Produktbild, Name, Kategorie-Badge
- [ ] Hover-Zoom-Effekt auf Bild
- [ ] Für Kategorie- und Produktübersichtsseiten

---

## 4. Routen / Seiten

### 4.1 `/` — Startseite
- [ ] Hero-Sektion (siehe 3.2)
- [ ] Kategorien-Grid mit DB-Daten (siehe 3.3)
- [ ] Feature-Sektionen (siehe 3.4)
- [ ] `+page.server.ts`: Kategorien aus DB laden

### 4.2 `/products` — Produktübersicht (neu anlegen)
- [ ] Route `src/routes/products/+page.svelte` erstellen
- [ ] Alle Kategorien als Abschnitte oder Tab-Filter
- [ ] Suche / Filterung nach Kategorie (Client-side reicht)
- [ ] `+page.server.ts`: alle Produkte + Kategorien aus DB laden

### 4.3 `/products/[category]` — Kategorie-Unterseite (neu anlegen)
- [ ] Route `src/routes/products/[category]/+page.svelte`
- [ ] Alle Produkte der Kategorie als Grid
- [ ] Page-Titel = Kategoriename (i18n)
- [ ] `+page.server.ts`: Kategorie und ihre Produkte laden, 404 wenn Slug unbekannt
- [ ] Navbar-Dropdown soll direkt hierher verlinken

### 4.4 `/about` — Über uns
- [ ] Hardcodierten deutschen Text entfernen, durch i18n-Funktionen ersetzen
- [ ] Design: Page-Header-Banner (wie Footer-Stil), dann Content-Sektionen
- [ ] Inhalt ausbauen:
  - Unternehmensgeschichte (mit Jahreszahlen / Timeline)
  - Zahlen: 209 Produkte, 8 Kategorien, Gründungsjahr
  - Produktionsstandort: Çerkezköy/Tekirdağ
  - Mission/Philosophie
- [ ] Bilder: Stimmungsbilder aus `general/gorsel2.jpg`, `gorsel3-1.jpg`, `Gorselv2.jpg` nutzen

### 4.5 `/catalog` — Katalog
- [ ] PDF-Download-Button mit Link zum bestehenden Google-Drive-PDF
- [ ] Katalog-Cover-Vorschau (`Untitled-1-1-1024x456.jpg`)
- [ ] Optional: eingebetteter PDF-Viewer (iframe oder `<embed>`)
- [ ] i18n: Beschreibungstext + Button-Label

### 4.6 `/blog` — Blog / Rezepte
- [ ] Statische Rezepte aus `gussegida-referenz.md` als strukturierte Daten anlegen (JSON oder DB-Tabelle `recipes`)
- [ ] Rezept-Karten: Titel, Zutaten, Zubereitung, verwendete Produkte (verlinkt)
- [ ] Einleitungstext + „Rezept einsenden"-CTA (`siparis@gussegida.com.tr`)
- [ ] Später erweiterbar durch weitere Rezepte

### 4.7 `/contact` — Kontakt
- [ ] Kontaktformular mit Feldern: Name, E-Mail, Telefon (optional), Nachricht
- [ ] Server-Action für Formular-Submit (SvelteKit `+page.server.ts` mit `actions`)
- [ ] E-Mail-Versand oder zumindest Weiterleitung / Speicherung in DB
- [ ] Kontaktdaten klar darstellen: Adresse, 3 Telefonnummern, E-Mail
- [ ] Erfolgs- / Fehlermeldungen (i18n)
- [ ] Optional: Google Maps Embed für den Standort Çerkezköy

### 4.8 `/quality` — Qualitätspolitik (neue Route, alte war `/kalite-politikamiz`)
- [ ] Route anlegen
- [ ] Texte auf DE/EN/AR/TR übersetzen und in messages.json
- [ ] Design: simpel, Text-fokussiert

### 4.9 `/careers` — Karriere (neue Route, alte war `/gusse-kariyer`)
- [ ] Einfache Seite: Überschrift + Kontakt-Mail für Bewerbungen
- [ ] Ggf. offene Stellen als statische Liste

---

## 5. SEO & Meta

- [ ] `<svelte:head>` in `+layout.svelte` mit Default-Meta-Tags (title, description, OG)
- [ ] Pro Route: eigene `<title>` und `<meta name="description">` (i18n)
- [ ] OG-Tags: `og:title`, `og:description`, `og:image` (Firmenlogo oder Hero-Bild)
- [ ] `lang`-Attribut ist bereits gesetzt (via `%lang%` in hooks) — `dir` fehlt noch (RTL)
- [ ] `sitemap.xml` generieren (statische Routen + Kategorierouten)
- [ ] `robots.txt` prüfen (liegt bereits in `static/`)
- [ ] Canonical-URLs pro Locale

---

## 6. Technisches / Code-Qualität

- [x] `$inspect(open)` in `LanguageSelector.svelte` entfernen
- [x] `ProductList` und `ProductsLarge` umbenannt in `CategoryGrid` und `FeatureSections`
- [x] Navbar: `location.pathname` → `$page.url.pathname` (SvelteKit 5 runes)
- [ ] **Environment**: kein `.env` mehr nötig (SQLite — DB liegt als Datei `gussegida.db`)
- [ ] `src/routes/blog/+page.svelte` ist leer — Stub oder Inhalt
- [ ] `src/routes/catalog/+page.svelte` ist leer — Inhalt ergänzen
- [ ] Fehlerseiten: `+error.svelte` anlegen (404, 500)
- [ ] Loading-States für DB-Abfragen (Skeleton-Loader oder Spinner)

---

## 7. Deployment

- [ ] Hosting-Ziel klären (VPS, Fly.io … — Vercel scheidet wegen adapter-node aus)
- [x] Keine externe DB-Instanz nötig — SQLite `gussegida.db` liegt neben dem Prozess
- [ ] `adapter-node` ist gesetzt — Dockerfile oder systemd-Service schreiben
- [ ] CI/CD Pipeline (GitHub Actions oder ähnlich) für Build + Migrations
- [ ] Domain `gussegida.com` → neue Seite umleiten (derzeit leitet sie auf `.com.tr`)

---

## Priorität-Reihenfolge (Empfehlung)

| Prio | Was |
|------|-----|
| 🔴 Hoch | DB Schema + Seed (1.1–1.2), Navbar mobile (3.1), Hero (3.2) |
| 🔴 Hoch | `/products` + `/products/[category]` — Kerninhalt der Seite (4.2–4.3) |
| 🟠 Mittel | `/about` aufbauen (4.4), `/contact` mit Formular (4.7) |
| 🟠 Mittel | i18n vervollständigen inkl. TR (2.1), RTL (2.2) |
| 🟡 Normal | `/catalog`, `/blog`, `/quality`, `/careers` (4.5–4.9) |
| 🟡 Normal | SEO / Meta (5), Code-Qualität (6) |
| 🟢 Später | Deployment & CI/CD (7) |
