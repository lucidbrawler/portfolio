function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  const headerEnd = document.querySelector(".header-end");
  if (!(toggle instanceof HTMLButtonElement) || !(nav instanceof HTMLElement)) return;

  const setOpen = (open: boolean) => {
    nav.classList.toggle("is-open", open);
    headerEnd?.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 861px)").matches) setOpen(false);
  });
}

export function initReveal() {
  const yearEl = document.getElementById("y");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  initMobileNav();

  const selectors = [
    ".section-head",
    ".project",
    ".link-card",
    ".skill-card",
    ".service-card",
    ".about-card",
    ".edu-card",
    ".hire-card",
    ".price-card",
    ".price-table-wrap",
  ];

  const nodes = document.querySelectorAll(selectors.join(", "));
  if (!nodes.length) return;

  const delayParents = document.querySelectorAll(
    ".project-grid, .link-grid, .skills-grid, .services-grid, .price-grid"
  );
  delayParents.forEach((parent) => {
    [...parent.children].forEach((child, i) => {
      if (
        child instanceof HTMLElement &&
        child.matches(".project, .link-card, .skill-card, .service-card, .price-card")
      ) {
        child.classList.add("reveal");
        if (i > 0) child.classList.add("delay-" + Math.min(i, 7));
        if (
          (child.classList.contains("link-card") ||
            child.classList.contains("service-card")) &&
          window.matchMedia("(min-width: 700px)").matches
        ) {
          child.classList.add(i % 2 === 0 ? "from-left" : "from-right");
        }
      }
    });
  });

  nodes.forEach((el) => {
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
  });

  document
    .querySelectorAll(
      ".project.featured, .section-head, .about-card, .edu-card, .hire-card"
    )
    .forEach((el) => el.classList.add("reveal"));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}
