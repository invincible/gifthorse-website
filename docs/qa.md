# Review verification 10 November 2026

Passed `npm run check` (JavaScript syntax for client and build/server scripts) and `npm run build` (static output). No dependencies or package installation required. Manual browser verification used the built site at port 4174, not only source files.

## Browser checks

- Desktop at the browser's normal 1280px viewport: inspected hero, example wishlist, social section and download path.
- Mobile 390×844: inspected hero and example wishlist. All images loaded. No horizontal overflow (`scrollWidth === innerWidth`).
- Narrow mobile 320×740: fixed a rotated hero-card overflow and tightened CTA spacing. Rechecked width: 320/320.
- Switched Birthday → New home → Just because; title, description and three products changed correctly.
- Saved a product and verified the counter became “1 favorite saved in this demo” and the button's pressed state changed. Example state is in memory, not persisted or sent to the real application.
- Opened the price FAQ and checked the full one-time-import explanation.
- Download section navigation, direct Apple and Google store destinations, footer/legal destinations inspected. No installation, purchase or email submission was performed.
- Keyboard Tab revealed the visible “Skip to content” focus target. Interactive controls have explicit focus styles, labels and pressed state.
- Emulated `prefers-reduced-motion: reduce`, reloaded and inspected styles: hero animation `none`; no reveal classes added; complete content visible. Restored media/viewport overrides afterward.
- No warning/error entries in captured browser console. No broken images in inspected DOM.

## Performance sanity check

Local production-shaped static build, mobile 390px, 4× CPU slowdown, 150ms simulated latency and 200,000 bytes/s download; cache disabled. CDP NavigationStart to DomContentLoaded: approximately 0.76 seconds in this run. This is a local development sanity check, not field Core Web Vitals, an LCP/INP claim, or a production Lighthouse score. Overrides were reset.

Images total about 420 KiB. The original font set was replaced with self-hosted Jost during the brand review; the browser requests only the weights it needs. No runtime framework, remote font stylesheet, external image host or third-party analytics is needed at page load. Below-fold example photos use lazy loading. Build output contains crawler blocking for review.

## Remaining release work

- Product-owner visual/copy review; actual app screen captures can replace illustrations if supplied.
- Confirm 1.21 availability and test the real shared-list guest reservation journey before enabling that claim. The website demo does not test the application's backend.
- Reconcile privacy/terms text with the current Web2 product; existing URLs are retained, not legal-content approval.
- Connect approved website analytics, consent and attribution if publishing.
- Add production canonical, OG preview image, sitemap and indexing policy when a real deployment is authorized.
- Real iPhone/Android Safari/Chrome playback/interaction review and production performance remain unverified.

Brand and copy revision: see `brand-and-copy-review.md` for the latest changes and checks.

## Readability and shared review revision

All explicit text sizes increased: ordinary body copy is generally 15–19px, small interface labels 12–15px, and decorative card labels at least 10px. Display headings increased about 8–10%. Full stops were removed from headings, including the hero's decorative period. Jost remains the primary typeface; Georgia is retained for editorial italic accents.

Assets now use relative URLs so the same static build works on localhost and beneath `/gifthorse-website/`. GitHub Pages deploys only `dist/` through an Actions workflow; project documents and source notes are not copied into the website artifact. Repository visibility was changed to public at the owner's explicit request.

GitHub Pages deployment confirmed at https://invincible.github.io/gifthorse-website/ (HTTP 200). Initial Actions run 42829610450 completed successfully. Live browser verified Jost, correct project-subpath image URLs, no heading full stops, no horizontal overflow at the normal desktop width, functioning occasion selection/favorite counter, and no captured console errors. The 320px local build also reported scrollWidth equal to viewport width; mobile CTAs wrap rather than shrinking the text. Public repository visibility was verified through the GitHub API.

## Extended responsive audit

Checked 320, 360, 390, 768, 800, 801, 820, 1000, 1001, 1024, 1100, 1101, 1280 and 1440px browser viewports, including both sides of layout breakpoints. Every width reported scrollWidth equal to viewport width and no headings, body text, links, buttons or FAQ summaries outside the viewport. Inspected tablet hero, steps, example wishlist and expanded FAQ visually.

Fixed a crowded tablet hero by moving the gift cards below the text at 801–1000px; moved the decorative mark away from the caption at intermediate laptop widths. Constrained illustrated browser/list content and message bubbles to their containers. Rechecked message bounds: no clipping at any audited width. Keyboard/browser interaction and browser viewport checks do not replace real-device Safari/Android testing.
