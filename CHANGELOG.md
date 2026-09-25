## 1.0.2 — September 2026
- Fixed `exports` field in `package.json` — replaced wildcard glob with explicit subpath entries (Node.js does not resolve glob patterns in `exports`).
- Fixed font loading instruction in §3.5 — Atkinson Hyperlegible Next and Mono are variable fonts; use `weight: "variable"`, not an array of weights.
- Added note in §3 — Tailwind/PostCSS cannot resolve CSS files via the `exports` field at build time; inline token CSS into the project instead of using `@import "@solsignia/design/tokens/..."`.

## 1.0.1 — September 2026
- Added §15 Internationalisation: cookie spec, language priority order, shared function contracts, Nexum exception, switcher spec.
- Added `preferred_language` column to `user_profiles` (see `I18N_MIGRATION.sql`).

# Changelog

## 1.0.0 — September 2026
- First release of the Vivid design system: tokens, per-product colours, website extras, new three-diamond mark (regular and small), Postura and Vigil badges, rules and reference screens.
