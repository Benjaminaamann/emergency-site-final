/**
 * APE INVASION - Main JavaScript
 */
document.addEventListener("DOMContentLoaded", function () {
  // Modal functionality
  setupModal();

  // Active navigation
  setActiveNavLink();

  // Responsive navigation
  setupBurgerMenu();

  // Smooth scroll
  setupSmoothScroll();
});

/**
 * Setup modal functionality for articles
 */
function setupModal() {
  const modal = document.getElementById("article-modal");
  if (!modal) return;

  const modalBody = document.getElementById("modal-body");
  const closeButton = document.querySelector(".close-button");
  const readMoreButtons = document.querySelectorAll(".read-more");

  // Open modal when clicking "Læs mere" buttons
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const articleId = this.getAttribute("data-article");
      const contentElement = document.getElementById(articleId + "-content");

      if (contentElement) {
        modalBody.innerHTML = contentElement.innerHTML;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent background scrolling
      }
    });
  });

  // Close modal when clicking X button
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      closeModal(modal);
    });
  }

  // Close modal when clicking outside content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModal(modal);
    }
  });
}

/**
 * Close modal and restore scrolling
 */
function closeModal(modal) {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage.includes(link.getAttribute("href")) &&
        link.getAttribute("href") !== "#")
    ) {
      link.classList.add("active");
    }
  });
}

/**
 * Setup burger menu for mobile navigation
 */
function setupBurgerMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  const mainNav = document.querySelector(".main-nav");

  if (burgerMenu && mainNav) {
    burgerMenu.addEventListener("click", function () {
      mainNav.classList.toggle("active");
      burgerMenu.classList.toggle("active");
    });
  }
}

/**
 * Setup smooth scroll for anchor links
 */
function setupSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
