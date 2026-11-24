let currentWeather = null;
let unit = "C"; // "C" for Celsius, "F" for Fahrenheit

const unitToggle = document.getElementById("unit-toggle");
const statusMessage = document.getElementById("status-message");
const weatherDisplay = document.getElementById("weather-display");

function toDisplayTemp(tempInCelsius) {
  if (tempInCelsius === null || tempInCelsius === undefined) return "--";
  const value = unit === "C" ? tempInCelsius : (tempInCelsius * 9) / 5 + 32;
  return `${Math.round(value)}°${unit}`;
}

function renderWeather(data) {
  currentWeather = data;

  document.getElementById("weather-location").textContent = data.location;
  document.getElementById("weather-condition").textContent = data.condition;
  document.getElementById("weather-temp").textContent =
    `Temperature: ${toDisplayTemp(data.temp)}`;
  document.getElementById("weather-feels-like").textContent =
    `Feels like: ${toDisplayTemp(data.feelsLike)}`;
  document.getElementById("weather-humidity").textContent =
    data.humidity !== null ? `Humidity: ${Math.round(data.humidity)}%` : "Humidity: --";
  document.getElementById("weather-wind").textContent =
    data.windSpeed !== null
      ? `Wind: ${Math.round(data.windSpeed)} ${unit === "C" ? "km/h" : "mph"}`
      : "Wind: --";
  document.getElementById("weather-high-low").textContent =
    `High: ${toDisplayTemp(data.high)} / Low: ${toDisplayTemp(data.low)}`;

  const forecastContainer = document.getElementById("forecast-container");
  forecastContainer.replaceChildren();

  data.forecast.forEach((day) => {
    const dayCard = document.createElement("div");
    dayCard.className = "forecast-day";

    const dateEl = document.createElement("p");
    dateEl.textContent = day.date;

    const condEl = document.createElement("p");
    condEl.textContent = day.conditions;

    const tempsEl = document.createElement("p");
    tempsEl.textContent = `${toDisplayTemp(day.tempMax)} / ${toDisplayTemp(day.tempMin)}`;

    dayCard.append(dateEl, condEl, tempsEl);
    forecastContainer.appendChild(dayCard);
  });

  weatherDisplay.hidden = false;
  statusMessage.textContent = "";
}

unitToggle.addEventListener("click", () => {
  unit = unit === "C" ? "F" : "C";
  unitToggle.textContent = unit === "C" ? "Switch to °F" : "Switch to °C";
  unitToggle.setAttribute("aria-pressed", String(unit === "F"));

  if (currentWeather) {
    renderWeather(currentWeather);
  }
});