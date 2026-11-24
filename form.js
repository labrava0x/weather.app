const locationForm = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const location = locationInput.value.trim();
  if (!location) return;

  try {
    const weather = await getFormattedWeather(location);
    console.log("Weather result:", weather);
  } catch (error) {
    console.error("Failed to fetch weather:", error);
  }
});