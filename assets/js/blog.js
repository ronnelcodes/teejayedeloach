// Blog rendering logic. You normally do NOT need to edit this file.
(function () {
  const posts = (window.TEEJAYE_POSTS || (typeof TEEJAYE_POSTS !== 'undefined' ? TEEJAYE_POSTS : []))
    .filter(post => post.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = date => new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  }).format(new Date(date + 'T12:00:00'));

  function escapeHTML(value = '') {
    return value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  }

  function renderListing() {
    const grid = document.querySelector('[data-blog-grid]');
    if (!grid) return;
    const filterWrap = document.querySelector('[data-blog-filters]');
    const categories = ['All', ...new Set(posts.map(post => post.category))];

    if (filterWrap) {
      filterWrap.innerHTML = categories.map((category, index) =>
        `<button class="filter-btn${index === 0 ? ' active' : ''}" type="button" data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>`
      ).join('');
      filterWrap.addEventListener('click', event => {
        const button = event.target.closest('[data-category]');
        if (!button) return;
        filterWrap.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.category;
        draw(category === 'All' ? posts : posts.filter(post => post.category === category));
      });
    }

    function draw(items) {
      grid.innerHTML = items.length ? items.map(post => `
        <article class="card blog-card">
          ${post.featuredImage ? `<a class="card-media" href="post.html?slug=${encodeURIComponent(post.slug)}"><img src="${escapeHTML(post.featuredImage)}" alt=""></a>` : ''}
          <div class="card-body">
            <div class="meta">${escapeHTML(post.category)} · ${formatDate(post.date)}</div>
            <h3><a href="post.html?slug=${encodeURIComponent(post.slug)}">${escapeHTML(post.title)}</a></h3>
            <p>${escapeHTML(post.excerpt)}</p>
            <a class="text-link" href="post.html?slug=${encodeURIComponent(post.slug)}">Read more →</a>
          </div>
        </article>`).join('') : '<p>No posts are published in this category yet.</p>';
    }
    draw(posts);
  }

  function renderPost() {
    const article = document.querySelector('[data-blog-post]');
    if (!article) return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    const post = posts.find(item => item.slug === slug);

    if (!post) {
      document.title = 'Post Not Found | Teejaye Deloach';
      article.innerHTML = `
        <div class="article-shell article-not-found">
          <div class="eyebrow">From the Writing Desk</div>
          <h1>That post could not be found.</h1>
          <p>The link may be outdated, or the post may not be published yet.</p>
          <a class="btn teal" href="writing-desk.html">Back to the blog →</a>
        </div>`;
      return;
    }

    document.title = `${post.title} | Teejaye Deloach`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', post.excerpt);
    const postUrl = `https://teejayedeloach.com/post.html?slug=${encodeURIComponent(post.slug)}`;
    const imageUrl = post.featuredImage ? new URL(post.featuredImage, 'https://teejayedeloach.com/').href : 'https://teejayedeloach.com/assets/images/social-share.webp';
    const setMeta = (selector, value) => document.querySelector(selector)?.setAttribute('content', value);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', postUrl);
    setMeta('meta[property="og:type"]', 'article');
    setMeta('meta[property="og:title"]', document.title);
    setMeta('meta[property="og:description"]', post.excerpt);
    setMeta('meta[property="og:url"]', postUrl);
    setMeta('meta[property="og:image"]', imageUrl);
    setMeta('meta[name="twitter:title"]', document.title);
    setMeta('meta[name="twitter:description"]', post.excerpt);
    setMeta('meta[name="twitter:image"]', imageUrl);
    const structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.textContent = JSON.stringify({
      '@context':'https://schema.org','@type':'BlogPosting',headline:post.title,
      description:post.excerpt,datePublished:post.date,mainEntityOfPage:postUrl,
      image:imageUrl,author:{'@type':'Person',name:'Teejaye Deloach',url:'https://teejayedeloach.com/'}
    });
    document.head.appendChild(structuredData);

    article.innerHTML = `
      <div class="article-shell">
        <a class="article-back" href="writing-desk.html">← From the Writing Desk</a>
        <div class="meta">${escapeHTML(post.category)} · ${formatDate(post.date)}</div>
        <h1>${escapeHTML(post.title)}</h1>
        <p class="article-deck">${escapeHTML(post.excerpt)}</p>
        ${post.featuredImage ? `<img class="article-featured" src="${escapeHTML(post.featuredImage)}" alt="">` : ''}
        <div class="article-content">${post.content}</div>
        <div class="article-end">
          <p><strong>Thanks for reading.</strong> Explore more notes from the writing desk.</p>
          <div class="button-row"><a class="btn teal" href="writing-desk.html">More posts</a></div>
        </div>
      </div>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderListing();
    renderPost();
  });
})();
