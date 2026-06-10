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

