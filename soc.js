// Reveal panels on scroll
const panels = document.querySelectorAll(".panel");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  panels.forEach(panel => {
    const panelTop = panel.getBoundingClientRect().top;

    if (panelTop < triggerBottom) {
      panel.classList.add("visible");
    } else {
      panel.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Subtle glowing nav effect
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.textShadow = `0 0 10px #0047ba, 0 0 20px #0047ba`;
  });
  link.addEventListener("mouseleave", () => {
    link.style.textShadow = "none";
  });
});
