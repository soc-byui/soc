// soc.js

// ===== Scroll-triggered panel animations =====
const panels = document.querySelectorAll(".panel");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.1 } // smaller threshold triggers when a small part is visible
);

panels.forEach((panel) => observer.observe(panel));


// Animate main steps in Path section
const stepItems = document.querySelectorAll(".steps > li");

const stepsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.1 }
);

stepItems.forEach(item => stepsObserver.observe(item));



// ===== Orb shimmer in hero (optional) =====
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  // subtle background shift (parallax-like)
  hero.style.backgroundPosition = `center ${scrollY * 0.2}px`;
});
