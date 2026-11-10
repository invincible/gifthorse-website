# GiftHorse website redesign

Local review version of the GiftHorse marketing website, prepared on 10 November 2026. This is a new static site, separate from the existing production website. English copy targets the US and UAE brief.

## Share with the team

- Public repository: https://github.com/invincible/gifthorse-website
- Live review: https://invincible.github.io/gifthorse-website/

GitHub Actions builds and publishes `dist/` after pushes to `main`. The review site retains `noindex`; the production GiftHorse domain is unchanged.

## Run locally

Requires Node.js 22+. No package installation or build dependencies are needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173. For the production-shaped static output:

```sh
npm run check
npm run build
PORT=4174 npm run preview
```

Open http://127.0.0.1:4174. The `dist/` directory can be served by any static host. The preview server binds to loopback only and is intended for local review.

## Edit

- `index.html`: public copy, sections, store and legal links.
- `src/style.css`: responsive layout, typography, movement, reduced-motion treatment.
- `src/main.js`: example lists, in-memory favorites, event hooks.
- `src/config.js`: release-dependent copy flag.
- `public/`: local images and fonts.
- `docs/`: positioning decisions, source notes, release requirements and QA evidence.

The page's list examples are illustrative and explicitly labeled. Favorites are held in memory only; this is a marketing demonstration, not the GiftHorse app. Store buttons link to the real existing listings. There are no payments, forms, AI calls, signups or app API integrations in this site.

## Release-dependent copy

`guestReservations` is **false**. Enable only when the product owner confirms release 1.21.0 on the relevant platforms and the browser reservation journey has been tested. The Apple lookup API returned 1.20.10 on 10 November 2026; a scheduled release date was not treated as proof of launch.

AI Gift Finder, the Amazon catalog, group collections, crypto, donations, price tracking and Secret Santa assignment functionality are not advertised. Share Extension on iOS and Android is included based on the latest product-owner clarification. Prices/currencies are imported once; the FAQ explains the limit.

## Before publishing

This review build intentionally sets `noindex,nofollow` and disallows crawling. Production publication requires an intentional update to the build's review guard and robots policy, a real canonical URL, absolute OG image metadata, sitemap, and verification of legal documents and release-dependent claims. No production domain or hosting was changed.

Analytics dispatches `gifthorse:analytics` custom events without transmitting data. No Firebase credentials, property IDs, or analytics SDK were copied from the app. Connect an approved web analytics adapter before claiming measured conversions. App installs must be measured downstream, not inferred from store clicks.
