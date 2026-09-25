# Solsignia design system — "Vivid"

This is the single source of truth for how every Solsignia product looks and behaves: the apps, account.solsignia.com, the website, the landing pages, the PDFs and the emails. If a product repo disagrees with this file, this file wins.

- **Rules:** this file.
- **Values:** `tokens/`.
- **Logo and badges:** `brand/`.
- **Target screens:** `references/`. Always look at the matching image before building a screen.

## 1. Principles

1. **Readable first.** Large, clear text and strong contrast. Body text 15–16px in apps and 17–18px on reading pages, with at least 4.5:1 contrast (most text is 7:1 or better).
2. **Familiar patterns.**
   - Desktop: a left sidebar.
   - Tablet: an icon rail.
   - Phone: bottom tabs.
   - Tables become lists on small screens.
   - Nothing clever that users have to learn.
3. **Colour carries meaning.**
   - One primary colour per app for anything clickable.
   - One colour per score category.
   - Red, amber and green mean danger, warning and OK, and nothing else.
4. **Never colour alone.** Every status has a word or icon next to its colour.
5. **Honest.** No testimonials or user quotes. No claims the product can't back up. No invented numbers.

## 2. Hard rules for code

- **Theme names only.** Components never contain hex, `rgb()`, `[#…]` or inline colour literals, and gradients use `var(--color-…)`.
  - Need a new colour? Add it here first.
  - Check with `grep -rnE "#[0-9A-Fa-f]{3,8}\b|\[#|rgb\(" app components lib --include=*.tsx --include=*.ts`.
  - The only exception is the logo SVG.
- **Light theme only for v1.**
  - No theme switcher, no `dark:` variants.
  - Dark mode will come later as a second set of values for the same names, which is why the rule above exists.
- **Five languages:** en, ro, de, fr, it.
  - Every visible string goes through the i18n system, in a formal register.
  - Layouts must survive German lengths: no fixed-width labels, and wrapping is allowed.
- **Icons: Lucide only.**
  - Outline style, stroke 2.
  - Sizes: 20px in nav and buttons, 18px inline, 16px in tags.
  - Filled shapes only for status dots and the logo.
- **Accessibility:**
  - Real `<button>`, `<a>`, `<nav aria-label>`, `<label>`.
  - Icon-only buttons get `aria-label`.
  - Every tap target is at least 44×44px.
  - Visible focus on everything.
  - Decorative visuals are `aria-hidden`.
  - Respect `prefers-reduced-motion`.

## 3. Tokens

Files:
- `tokens/vivid-theme.css`: Tailwind v4 `@theme`. Import it everywhere.
- **Note on npm install:** `npm install github:haiganu/design-solsignia` installs the package but Tailwind/PostCSS cannot resolve CSS files via the Node.js `exports` field at build time. The recommended approach is to copy the token CSS files into the project (e.g. `styles/design/`) and import them locally, or inline them into `globals.css`. Do not rely on `@import "@solsignia/design/tokens/..."` in CSS files that Tailwind processes.
- `tokens/products/<product>.css`: the 7 values that make an app Postura, Pharus, Nexum or Vigil. Import one, after the theme.
- `tokens/website-extras.css`: website and landing pages only.
- `tokens/vivid.preset.js`: the Tailwind v3 equivalent, using the same class names.

### 3.1 Neutrals

| Name | Hex | Use |
|---|---|---|
| `ink` | #0F172A | main text (17.9:1) |
| `ink-2` | #475569 | secondary text (7.6:1) |
| `ink-3` | #64748B | captions only, never below 13px (4.8:1) |
| `border` | #E4E7F2 | card and divider borders (decorative) |
| `field-border` | #7C8699 | inputs, checkboxes, off toggles (3:1, required) |
| `subtle` | #F7F8FC | table headers, quiet panels |
| `canvas` | #F4F5FB | app page background |
| `surface` | #FFFFFF | cards |

### 3.2 Per-product colour

These are the only values that change between apps:

| App | Primary | Hover | Soft | On soft | Sidebar | Dot |
|---|---|---|---|---|---|---|
| Postura | #4338CA | #3730A3 | #EEF2FF | #3730A3 | #1E1B4B | #818CF8 |
| Pharus | #0E7490 | #155E75 | #ECFEFF | #155E75 | #083344 | #22D3EE |
| Nexum | #A21CAF | #86198F | #FDF4FF | #86198F | #4A044E | #E879F9 |
| Vigil | #C2410C | #9A3412 | #FFF7ED | #9A3412 | #431407 | #FB923C |

