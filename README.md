# Teejaye Deloach HTML Website

## Launch checklist
1. Upload the contents of this folder to your web host.
2. In `assets/js/main.js`, set the contact form endpoint, newsletter endpoint, and checkout links.
3. Update product prices and format availability in the `products` object in `assets/js/main.js`.
4. Replace placeholder social links (`href="#"`) with real profiles.
5. Review Privacy Policy and Terms against your actual host, analytics, payment processor, shipping, refunds, and email platform.
6. Point the domain to the host and force HTTPS.

## Direct sales
This is a static HTML/CSS/JS storefront. It intentionally does not collect card data. Add hosted Stripe Payment Links, PayPal checkout URLs, or another secure hosted checkout provider. For digital files, use a payment/fulfillment service that provides protected delivery instead of placing downloadable ebook files in the public website folder.

## Images
Large PNG photographs and the logo were converted to WebP at high quality. Original files were not modified.

## Blog / From the Writing Desk
The blog is now data-driven and does not require editing `writing-desk.html`.

**To edit, add, remove, publish, or unpublish blog posts, open:**
`assets/js/posts.js`

The file contains a large comment block at the top with step-by-step instructions. Each post has:
- `slug` - the URL identifier (must be unique)
- `title`
- `category`
- `date` in YYYY-MM-DD format
- `featuredImage` - optional path to an image, or leave it blank
- `excerpt`
- `published` - `true` to show it, `false` to hide it
- `content` - the complete article body using HTML

`writing-desk.html` automatically lists every published post and creates category filters. The Read More links open `post.html?slug=YOUR-POST-SLUG`. Do not manually create a separate HTML page for each article.
