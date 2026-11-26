# Weather App

A browser weather and multi-day forecast dashboard built with modular JavaScript, ES modules, and Webpack for TOP, my very first ever weather app with a brutalist aesthetic by what is always wiring my inspiration ech step of the way. I went for this aesthetic because it is what felt right

## Features

- **Location Search:** Search for current weather conditions and upcoming forecast cards by city or location.
- **Unit Toggle (`°C` / `°F`):** Switch between Celsius/metric and Fahrenheit/imperial measurements and re-render active weather data without losing the current view.
- **Current Weather Readout:** Displays location, weather condition, current temperature, "feels like" temperature, humidity percentage, wind speed, and daily high/low values.
- **Multi-Day Forecast Cards:** Dynamically renders upcoming forecast days with dates, weather icons, condition descriptions, and high/low temperature ranges.
- **Weather Icon Mapping:** Resolves condition/icon codes to visual assets via a dedicated icon module.
- **Async & Status Handling:** Handles loading/status messages, surfaces errors cleanly, and logs unhandled promise rejections.
- **Modular Architecture:** Separates entry/formatting helpers, data fetching/normalization, form handling, DOM rendering, and icon resolution.

## Project Structure

```text
weather-app/
├── src/
│   ├── icons/
│   │   └── icons.js          # Resolves weather condition/icon identifiers to icon URLs
│   ├── js/
│   │   ├── script.js         # Entry imports, compatibility re-export, formatting helpers, async error listener
│   │   ├── form.js           # Search form event handling and weather data requests
│   │   ├── display.js        # DOM rendering, forecast cards, icon updates, and unit toggle state
│   │   └── weather.data.js   # Weather API / worker fetching and response formatting
│   └── styles.css            # Application styles
├── index.html
├── package.json
└── webpack.config.js
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run in Development Mode

```bash
npm start
```

### 3. Build for Production

```bash
npm run build
```

## Key Modules

- **`src/js/script.js`:** Imports application styles and `./form.js`, re-exports `renderWeather` from `./display.js`, provides `formatTemp`, `formatWind`, and `formatHumidity`, and listens for unhandled promise rejections.
- **`src/js/weather.data.js`:** Fetches weather data and structures current conditions and forecast days for the UI.
- **`src/js/form.js`:** Captures search submissions, coordinates data retrieval, and updates status/display states.
- **`src/js/display.js`:** Uses formatting helpers from `./script.js` and icon URLs from `../icons/icons.js` to render current weather, icons, forecast cards, and `°C` / `°F` toggles.
- **`src/icons/icons.js`:** Maps weather icon keys to asset paths/URLs.