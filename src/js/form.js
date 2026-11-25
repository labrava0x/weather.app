import { getFormattedWeather } from "./weather.data.js";
import { renderWeather } from "./display.js";

const locationForm = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");

let searchSequence = 0;

if (locationForm && locationInput) {
  locationForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const location = locationInput.value.trim();
    if (!location) return;

    const currentSearch = ++searchSequence;
    const loadingPanel = document.getElementById("loading-panel");
    const loadingText = document.getElementById("loading-text");
    const statusEl = document.getElementById("status-message");
    const displayEl = document.getElementById("weather-display");

    if (statusEl) statusEl.textContent = "";
    if (displayEl) displayEl.hidden = true;

    if (loadingText) {
      loadingText.textContent = `DETONATING REQUEST // ${location.toUpperCase()}...`;
    }
    if (loadingPanel) loadingPanel.hidden = false;

    try {
      const weather = await getFormattedWeather(location, "metric");
      if (currentSearch !== searchSequence) return;

      await renderWeather(weather);
    } catch (error) {
      if (currentSearch !== searchSequence) return;

      console.error("Failed to fetch weather:", error);
      if (displayEl) displayEl.hidden = true;
      if (statusEl) {
        statusEl.textContent =
          "Could not load weather for that location. Try again.";
      }
    } finally {
      if (currentSearch === searchSequence && loadingPanel) {
        loadingPanel.hidden = true;
      }
    }
  });
}