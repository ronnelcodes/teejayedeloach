// ================================================================
// TEEJAYE DELOACH BLOG POSTS
// ================================================================
// THIS IS THE MAIN FILE YOU EDIT WHEN ADDING OR CHANGING BLOG POSTS.
//
// To add a post:
// 1. Copy one complete post object below, including the opening { and closing }.
// 2. Paste it at the TOP of the TEEJAYE_POSTS array.
// 3. Give it a UNIQUE slug using lowercase words separated by hyphens.
// 4. Change title, category, date, excerpt and content.
// 5. Set published: true when you want it visible.
//
// IMPORTANT:
// - Keep a comma between post objects.
// - The "content" field accepts normal HTML such as <p>, <h2>, <ul>, etc.
// - Do not use straight backticks (`) inside article text because the content
//   itself is wrapped in backticks.
// ================================================================

const TEEJAYE_POSTS = [
  {
    slug: 'why-i-write-the-stories-i-needed',
    title: 'Why I Write the Stories I Needed',
    category: 'Writing Life',
    date: '2026-08-01',
    featuredImage: '',
    excerpt: 'Every book begins with a question, a feeling, or a moment that refuses to let me go.',
    published: true,
    content: `
      <p>Some stories begin with a plot. Mine usually begin with a feeling.</p>
      <p>It may be a character who has spent too much time hiding, a relationship that deserves another chance, or a question about what it means to belong when the world has already decided who you should be. Those are the ideas that stay with me long enough to become books.</p>
      <h2>Writing toward honesty</h2>
      <p>I am interested in romance because love has a way of exposing everything we would rather keep protected. It asks characters to be known, not simply admired. That tension gives me room to write about identity, family, faith, fear, healing, and the difficult work of choosing an honest life.</p>
      <p>The stories I needed were the ones that allowed LGBTQ+ characters to be complicated, hopeful, loved, and fully human. Those are the stories I want to keep putting into the world.</p>
    `
  },
  {
    slug: 'faith-identity-and-the-stories-that-heal',
    title: 'Faith, Identity, and the Stories That Heal',
    category: 'Faith & Heart',
    date: '2026-07-22',
    featuredImage: '',
    excerpt: 'What it means to write characters who are allowed to wrestle honestly with belief and belonging.',
    published: true,
    content: `
      <p>Faith is rarely simple, and neither is identity. I am not interested in pretending otherwise on the page.</p>
      <p>When faith appears in my fiction, I want it to feel lived in. That means room for questions, frustration, tenderness, community, disappointment, hope, and change. Not every Teejaye Deloach novel will center faith, but when it belongs to a character's story, I want to treat it with honesty.</p>
      <h2>Characters deserve room to wrestle</h2>
      <p>I love characters who are still figuring things out. They can believe deeply and still have questions. They can carry hurt and still hope. They can want love while wondering whether they are allowed to have it.</p>
      <p>Healing on the page does not mean erasing what happened. Sometimes it simply means a character finally discovering that the future can be larger than the pain that shaped the past.</p>
    `
  },
  {
    slug: 'borrowed-for-the-holidays-playlist',
    title: 'The Borrowed for the Holidays Playlist',
    category: 'Playlists & Vibes',
    date: '2026-07-12',
    featuredImage: '',
    excerpt: 'Music, Christmas atmosphere, and the emotional palette behind the story.',
    published: true,
    content: `
      <p>Every book has a sound before it has a finished manuscript.</p>
      <p>For <em>Borrowed for the Holidays</em>, I wanted music that carried warmth without becoming sugary, nostalgia without feeling trapped in the past, and romance with just enough ache underneath it.</p>
      <h2>The atmosphere</h2>
      <p>Think bookstore lights glowing after dark, coffee cooling beside an open book, a Texas town dressed for Christmas, and two people realizing that the history between them may not be as finished as they believed.</p>
      <p>I use playlists less as a literal soundtrack and more as an emotional compass. If a song makes me feel the same thing I want a scene to feel like, it belongs in the writing room.</p>
    `
  },
  {
    slug: 'building-georgetown-at-christmas',
    title: 'Building Georgetown at Christmas',
    category: 'Behind the Scenes',
    date: '2026-06-28',
    featuredImage: '',
    excerpt: 'How setting becomes another character in a romance.',
    published: true,
    content: `
      <p>A romance can happen anywhere, but the best settings change what the romance feels like.</p>
      <p>For <em>Borrowed for the Holidays</em>, Christmas in Georgetown needed to feel intimate, warm, familiar, and just a little dangerous for two people carrying unfinished history.</p>
      <h2>Place creates pressure</h2>
      <p>A small town means memories are everywhere. A bookstore can be sanctuary and confrontation at the same time. Family traditions can comfort one character while making another feel trapped. Christmas amplifies all of it.</p>
      <p>That is why I think of setting as more than backdrop. The place should constantly ask something of the characters.</p>
    `
  },
  {
    slug: 'writing-characters-who-feel-real',
    title: 'Writing Characters Who Feel Real',
    category: 'Books & Stories',
    date: '2026-06-10',
    featuredImage: '',
    excerpt: 'Why flaws, contradictions, and quiet decisions matter more than perfection.',
    published: true,
    content: `
      <p>I do not need characters to be perfect. I need them to make sense.</p>
      <p>Real people contradict themselves. We can be brave in one part of our lives and terrified in another. We can know what we should do and still avoid doing it. We can love someone and still hurt them.</p>
      <h2>Contradiction creates character</h2>
      <p>The most interesting question is rarely, “Is this person good?” It is, “Why does this person make this choice, and what will it cost them?”</p>
      <p>Romance becomes more meaningful when love does not magically fix people. It gives them a reason to become more honest about who they already are.</p>
    `
  },
  {
    slug: 'what-photography-taught-me-about-writing',
    title: 'What Photography Taught Me About Writing',
    category: 'Photography',
    date: '2026-05-25',
    featuredImage: '',
    excerpt: 'Light, framing, negative space, and noticing what everyone else walks past.',
    published: true,
    content: `
      <p>Photography taught me to pay attention before I ever knew how useful that would become for fiction.</p>
      <p>A photograph is not only about what is inside the frame. It is about what you choose to leave outside it, where the light falls, what the eye notices first, and what the viewer discovers a second later.</p>
      <h2>Writing has a frame too</h2>
      <p>Scenes work the same way. Detail has to be selected. Silence can carry as much information as dialogue. The thing a character refuses to look at may be more important than the thing directly in front of them.</p>
      <p>Photography trained me to look for the small detail that tells the larger truth. I try to bring that instinct to every page.</p>
    `
  }
];

window.TEEJAYE_POSTS = TEEJAYE_POSTS;
