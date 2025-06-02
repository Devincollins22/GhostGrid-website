// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Back to Top button
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  if (topBtn) {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  }
};

topBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});