- **account.solsignia.com** has no app colour. Its buttons use the dark `sidebar` indigo, and only the "Continue to …" chip carries the app colour.
- **Red, amber and green are never an app primary.**
- **In Vigil,** severity must always show a text label, because ember sits close to amber.

### 3.3 Score categories (Postura)

Each category has a strong colour (bars, dots, tiles), a tint (tag background) and a foreground (tag text). The tag text is 6:1 or better on its tint.

| Category | Strong | Tint | Text |
|---|---|---|---|
| Device hygiene | #2563EB | #DBEAFE | #1E40AF |
| Browser security | #7C3AED | #EDE9FE | #5B21B6 |
| Authentication | #DB2777 | #FCE7F3 | #9D174D |
| Network | #0D9488 | #CCFBF1 | #115E59 |
| Data practices | #D97706 | #FEF3C7 | #92400E |
| Awareness | #16A34A | #DCFCE7 | #166534 |

Every place a category appears must use its colours, taken from one map (`lib/ui/categories.ts`): bars, tags, filters and icon tiles.

### 3.4 Status

| Status | Text | Dot | Tint | On tint |
|---|---|---|---|---|
| Success | #047857 | #10B981 | #D1FAE5 | #065F46 |
| Warning | #B45309 | #F59E0B | #FEF3C7 | #92400E |
| Danger | #BE123C | #E11D48 | #FFE4E6 | #9F1239 |
| Neutral | #475569 | #94A3B8 | #F1F5F9 | #334155 |

Priority is always a dot plus a word: High (danger), Medium (warning), Low (neutral).

### 3.5 Type

- **Font:** Atkinson Hyperlegible Next and Atkinson Hyperlegible Mono for numbers: scores, times, counts, codes. Both are variable fonts — load with `weight: "variable"` (not an array of weights), subsets `['latin', 'latin-ext']`, variables `--font-atkinson` and `--font-atkinson-mono`. Using an array of weights causes a Next.js build error.
- **App scale:**
  - display 30/700
  - h2 18/700
  - body 16/400
  - ui 15/600
  - label 13/600
  - metric 34/500 mono
- **Website scale:**
  - hero 104px desktop / 38–42px mobile, 700, tracking −0.03em
  - chapter headline 72px
  - section 56px (32px mobile)
  - lead 20–23px
  - reading 18px/1.75

### 3.6 Shape and space

- **Radius:** tags 8, buttons 10, icon tiles 12, cards 16 in apps (20–24 on the website), pills fully rounded.
- **Spacing:** multiples of 4 (4, 8, 12, 16, 20, 24, 32).
- **Page padding:** 28–32px in apps, 64px on the website, 16–20px on phones.

## 4. Brand

**Mark:** three diamonds.
- Sides: `#FFDE17`. Centre: `#FFF200`, drawn last so it sits on top.
- Outline: `#BE1E2D`, miter limit 10.
- Source artboard: 280×280 (`brand/mark-source-280.svg`).

**Two weights:**
- **Small** (`brand/mark-small.svg`): stroke 14, viewBox `40 2 200 278`. Use it at **48px and below**: sidebar, headers, favicon, app icons.
- **Regular** (`brand/mark.svg`): stroke 5, viewBox `40 8 200 264`. Use it above 48px.
- Use `snippets/SolsigniaMark.tsx`, which picks the version from `size`. Never redraw, recolour or restroke the mark.

**Favicon:** `brand/favicon.svg`, the small version on the full square.

**Lockup:** mark → "Solsignia" (700) → product name (400, lighter colour).
- The same font for both words.
- A fixed **8px** gap between every element.
- Bottom-aligned to the text baseline.
- No motto in the lockup.

**Logo colours are brand only.** Never use `#BE1E2D` or the yellows as interface colours, with one exception: the website uses `#FFF200` (`statement`) for primary buttons and headline highlights.

**Trust badges** (`brand/badges/`): a dark ring in the product's sidebar colour, a yellow inner line, a white centre with the small mark and "Verified", and circular text "POSTURA MONITORED · SOLSIGNIA · 2026 ·" (Vigil: "VIGIL MONITORED …"). Use them as supplied.

## 5. App layout (see `references/app/`)

