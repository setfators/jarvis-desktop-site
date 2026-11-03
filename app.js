document.getElementById("year").textContent = new Date().getFullYear();
const config = window.JARVIS_CONFIG || {};
const button = document.getElementById("downloadBtn");
const status = document.getElementById("releaseStatus");
const title = document.getElementById("releaseTitle");
const description = document.getElementById("releaseDescription");
const version = document.getElementById("versionLabel");
const note = document.getElementById("releaseNote");

version.textContent = config.version ? `Версия: ${config.version}` : "Версия: скоро";
if (config.status === "available" && config.downloadUrl) {
  status.textContent = "ДОСТУПНО";
  status.classList.add("available");
  description.textContent = "Установщик J.A.R.V.I.S готов к загрузке.";
  note.textContent = config.releaseNotes || "Последняя опубликованная версия.";
  button.textContent = "Скачать JARVIS";
  button.href = config.downloadUrl;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.classList.remove("disabled");
  button.removeAttribute("aria-disabled");
} else {
  status.textContent = "ГОТОВИТСЯ";
  description.textContent = "Установщик пока не опубликован. Загляни позже за новой версией.";
  note.textContent = "Ссылка на скачивание появится после публикации установщика.";
  button.textContent = "Загрузка скоро";
  button.href = "#";
  button.classList.add("disabled");
  button.setAttribute("aria-disabled", "true");
}