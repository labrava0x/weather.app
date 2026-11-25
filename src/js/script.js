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