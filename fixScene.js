function fixSceneDuplication(text) {
  const scenePattern = /на сцене:\s*Сцена о\s([^\n.,:]+)/gi;
  return text.replace(scenePattern, 'на сцене о $1');
}

// Пример: вызывай эту функцию перед выводом отчёта
// const fixedText = fixSceneDuplication(originalText);

// Или применить ко всем элементам с классом "report"
document.addEventListener("DOMContentLoaded", () => {
  const reports = document.querySelectorAll(".report");
  reports.forEach(el => {
    el.innerText = fixSceneDuplication(el.innerText);
  });
});
