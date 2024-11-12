// JavaScript for mobile menu toggle and link click
function toggleMobileMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

function closeMobileMenu() {
  const menu = document.getElementById("menu");
  menu.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
});
