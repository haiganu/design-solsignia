<!-- Paste this block into the CLAUDE.md of every Solsignia product repo. -->

## Design system (mandatory for any UI work)

- The Solsignia visual style lives in the public repo **haiganu/design-solsignia**, installed as `@solsignia/design`.
- Before touching any UI, read `node_modules/@solsignia/design/DESIGN.md` and look at the matching images in `node_modules/@solsignia/design/references/`. If the package is not installed yet, read them at https://github.com/haiganu/design-solsignia.
- Import styles from the package, never copy them:
  - apps: `@import "@solsignia/design/tokens/vivid-theme.css";` then `@import "@solsignia/design/tokens/products/<product>.css";`
  - websites and landing pages: also `@import "@solsignia/design/tokens/website-extras.css";`
- Colours: theme names only. No hex, `rgb()` or `[#...]` in components. Need a new colour? Stop and report it; it gets added to the design repo first.
- Logo: use the `SolsigniaMark` component (copied from `snippets/SolsigniaMark.tsx`). Never redraw it.
- Icons: Lucide only.
- Five languages (en, ro, de, fr, it) for every string. No testimonials. Light theme only.
- If the design repo and this repo disagree, the design repo wins. Report the difference instead of guessing.
