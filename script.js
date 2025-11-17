document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");

  // load saved theme
  const saved = localStorage.getItem("pl-theme");
  if (saved === "light") {
    body.classList.add("light-mode");
    if (toggle) toggle.checked = true;
  }

  if (!toggle) return;

  toggle.addEventListener("change", () => {
    const isLight = toggle.checked;
    if (isLight) {
      body.classList.add("light-mode");
      localStorage.setItem("pl-theme", "light");
    } else {
      body.classList.remove("light-mode");
      localStorage.setItem("pl-theme", "dark");
    }
  });
});
// ===== Scroll Progress Bar =====
const progressBar = document.createElement("div");
progressBar.id = "progress-bar";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});
