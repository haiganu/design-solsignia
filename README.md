# @solsignia/design

The Solsignia "Vivid" design system: rules, tokens, brand assets and reference screens for every Solsignia product (Postura, Pharus, Nexum, Vigil, account.solsignia.com and www.solsignia.com).

**Start with [`DESIGN.md`](DESIGN.md).**

## Contents

| Path | What |
|---|---|
| `DESIGN.md` | The rulebook. Read it before any UI work. |
| `tokens/vivid-theme.css` | Base theme (Tailwind v4 `@theme`). |
| `tokens/products/*.css` | Per-app colours: postura, pharus, nexum, vigil. |
| `tokens/website-extras.css` | Website and landing-page additions. |
| `tokens/vivid.preset.js` | Tailwind v3 preset with the same class names. |
| `brand/` | Logo (regular, small, source, favicon) and trust badges. |
| `snippets/SolsigniaMark.tsx` | Logo component to copy into each repo. |
| `snippets/CLAUDE.md` | Block to paste into each product repo's `CLAUDE.md`. |
| `references/` | PNG target screens. |

## Use in a product repo

```bash
npm install github:haiganu/design-solsignia
```

In `app/globals.css` (Tailwind v4):

```css
@import "tailwindcss";
@import "@solsignia/design/tokens/vivid-theme.css";
@import "@solsignia/design/tokens/products/postura.css";   /* your app */
/* websites and landing pages only: */
@import "@solsignia/design/tokens/website-extras.css";
```

Then:
- Copy `snippets/SolsigniaMark.tsx` to `components/brand/`.
- Copy `brand/favicon.svg` to `app/icon.svg`.
- Paste `snippets/CLAUDE.md` into the repo's `CLAUDE.md`.

## Updating

1. Change this repo.
2. Bump `version` in `package.json` and note the change in `CHANGELOG.md`.
3. Push.
4. In each product repo run `npm update @solsignia/design` and redeploy.
