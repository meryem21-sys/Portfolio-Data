// Smooth scroll vers les ancres (#contact, etc.)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", id);
  });
});

// Petit effet d’apparition (cards)
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
},{ threshold: 0.08 });

document.querySelectorAll(".card, .hero").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(8px)";
  el.style.transition = "opacity .5s ease, transform .5s ease";
  obs.observe(el);
});

document.addEventListener("scroll", () => {
  document.querySelectorAll(".in").forEach(el => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  });
}, { passive: true });

// Trigger initial
setTimeout(() => {
  document.querySelectorAll(".card, .hero").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("in");
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}, 50);
