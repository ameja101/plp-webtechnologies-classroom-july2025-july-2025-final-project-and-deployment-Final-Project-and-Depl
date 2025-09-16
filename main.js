/* ===========================
   main.js — FitPick TRX Affiliate Website
=========================== */

// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("main-nav");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  });
}

// ===== Contact Form Validation =====
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email2").value.trim();
    const message = document.getElementById("message").value.trim();
    const msgBox = document.querySelector(".form-msg");

    if (name === "" || email === "" || message === "") {
      msgBox.textContent = "⚠️ Please fill in all fields.";
      msgBox.style.color = "red";
      return;
    }

    if (!validateEmail(email)) {
      msgBox.textContent = "⚠️ Please enter a valid email address.";
      msgBox.style.color = "red";
      return;
    }

    msgBox.textContent = "✅ Thank you! Your message has been sent.";
    msgBox.style.color = "green";
    contactForm.reset();
  });
}

function validateEmail(email) {
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return re.test(email);
}

// ===== Simple Reveal Animation on Scroll =====
const revealElements = document.querySelectorAll(".product-card, .post-card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// Initial call to reveal elements that are already in view
revealOnScroll();