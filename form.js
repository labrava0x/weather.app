const locationForm = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const location = locationInput.value.trim();
  if (!location) return;

  const statusEl = document.getElementById("status-message");
  const displayEl = document.getElementById("weather-display");

  if (statusEl) statusEl.textContent = "Loading weather...";

  try {
    const weather = await getFormattedWeather(location, "metric");
    if (typeof window.renderWeather === "function") {
      await window.renderWeather(weather);
    }
  } catch (error) {
    console.error("Failed to fetch weather:", error);
    if (displayEl) displayEl.hidden = true;
    if (statusEl) {
      statusEl.textContent = "Could not load weather for that location. Try again.";
    }
  }
});