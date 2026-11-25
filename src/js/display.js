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

function formatTemp(tempC) {
  if (typeof tempC !== "number" || Number.isNaN(tempC)) return "--";
  const value = useFahrenheit ? (tempC * 9) / 5 + 32 : tempC;
  const unit = useFahrenheit ? "°F" : "°C";
  return `${Math.round(value * 10) / 10}${unit}`;
}

function formatWind(windKph) {
  if (typeof windKph !== "number" || Number.isNaN(windKph)) return "--";
  if (useFahrenheit) {
    const mph = Math.round((windKph * 0.621371) * 10) / 10;
    return `${mph} mph`;
  }
  return `${Math.round(windKph * 10) / 10} km/h`;
}

function sanitizeIconName(iconName) {
  if (!iconName || typeof iconName !== "string") return "";
  return iconName.replace(/[^a-zA-Z0-9_-]/g, "");
}

async function loadWeatherIcon(iconName) {
  const safeName = sanitizeIconName(iconName);
  if (!safeName) return null;

  try {
    const svgModule = await import(`../icons/${safeName}.svg`);
    return svgModule?.default ?? null;
  } catch {
    return null;
  }
}

function renderForecast(forecastDays = []) {
  if (!forecastContainer) return;
  forecastContainer.innerHTML = "";

  forecastDays.forEach((day) => {
    const card = document.createElement("article");
    card.className = "forecast-day";

    const dateHeading = document.createElement("h3");
    dateHeading.textContent = day.date || "--";

    const condText = document.createElement("p");
    condText.textContent = day.conditions || "";

    const rangeText = document.createElement("p");
    rangeText.textContent = `HI ${formatTemp(day.tempMax)} / LO ${formatTemp(day.tempMin)}`;

    card.append(dateHeading, condText, rangeText);
    forecastContainer.appendChild(card);
  });
}

function paintWeather(weather) {
  if (!weather || !displaySection) return;

  if (locationEl) locationEl.textContent = weather.location || "UNKNOWN SECTOR";
  if (conditionEl) conditionEl.textContent = weather.condition || "--";
  if (tempEl) tempEl.textContent = formatTemp(weather.temp);
  if (feelsLikeEl) {
    feelsLikeEl.textContent = `FEELS LIKE: ${formatTemp(weather.feelsLike)}`;
  }
  if (humidityEl) {
    humidityEl.textContent =
      typeof weather.humidity === "number"
        ? `HUMIDITY: ${Math.round(weather.humidity)}%`
        : "HUMIDITY: --";
  }
  if (windEl) {
    windEl.textContent = `WIND: ${formatWind(weather.windSpeed)}`;
  }
  if (highLowEl) {
    highLowEl.textContent = `MAX ${formatTemp(weather.high)} // MIN ${formatTemp(weather.low)}`;
  }

  renderForecast(weather.forecast);
  displaySection.hidden = false;
  if (statusEl) statusEl.textContent = "";
}

export async function renderWeather(weather) {
  const currentRender = ++renderSequence;
  currentWeather = weather;

  paintWeather(weather);

  if (!iconEl) return;

  const iconUrl = await loadWeatherIcon(weather?.icon);
  if (currentRender !== renderSequence) return;

  if (iconUrl) {
    iconEl.src = iconUrl;
    iconEl.alt = weather.condition || weather.icon || "Weather icon";
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