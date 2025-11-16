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
