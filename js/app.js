/**
 * NutriLife — Application Controller
 * Shared UI: theme, navigation, scroll reveal, scroll-to-top
 * Page-specific: age groups (age-groups.html), food library (food-library.html)
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initScrollReveal();
  initScrollToTop();
  initAboutCarousel();
  initAgeGroups();
  initFoodLibrary();
});

/* ============================================================
   THEME TOGGLE (Dark / Light Mode)
   ============================================================ */
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const saved = localStorage.getItem("nutrilife-theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }

  updateThemeLabel();

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("nutrilife-theme", next);
    updateThemeLabel();
  });
}

function updateThemeLabel() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

/* ============================================================
   NAVIGATION — Sticky Header & Mobile Menu
   ============================================================ */
function initNavigation() {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector(".nav");
  const navMenu = document.getElementById("nav-menu");
  const navOverlay = document.getElementById("nav-overlay");

  if (!header || !navToggle || !nav || !navMenu) return;

  const closeMobileMenu = () => {
    nav.classList.remove("active");
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
    if (navOverlay) {
      navOverlay.classList.remove("active");
      navOverlay.setAttribute("aria-hidden", "true");
    }
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
  };

  const openMobileMenu = () => {
    nav.classList.add("active");
    navMenu.classList.add("active");
    navToggle.classList.add("active");
    if (navOverlay) {
      navOverlay.classList.add("active");
      navOverlay.setAttribute("aria-hidden", "false");
    }
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation menu");
    document.body.classList.add("menu-open");
  };

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  navToggle.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMobileMenu);
  }

  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && nav.classList.contains("active")) {
      closeMobileMenu();
    }
  });
}

/* ============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  reveals.forEach(el => observer.observe(el));
}

/* ============================================================
   AGE GROUP TABS — age-groups.html
   ============================================================ */
/* ============================================================
   ABOUT PAGE - Automatic nutrition card carousel
   ============================================================ */
function initAboutCarousel() {
  const track = document.querySelector(".about-carousel .about-cards");
  if (!track) return;

  const preferredOrder = [
    "Macronutrients",
    "Micronutrients",
    "Hydration",
    "Dietary Balance",
    "Growth & Tissue Repair",
    "Heart Health",
    "Brain Development & Function",
    "Bone Health"
  ];

  const cards = Array.from(track.children);
  const orderedCards = preferredOrder
    .map(title => cards.find(card => card.querySelector("h3")?.textContent.trim() === title))
    .filter(Boolean);
  const remainingCards = cards.filter(card => !orderedCards.includes(card));

  [...orderedCards, ...remainingCards].forEach(card => {
    card.classList.add("active");
    track.appendChild(card);
  });

  let isSliding = false;

  const rotateCards = () => {
    if (isSliding || track.children.length < 2) return;
    isSliding = true;
    const firstCard = track.firstElementChild;

    track.classList.add("is-sliding");

    const finishSlide = (event) => {
      if (event.propertyName !== "transform") return;
      track.removeEventListener("transitionend", finishSlide);
      track.style.transition = "none";
      track.appendChild(firstCard);
      track.classList.remove("is-sliding");
      track.offsetHeight;
      track.style.transition = "";
      isSliding = false;
    };

    track.addEventListener("transitionend", finishSlide);
  };

  setInterval(rotateCards, 3800);
}

function initAgeGroups() {
  const tabs = document.querySelectorAll(".age-explorer-card, .age-tab");
  const panel = document.getElementById("age-panel");

  if (!panel || !tabs.length || typeof NUTRILIFE_DATA === "undefined") return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => switchAgeTab(tab));
    tab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        switchAgeTab(tab);
      }
    });
  });

  function switchAgeTab(tab) {
    const ageId = tab.getAttribute("data-age");

    tabs.forEach(t => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });

    panel.style.opacity = "0";
    panel.style.transform = "translateY(12px)";

    setTimeout(() => {
      renderAgePanel(ageId);
      panel.style.opacity = "1";
      panel.style.transform = "translateY(0)";
    }, 180);
  }

  renderAgePanel("children");
}

