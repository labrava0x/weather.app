const locationForm = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const location = locationInput.value.trim();
  if (!location) return;

  statusMessage.textContent = "Loading weather...";

  try {
    const weather = await getFormattedWeather(location, "metric");
    renderWeather(weather);
  } catch (error) {
    console.error("Failed to fetch weather:", error);
    weatherDisplay.hidden = true;
    statusMessage.textContent = "Could not load weather for that location. Try again.";
  }
});