- **Desktop (≥1280px):**
  - A 264px sidebar in the app's `sidebar` colour:
    - lockup at the top
    - nav items 46px tall, each with a 30×30 coloured icon tile, a 15px label and the active item on `white/14`
    - a "Solsignia apps" group with the app dots
    - the account button at the bottom
  - A 68px white top bar with the breadcrumb, search, notifications and the one primary action.
  - Full-width content, no max-width container.
- **Tablet (768–1279px):**
  - An 80px icon rail with short labels (separate i18n keys; they may wrap to 2 lines).
  - The count badge sits on the tile corner.
  - A » button opens the full sidebar as an overlay. Remember the choice per user.
  - Search collapses to an icon, and tables become lists.
- **Phone (<768px):**
  - A coloured header block in the primary colour, with a 24px bottom radius.
  - Bottom tabs: 5 items, 76px tall. The active tab has its icon in a pill. Respect the safe area.
- **Nav tile colours:**
  - Overview #6366F1
  - Actions #E11D48
  - Devices #0284C7
  - Compliance #7C3AED
  - Reports #059669
  - Badge #D97706

## 6. Components and states (see `references/system/02-components-and-states.png`)

- **Buttons.** Every kind has default, hover, focus, pressed, disabled and loading states.

  | Kind | Look |
  |---|---|
  | Primary | solid primary colour |
  | Secondary | white, `border-strong` |
  | Soft | primary-soft background, on-soft text |
  | Danger | #BE123C |
  | Link | text only |

  - **Sizes:** 48 (main action on phones), 44 (default), 36 (inside tables).
  - **One primary button per screen area.**
  - **Loading:** keeps the button's width, shows a spinner and "Working…", and sets `aria-busy`.
- **Focus:** 2px white gap plus a 2px primary ring. Fields use a 2px primary border and a 3px soft halo instead.
- **Fields:**
  - Label above, 14/600. Hint below, 13px.
  - 44px tall, 16px text (prevents zoom on iOS), `field-border`.
  - **Errors** use a 2px danger border, an icon, and a sentence that says how to fix it. Never colour alone.
- **Checkbox** for choices you confirm with a Save button. **Toggle** for settings that apply at once, shown with its On/Off word.
- **Select:** the open menu is white, radius 12, with a shadow. The selected option is primary-soft with a check.

## 7. Empty, loading and error (see `references/system/03-empty-loading-error.png`)

- **Every empty screen** says why it's empty and gives one next step.
- **Loading:** grey skeleton shapes that match the real layout, shown after 300ms. Spinners appear only inside buttons and live progress. No full-page spinners.
- **Errors** say what happened, that data is safe, and what to do next, plus a code for support. No blame, no jargon.
- **Stale data** (a device offline) stays visible and is marked out of date, never silently removed.
- **First run** shows a numbered getting-started checklist, not empty dashboards.

## 8. Feedback (see `references/system/04-toasts-banners-dialogs.png`)

- **Toast = something just happened** because of what you did.
  - Dark indigo, bottom-right on desktop, above the tabs on phones.
  - Success and info disappear after 5s, warnings after 10s. Errors stay until dismissed.
  - At most 3 stacked. Never the only place for important information.
- **Banner = something true about the account right now.**
  - Shown above the page content, one at a time (red beats amber beats blue).
  - Red and amber banners can't be dismissed while the problem exists.
- **Dialog = only for destructive or irreversible actions.**
  - Focus starts on Cancel, and Esc closes it.
  - Irreversible actions need the user to type a word (e.g. DELETE).
  - Everything else happens directly, with Undo.

## 9. Account (see `references/account/`)

- **Sign in, sign up, reset and two-step check:**
  - A split layout with a dark brand panel and the form on white.
  - Google first, then email.
  - Password rules shown as live checks. Length over complexity.
  - The reset page gives the same message whether or not the account exists.
- **Apps and plans:** every app with its plan status, the payment method via Stripe, and invoices.

## 10. Outside the app (see `references/outside-app/`)

- **PDF reports:**
  - A4, white, no dark areas, and readable when printed in black and white.
  - Every page carries a verify link, the company name and a page number.
  - A plain-language summary first, then the details.
  - "Not legal advice or certification" wherever compliance is shown.
- **Emails:**
  - 600px wide and table-based, with an Arial fallback (email apps block web fonts).
  - 16px text and one main button in the app colour. Account emails use the dark ink.
  - The logo as a 2× PNG with alt text.
  - A plain-text version, and an unsubscribe link on anything non-essential.
  - Security emails say what happened, how long a link works, and what to do if it wasn't you.

