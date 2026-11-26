import "../styles.css";
import "./form.js";

export { renderWeather } from "./display.js";

export function formatTemp(tempC, useFahrenheit = false) {
  if (typeof tempC !== "number" || Number.isNaN(tempC)) return "--";
  const value = useFahrenheit ? (tempC * 9) / 5 + 32 : tempC;
  const unit = useFahrenheit ? "°F" : "°C";
  return `${Math.round(value * 10) / 10}${unit}`;
}

export function formatWind(windKph, useFahrenheit = false) {
  if (typeof windKph !== "number" || Number.isNaN(windKph)) return "--";
  if (useFahrenheit) {
    const mph = Math.round(windKph * 0.621371 * 10) / 10;
    return `${mph} mph`;
  }
  return `${Math.round(windKph * 10) / 10} km/h`;
}

export function formatHumidity(humidity) {
  if (typeof humidity !== "number" || Number.isNaN(humidity)) return "HUMIDITY: --";
  return `HUMIDITY: ${Math.round(humidity)}%`;
}

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled async error:", event.reason);
});
function initObserverTrail() {
  const clueBtn = document.getElementById("observer-clue-btn");
  const whisperEl = document.getElementById("observer-whisper");

  if (!clueBtn || !whisperEl) return;

  const lines = [
    "If you ever find your heart to be weathering, look for the storm that is always raging on. That is the first step to clear the skies",
    "The rain whispers after the mist... what do you see?",
    "Thunder I felt, but shelter I did not find, blizzard, or hurricane to always detonate"
  ];

  let index = 0;

  clueBtn.addEventListener("click", () => {
    if (index < lines.length) {
      whisperEl.textContent = lines[index];
      whisperEl.hidden = false;
      clueBtn.setAttribute("aria-expanded", "true");
      index += 1;
    } else {
      whisperEl.hidden = true;
      whisperEl.textContent = "";
      clueBtn.setAttribute("aria-expanded", "false");
      index = 0;
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initObserverTrail);
} else {
  initObserverTrail();
}