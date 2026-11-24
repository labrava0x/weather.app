let currentWeather = null;
let unit = "C"; // "C" for Celsius, "F" for Fahrenheit
let renderSequence = 0;

const unitToggle = document.getElementById("unit-toggle");
const statusMessage = document.getElementById("status-message");
const weatherDisplay = document.getElementById("weather-display");

function toDisplayTemp(tempInCelsius) {
  if (tempInCelsius === null || tempInCelsius === undefined) return "--";

  const value = unit === "C" ? tempInCelsius : (tempInCelsius * 9) / 5 + 32;
  return `${Math.round(value)}°${unit}`;
}

async function loadWeatherIcon(iconName) {
  if (!iconName) return null;

  try {
    const iconModule = await import(`./icons/${iconName}.svg`);
    return iconModule.default ?? iconModule;
  } catch (error) {
    console.warn(`Icon not found for "${iconName}":`, error);
    return null;
  }
}

async function renderWeather(data) {
  const token = ++renderSequence;
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

  const mainIconEl = document.getElementById("weather-icon");
  const mainIconSrc = await loadWeatherIcon(data.icon);
  if (token !== renderSequence) return;

  if (mainIconSrc) {
    mainIconEl.src = mainIconSrc;
    mainIconEl.alt = data.condition || data.icon;
    mainIconEl.hidden = false;
  } else {
    mainIconEl.removeAttribute("src");
    mainIconEl.hidden = true;
  }

  const forecastContainer = document.getElementById("forecast-container");
  forecastContainer.replaceChildren();

  const dayIcons = await Promise.all(
    (data.forecast ?? []).map((day) => loadWeatherIcon(day.icon))
  );
  if (token !== renderSequence) return;

  (data.forecast ?? []).forEach((day, index) => {
    const dayCard = document.createElement("div");
    dayCard.className = "forecast-day";

    const dateEl = document.createElement("p");
    dateEl.textContent = day.date;

    const condEl = document.createElement("p");
    condEl.textContent = day.conditions;

    const tempsEl = document.createElement("p");
    tempsEl.textContent = `${toDisplayTemp(day.tempMax)} / ${toDisplayTemp(day.tempMin)}`;

    const children = [dateEl];
    if (dayIcons[index]) {
      const dayIconEl = document.createElement("img");
      dayIconEl.className = "forecast-icon";
      dayIconEl.src = dayIcons[index];
      dayIconEl.alt = day.conditions || day.icon || "Forecast weather";
      children.push(dayIconEl);
    }
    children.push(condEl, tempsEl);

    dayCard.append(...children);
    forecastContainer.appendChild(dayCard);
  });

  weatherDisplay.hidden = false;
  statusMessage.textContent = "";
}

window.renderWeather = renderWeather;

unitToggle.addEventListener("click", () => {
  unit = unit === "C" ? "F" : "C";
  unitToggle.textContent = unit === "C" ? "Switch to °F" : "Switch to °C";
  unitToggle.setAttribute("aria-pressed", String(unit === "F"));

  if (currentWeather) {
    renderWeather(currentWeather);
  }
});