function renderAgePanel(ageId) {
  const panel = document.getElementById("age-panel");
  const data = NUTRILIFE_DATA.ageGroups[ageId];
  if (!data || !panel) return;

  const requirementsHTML = data.requirements.map(req => `
    <div class="age-req-item">
      <div class="age-req-label">${req.label}</div>
      <div class="age-req-value">${req.value}</div>
      <div class="age-req-bar">
        <div class="age-req-fill" style="width: ${req.percentage}%"></div>
      </div>
    </div>
  `).join("");

  const nutrientsHTML = data.keyNutrients.map(n => `
    <span class="nutrient-tag"><strong>${n.name}</strong> ${n.purpose}</span>
  `).join("");

  const deficienciesHTML = data.commonDeficiencies.map(d => `
    <div class="def-warning"><strong>${d.name}:</strong> ${d.details}</div>
  `).join("");

  const foodsHTML = data.recommendedFoods.map(f => `
    <div class="food-mini"><strong>${f.name}</strong> ${f.role}</div>
  `).join("");

  panel.innerHTML = `
    <div class="age-panel-header">
      <span class="age-panel-icon">${data.icon}</span>
      <div>
        <h3>${data.title} <small style="font-weight:500;color:var(--text-muted)">(${data.ageRange})</small></h3>
        <p class="age-panel-tagline">${data.tagline}</p>
      </div>
    </div>
    <div class="age-panel-body">
      <div>
        <p>${data.description}</p>
        <h4 style="margin-top:1.25rem;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;">Daily Requirements</h4>
        <div class="age-req-grid">${requirementsHTML}</div>
      </div>
      <div>
        <div class="age-side-section">
          <h4>Priority Nutrients</h4>
          <div class="nutrient-tags">${nutrientsHTML}</div>
        </div>
        <div class="age-side-section">
          <h4>Common Deficiencies</h4>
          ${deficienciesHTML}
        </div>
        <div class="age-side-section">
          <h4>Recommended Foods</h4>
          <div class="food-grid-mini">${foodsHTML}</div>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   FOOD LIBRARY — food-library.html
   ============================================================ */
function initFoodLibrary() {
  const grid = document.getElementById("food-library-grid");
  const filtersEl = document.getElementById("library-filters");
  const searchInput = document.getElementById("food-search");
  const countEl = document.getElementById("library-count");
  const emptyEl = document.getElementById("library-empty");

  if (!grid || typeof NUTRILIFE_DATA === "undefined") return;

  let activeCategory = "all";
  let searchQuery = "";

  /* Render category filter buttons */
  filtersEl.innerHTML = NUTRILIFE_DATA.foodCategories.map(cat => `
    <button class="library-filter${cat.id === "all" ? " active" : ""}" role="tab" aria-selected="${cat.id === "all"}" data-category="${cat.id}">
      ${cat.icon} ${cat.label}
    </button>
  `).join("");

  filtersEl.querySelectorAll(".library-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.getAttribute("data-category");
      filtersEl.querySelectorAll(".library-filter").forEach(b => {
        const isActive = b === btn;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-selected", isActive);
      });
      renderFoods();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value.trim().toLowerCase();
      renderFoods();
    });
  }

  function getFilteredFoods() {
    return NUTRILIFE_DATA.foodLibrary.filter(food => {
      const matchesCategory = activeCategory === "all" || food.category === activeCategory;
      const searchText = [
        food.name,
        food.benefits,
        food.serving,
        ...food.nutrients,
        ...food.bestFor
      ].join(" ").toLowerCase();
      const matchesSearch = !searchQuery || searchText.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }

  function renderFoods() {
    const foods = getFilteredFoods();

    if (countEl) {
      countEl.textContent = `Showing ${foods.length} of ${NUTRILIFE_DATA.foodLibrary.length} foods`;
    }

    if (emptyEl) {
      emptyEl.classList.toggle("hidden", foods.length > 0);
    }

    grid.innerHTML = foods.map(food => `
      <article class="food-lib-card glass-card reveal">
        <div class="food-lib-header">
          <span class="food-lib-icon">${food.icon}</span>
          <div>
            <h3>${food.name}</h3>
            <span class="food-lib-category">${formatCategory(food.category)}</span>
          </div>
        </div>
        <p class="food-lib-benefits">${food.benefits}</p>
        <div class="food-lib-nutrients">
          ${food.nutrients.map(n => `<span class="nutrient-badge">${n}</span>`).join("")}
        </div>
        <div class="food-lib-meta">
          <div><strong>Serving:</strong> ${food.serving}</div>
          <div><strong>Best for:</strong> ${food.bestFor.join(", ")}</div>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".reveal").forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      }, { threshold: 0.08 });
      observer.observe(el);
    });
  }

  function formatCategory(cat) {
    const found = NUTRILIFE_DATA.foodCategories.find(c => c.id === cat);
    return found ? found.label : cat;
  }

  renderFoods();
}

/* ============================================================
   SCROLL TO TOP BUTTON
   ============================================================ */
function initScrollToTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
