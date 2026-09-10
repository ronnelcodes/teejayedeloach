# Teejaye Deloach HTML Website

## Launch checklist
1. Upload the contents of this folder to your web host.
2. In `assets/js/main.js`, set the checkout links.
3. Update product prices and format availability in the `products` object in `assets/js/main.js`.
4. Replace placeholder social links (`href="#"`) with real profiles.
5. Review Privacy Policy and Terms against your actual host, analytics, payment processor, shipping, and refund practices.
6. Point the domain to the host and force HTTPS.

## Direct sales
This is a static HTML/CSS/JS storefront. It intentionally does not collect card data. Closeted Hearts checkout uses a secure Stripe-hosted Payment Link configured in `assets/js/main.js`. For future products, use hosted checkout links rather than placing card handling or downloadable files in the public website folder.

## Contact form
The Contact page uses Netlify Forms and submits without leaving the page. After deploying the site, open the Netlify project dashboard, go to **Forms**, enable form detection, and redeploy once. Submissions will appear under the form named **contact**. Add an email alert under **Configuration > Notifications > Form submission notifications** if you want every new message forwarded to your inbox.

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

## Newsletter
The newsletter page, signup forms, navigation links, calls to action, configuration, and sitemap entry were removed on August 17, 2026. The footer now directs readers to the Writing Desk instead.
