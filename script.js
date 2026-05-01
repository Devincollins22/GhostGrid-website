// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Dropdown nav toggle
function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close dropdown when clicking outside
window.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const button = document.querySelector(".dropdown-btn");
  if (menu && button && !button.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
  }
});

// Contact form feedback (for non-Netlify fallback)
const form = document.querySelector("form.contact-form");
if (form && !form.getAttribute("data-netlify")) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Message Sent ✔";
    btn.style.background = "#0a0a0a";
    btn.style.border = "2px solid #00ffaa";
    btn.style.color = "#00ffaa";
    setTimeout(() => {
      btn.textContent = "Send Message →";
      btn.style.background = "#00ffaa";
      btn.style.border = "none";
      btn.style.color = "#030f09";
      form.reset();
    }, 3000);
  });
}
