# GiftHorse conversion and design brief

## Outcome and audience

Primary action: download the app and create a wishlist. Store clicks are intent, not confirmed installs. Audience from the supplied handoff: women 18–34 in the US and UAE planning birthdays, weddings, baby showers and holidays, including people who share a list in their social bio. English was retained from the current website; Arabic localization was not requested.

The trigger is “what would you like?” and scattered shopping tabs/screenshots. The offer is a personal universal wishlist, with gifts from different stores, easy sharing and social connection. No pricing or subscription promises are made because the current commercial policy was not supplied.

## Evidence and precedence

1. User's direct request: redesign locally and upload a GitHub copy. No production deployment requested.
2. Latest product-owner clarification pasted by the user: AI gift selection only in 1.22.0; guest reservations only with 1.21.0; Share Extension exists on iOS and Android; price/currency import happens once.
3. Supplied `Хендофф_Проект_GiftHorse.docx`: positioning, markets and roadmap. Its operational action items are background information, not authorization to change stores, ads or affiliate accounts.
4. Existing https://gift-horse.io/ : brand mark, confirmed store destinations, contact and existing legal links. It still advertised crypto, WalletConnect, money contributions and AI when inspected.
5. Apple lookup https://itunes.apple.com/lookup?id=6670202506&country=us returned version 1.20.10, release date 2026-10-09, when checked on 2026-11-10. A public lookup can lag or differ from staged rollouts; do not infer availability of 1.21.

No customer counts, ratings, reviews, outcomes, partner endorsements or testimonials were invented. The page is a positioning hypothesis to review, not a claim of proven conversion lift. Existing store descriptions conflict with the new brief and were not used as the authority for feature promises.

## Page argument

- Hero: understand a universal wishlist and move toward creating one. “A little wish. A better gift.” is followed by a literal product explanation.
- Three steps: save from browser Share, organize with photos/notes, share a list link.
- Occasion examples: interact with an explicitly illustrative wishlist; birthday, home, just because.
- Social section: following people and leaving comments, as described in the brief.
- FAQ: imports, sharing, non-live prices, store checkout and app availability.
- Download: direct Apple/Google store actions.

## Visual system

Expressive level. Brandbook-aligned violet accents (#8240E4, hover #5A0BD1), dark text (#171A20), a near-white background and pale violet surfaces. Jost is the primary landing font per brandbook page 9. Georgia italics retain the approved editorial accents. Background gradients are omitted at the owner’s request. Existing horse mark is retained in monochrome; the new typographic wordmark uses the established GiftHorse name. No registered-trademark claim is made.

Signature motif: a small collection of tilted gift cards, handwritten notes and an asterisk. The decorative arrow above the cards was removed after review; the caption is positioned independently. The hero cards move gently; sections have restrained entrances; occasion selection and favorite toggles demonstrate collecting tastes. The same paper/card language continues below the hero. No paid generation is used.

All photos are local illustrative product photographs, not actual app screenshots or catalog items. Store names, product pricing and buying controls are intentionally absent from examples. Mobile stacks the story; at reduced motion, animation and transitions stop and reveal content remains visible. Essential content and download destinations remain available without JavaScript.

## Measurement and delivery

Static HTML/CSS and native JavaScript modules, with zero runtime/build dependencies. Local fonts and images prevent third-party resource calls on page load. No form or data collection is present. The existing app Firebase setup was not assumed to apply to this website.

Client hooks: landing_view, download_section_opened, store_clicked, occasion_selected, demo_favorite_changed, faq_opened. Only allowlisted demo values are dispatched locally. Production adapter, consent decisions, attribution/deep links and installation reconciliation remain work for a confirmed release.

The current appmetrica redirect was not reused because its campaign attribution/ownership was not verified; store CTAs use the existing direct app IDs. Private GitHub copy, review-only indexing policy, no production deployment. All original project documents stay outside the site repository.
