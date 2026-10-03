# TeeJaye DeLoach author website

This is the redesigned source project from the supplied teejayedeloach.zip. No deployment was performed.

## Preview and build

Serve this folder with a static HTTP server rather than opening HTML files directly. The Writing Desk loads its published feed over HTTP. Run `npm run build` from this folder to generate `dist/`. Existing Netlify build settings are retained in `netlify.toml`.

## What changed

The homepage now includes an editorial hero, featured Borrowed for the Holidays release, all three Hearts Unveiled books with clear availability, an author brand statement, a restrained More Stories invitation, a large author introduction, three actual recent posts, newsletter signup, and a streamlined footer. Existing cover artwork and the author illustration are reused. The header uses an editable typographic wordmark; original logo assets remain available.

Navigation is Home, Books, About, Writing Desk, Shop, and Contact. Individual book pages are `closeted-hearts.html`, `uncloseted-hearts.html`, `unshaken-hearts.html`, and `borrowed-for-the-holidays.html`. The existing `books.html#borrowed` and `shop.html#closeted` anchors remain valid.

The standalone homepage theme cards, Las Vegas feature, draft percentage, and undeveloped catalog entries were removed. Existing published blog essays, including the Interim essay, remain available. No genuine reader quotes were supplied, so the homepage uses an explicitly identified brand statement instead.

## Preserved systems

- Closeted Hearts paperback: $16.99, original Stripe payment link, persistent one-copy cart, add/remove controls, and checkout.
- Contact form: original Netlify form name and submitted fields.
- Writing Desk: published JSON feed, category filters, slug-based post pages, fallback posts, and metadata.
- Blog editor: original `admin/` configuration and post build workflow. This redesign does not change its authentication setup.
- Privacy, terms, error page, redirects, and existing imagery.

The cart now traps keyboard focus, returns focus on close, and makes background content inert while open. Hidden cart controls are inert. Reduced motion disables cover movement. Blog text has a safe readable fallback if external Markdown libraries cannot load. Asset caching now revalidates unversioned assets so future designs are not held indefinitely by the previous immutable cache policy.

## Editing

Edit visual styling in `assets/css/styles.css`. Product data and checkout behavior remain in `assets/js/main.js`. Manage individual posts in `content/posts/` or through the existing CMS. `npm run build` rebuilds `content/posts.json`; do not edit only that generated file. Homepage post previews load the three latest published posts using the same feed.

## Remaining owner inputs

1. Approved covers for Uncloseted Hearts and Unshaken Hearts. Current panels explicitly say “Cover to be revealed.”
2. Final synopsis and character information, especially for Unshaken Hearts. Its page deliberately limits itself to verified information.
3. Approved complete content notes and genuine reader praise. Book pages clearly indicate when these have not been added.
4. Retailer links, future book prices, and exact release dates when confirmed. No additional purchase links or dates were invented. The requested Coming 2026 and Coming 2027 series labels are used.
5. Newsletter email service and future reader magnet. The static Netlify form collects email and consent after deployment with form detection enabled, but sends no automated welcome email and delivers no free book. Connect an email service before announcing regular email delivery. Review the privacy policy when that service is chosen.
6. Any expanded character artwork or descriptions. Current pages use only names and details supplied in the source project or conversation.

The holiday playlist link is the Spotify playlist supplied in prior conversation context. Confirm it remains the desired public playlist before publication.

## Validation and limits

Build and JavaScript syntax checks pass. All 14 HTML pages have valid internal file links and fragment targets. Browser checks covered desktop and mobile layouts, image loads, cart add/remove and persistence, empty-cart checkout disabling, mobile menu and Escape behavior, category filtering, post rendering, three latest homepage posts, and reduced motion. Layout checks found no horizontal overflow at 320, 390, 768, or 1440 pixels on the tested pages.

Stripe navigation was intercepted to verify the original URL; no payment was made. Contact and newsletter submissions were mocked locally to verify success behavior; live Netlify delivery was not tested. Existing CMS authentication and publishing require the host's configured account services and were not tested with a signed-in account.

Desktop and mobile homepage/catalog captures are in `previews/`. They are review materials, not pages in the navigation. `VALIDATION.json` records automated browser results.
