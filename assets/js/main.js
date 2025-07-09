/* ===== Helpers ===== */
const select = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);

/* ===== Dark‑mode toggle ===== */
const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") document.documentElement.classList.add("dark");
select("#themeToggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
});

/* ===== Dynamic year ===== */
select("#year").textContent = new Date().getFullYear();

/* ===== Navbar scroll shadow ===== */
window.addEventListener("scroll", () => {
  select("#navbar").classList.toggle("scrolled", window.scrollY > 60);
});

/* ===== GSAP Animations ===== */
gsap.registerPlugin(ScrollTrigger);

// Intro timeline
const tl = gsap.timeline();
tl.from(".headline", { y: 80, opacity: 0, duration: 1 });
tl.from(".sub", { y: 50, opacity: 0, duration: 0.8 }, "-0.6");
tl.from(".social a", { y: 30, opacity: 0, stagger: 0.1, duration: 0.5 }, "-0.4");

// Blobs parallax
$$(".blob").forEach((blob, i) => {
  gsap.to(blob, {
    yPercent: i % 2 === 0 ? 30 : -30,
    rotation: i % 2 === 0 ? 45 : -45,
    ease: "none",
    scrollTrigger: {
      trigger: blob,
      scrub: 1,
    },
  });
});

// Fade‑in sections
$$("section.container").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
  });
});

/* ===== Blog feed (fetch RSS → JSON via api.rss2json.com) ===== */
fetch("https://api.rss2json.com/v1/api.json?rss_url=https://blog.zakaria.dev/feed.xml")
  .then(res => res.json())
  .then(({ items }) => {
    const posts = items.slice(0, 6) // latest 6
      .map(item => `
        <article class="card">
          <img src="${item.thumbnail || 'https://picsum.photos/600/400?random=' + Math.random()}" alt="${item.title}" />
          <div class="content">
            <h3>${item.title}</h3>
            <p>${item.description.replace(/<[^>]*>?/gm, '').slice(0, 120)}…</p>
            <a class="read" href="${item.link}" target="_blank">Read More →</a>
          </div>
        </article>`
      ).join("");
    select("#posts").innerHTML = posts;
  })
  .catch(() => (select("#posts").innerHTML = "<p>Unable to fetch posts at the moment.</p>"));