## 11. Website and landing pages (see `references/website/`)

- **Header:** dark (`night`). It sits transparent over the homepage hero and is solid elsewhere.
- **Primary buttons use `statement` yellow** with `statement-fg` text.
- **Heroes:**
  - A deep gradient in the product colour.
  - The www hero adds the logo with `.sun-rays` and `.sun-glow`.
  - The headline's second line is in `statement`.
  - A live-looking product preview built from tokens, decorative and `aria-hidden`.
- **Product sections:** full-width in the product gradient, alternating sides, a 72px promise, 4 bullets, a white button and the price.
- **The closing section is a single button.** No motto block.
- **Text pages** (legal, resources, guides) use a readable 760px column (18/1.75) and a sticky "On this page" list.
  - Legal pages show one card per product with a top border in its colour.
  - "In short" boxes appear only if the source text already has a summary.
- **Phones:**
  - Everything stacks into one column with full-width buttons.
  - Previews are scaled with CSS `zoom`.
  - The menu opens a full-screen sheet.

## 12. Content rules

- **Plain language, short sentences, no jargon.** Say what something means and what to do next.
- **Tier names:**
  - Postura: "Without an account", "Free account", "Paid account". **Never "Professional".**
  - Vigil: "Free account", "Paid account".
  - Pharus: "Without an account", "Free account".
  - Nexum: no accounts at all.
- **Sample data** in mockups is illustrative only. Mark placeholders as `[…]`, and never ship them.
- **Third-party data is credited where required** (e.g. "Breach data provided by Have I Been Pwned").

## 13. Reference screens

| Folder | Contents |
|---|---|
| `references/app/` | Postura overview (desktop, phone, tablet), actions, action detail, devices, reports, first run |
| `references/system/` | tokens, components and states, empty/loading/error, feedback, breakpoints, product colours |
| `references/account/` | sign in, sign up / reset / 2FA, apps and billing |
| `references/outside-app/` | PDF report, emails |
| `references/website/` | homepage (desktop and phone), four landing pages (desktop and phone), legal page, resources index, guide page |

The screens show Postura. Other apps use the same layouts with their own values from `tokens/products/`.

## 15. Internationalisation (i18n)

**Supported languages:** en, ro, de, fr, it.
**Register:** formal — dvs. (Romanian), Sie (German), vous (French), Lei (Italian).

### Language preference — how it is stored and read

| Source | Who it applies to | Priority |
|---|---|---|
| `?lang=` URL param | Everyone | 1 — highest |
| `.solsignia.com` cookie `solsignia-lang` | Everyone | 2 |
| `user_profiles.preferred_language` | Authenticated users | 3 (async, updates cookie) |
| Browser `Accept-Language` header | Everyone | 4 |
| Default `'en'` | Everyone | 5 — lowest |

### Cookie spec

- Name: `solsignia-lang`
- Domain: `.solsignia.com` (with leading dot — shared across all subdomains)
- Max-age: 1 year
- SameSite: Lax

### Shared functions (in each repo's `lib/i18n.ts`)

- `detectLang()` — reads URL param → cookie → browser header → 'en'
- `writeLang(lang)` — writes to cookie and localStorage simultaneously
- `syncLangFromProfile(supabase)` — reads DB, updates cookie if different; call once on authenticated page load
- `saveLangToProfile(supabase, lang)` — fire-and-forget DB update; call when user changes language

### Nexum exception

Nexum has no accounts. Use `detectLang()` and `writeLang()` only. Never call `syncLangFromProfile` or `saveLangToProfile`.

### Language switcher

- Shows the current language code and a globe icon (Lucide `Globe`, 18px).
- Selecting a language: calls `writeLang()` immediately (instant UI), then `saveLangToProfile()` if authenticated.
- Minimum tap target: 44px.
- Available in the desktop header and the mobile menu sheet on every product.

### Translation completeness

Every i18n key must have translations for all five languages before the Vivid prompt runs.
Never translate legal text (privacy policy, terms of service) — restyle only.
Layouts must work at German lengths — no fixed-width labels anywhere.

## 14. Changing the system

1. Change it here first: tokens, rules or references.
2. Bump `version` in `package.json` and add a line to `CHANGELOG.md`.
3. In each product: `npm update @solsignia/design`, then check the hex grep and the build.
