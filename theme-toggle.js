document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");

  // Проверяем localStorage при загрузке
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }

  // Обработчик переключателя
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});
