/* =========================================================
   MAVIA CONSULTORIA - Interações
   Arquivo: assets/js/main.js
   ========================================================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");

        if (entry.target.id === "ledgerCard") {
          entry.target.querySelectorAll(".ledger-bar-fill").forEach((bar) => {
            const width = bar.getAttribute("data-w");
            requestAnimationFrame(() => {
              bar.style.width = width + "%";
            });
          });
        }

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll(".reveal, .reveal-stagger").forEach((element) => {
  observer.observe(element);
});
