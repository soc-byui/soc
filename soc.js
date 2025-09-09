// soc.js

// ===== Scroll-triggered panel animations =====
const panels = document.querySelectorAll(".panel");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active"); // fade in
      } else {
        entry.target.classList.remove("active"); // reset so it can replay
      }
    });
  },
  { threshold: 0.3 }
);

panels.forEach((panel) => observer.observe(panel));


// ===== Orb shimmer in hero (optional) =====
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  // subtle background shift (parallax-like)
  hero.style.backgroundPosition = `center ${scrollY * 0.2}px`;
});
