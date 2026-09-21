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
The seven author illustrations are optimized WebP files in `assets/images/` and are distributed across the Home, About, Books, Writing Desk, Shop, and Contact pages.

## Design system
The visual system is controlled in `assets/css/styles.css`. The palette is based on the MLM pride flag: deep green, turquoise, mint, white, light blue, indigo, and purple.

## Private Blog Manager
The site includes a private visual editor at:

`https://teejayedeloach.com/admin/`

It uses Decap CMS to provide a WordPress-style writing screen with separate entries for each post. The editor includes normal fields for the title, category, date, featured image, excerpt, draft status, and a rich-text post body. It can upload images, save drafts, and publish through GitHub without editing HTML, JSON, Markdown, or JavaScript. Readers do not see the admin page in the navigation, and search engines are instructed not to index it.

Each post is stored separately in `content/posts/`. During deployment, `scripts/build-content.mjs` automatically assembles the files into `content/posts.json` for the public Writing Desk. Do not edit the generated `content/posts.json` manually.

### One-time Netlify setup
1. Push this complete website to the GitHub repository and wait for Netlify to deploy it.
2. In Netlify, open the Teejaye Deloach project.
3. Open **Identity** in the project sidebar and enable Identity.
4. Under Identity registration preferences, select **Invite only**.
5. Under **Services > Git Gateway**, enable Git Gateway.
6. Invite your own email address under the Identity users section.
7. Open the invitation email, create your password, and then visit `https://teejayedeloach.com/admin/`.

To post, open **From the Writing Desk**, choose **New Blog Post**, complete the fields, write in the visual editor, turn on **Published**, and save. The CMS commits the change to GitHub and Netlify rebuilds the public blog automatically.

`assets/js/posts.js` remains only as an emergency fallback if `content/posts.json` cannot load.

## Newsletter
The newsletter page, signup forms, navigation links, calls to action, configuration, and sitemap entry were removed on August 17, 2026. The footer now directs readers to the Writing Desk instead.
