import { getWeatherIconUrl } from "../icons/icons.js";
import { formatTemp, formatWind, formatHumidity } from "./script.js";

const unitToggleBtn = document.getElementById("unit-toggle");
const displaySection = document.getElementById("weather-display");
const statusEl = document.getElementById("status-message");

const locationEl = document.getElementById("weather-location");
const iconEl = document.getElementById("weather-icon");
const conditionEl = document.getElementById("weather-condition");
const tempEl = document.getElementById("weather-temp");
const feelsLikeEl = document.getElementById("weather-feels-like");
const humidityEl = document.getElementById("weather-humidity");
const windEl = document.getElementById("weather-wind");
const highLowEl = document.getElementById("weather-high-low");
const forecastContainer = document.getElementById("forecast-container");

let currentWeather = null;
let useFahrenheit = false;
let renderSequence = 0;

function renderForecast(forecastDays = []) {
  if (!forecastContainer) return;
  forecastContainer.replaceChildren();

  if (!Array.isArray(forecastDays)) return;

  forecastDays.forEach((day) => {
    const card = document.createElement("article");
    card.className = "forecast-day";

    const dateHeading = document.createElement("h3");
    dateHeading.textContent = day?.date || "--";

    const dayIconUrl = getWeatherIconUrl(day?.icon);
    const dayIcon = document.createElement("img");
    dayIcon.className = "forecast-icon";
    dayIcon.width = 36;
    dayIcon.height = 36;
    if (dayIconUrl) {
      dayIcon.src = dayIconUrl;
      dayIcon.alt = day?.conditions || day?.icon || "Forecast icon";
    }

    const condText = document.createElement("p");
    condText.textContent = day?.conditions || "";

    const rangeText = document.createElement("p");
    rangeText.textContent = `HI ${formatTemp(day?.tempMax, useFahrenheit)} / LO ${formatTemp(day?.tempMin, useFahrenheit)}`;

    if (dayIconUrl) {
      card.append(dateHeading, dayIcon, condText, rangeText);
    } else {
      card.append(dateHeading, condText, rangeText);
    }
    forecastContainer.appendChild(card);
  });
}

function paintWeather(weather) {
  if (!weather) return;

  if (locationEl) locationEl.textContent = weather.location || "UNKNOWN SECTOR";
  if (conditionEl) conditionEl.textContent = weather.condition || "--";
  if (tempEl) tempEl.textContent = formatTemp(weather.temp, useFahrenheit);
  if (feelsLikeEl) {
    feelsLikeEl.textContent = `FEELS LIKE: ${formatTemp(weather.feelsLike, useFahrenheit)}`;
  }
  if (humidityEl) {
    humidityEl.textContent = formatHumidity(weather.humidity);
  }
  if (windEl) {
    windEl.textContent = `WIND: ${formatWind(weather.windSpeed, useFahrenheit)}`;
  }
  if (highLowEl) {
    highLowEl.textContent = `MAX ${formatTemp(weather.high, useFahrenheit)} // MIN ${formatTemp(weather.low, useFahrenheit)}`;
  }

  renderForecast(weather.forecast);
  if (displaySection) displaySection.hidden = false;
  if (statusEl) statusEl.textContent = "";
}

export async function renderWeather(weather) {
  const currentRender = ++renderSequence;
  currentWeather = weather;

  paintWeather(weather);

  if (!iconEl) return;

  const iconUrl = getWeatherIconUrl(weather?.icon);
  if (currentRender !== renderSequence) return;

  if (iconUrl) {
    iconEl.src = iconUrl;
    iconEl.alt = weather.condition || weather.icon || "Weather icon";
    iconEl.width = 56;
    iconEl.height = 56;
    iconEl.hidden = false;
  } else {
    iconEl.removeAttribute("src");
    iconEl.alt = "";
    iconEl.hidden = true;
  }
}

if (unitToggleBtn) {
  unitToggleBtn.addEventListener("click", async () => {
    useFahrenheit = !useFahrenheit;
    unitToggleBtn.setAttribute("aria-pressed", String(useFahrenheit));
    unitToggleBtn.textContent = useFahrenheit ? "Switch to °C" : "Switch to °F";

    if (currentWeather) {
      await renderWeather(currentWeather);
    }
  });
}