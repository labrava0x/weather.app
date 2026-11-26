# Weather App

A weather app that is ready to detonate with the best weather.

## SYNOPSIS

A browser weather and multi-day forecast dashboard built with modular JavaScript, ES modules, and Webpack for The Odin Project—my very first weather app, forged with an industrial brutalist aesthetic inspired by the explosive energy that kept me going every step of the way. I chose this raw, concrete-and-amber look because it felt right. Alongside the frontend, I also built a backend proxy/worker for the very first time to keep my API key hidden—an experiment that turned into quite the journey.

Tucked into the concrete slab is also a hidden poetic riddle wired to a `💥` detonator button. Clicking it triggers a step-by-step state listener that detonates each fragment in sequence—revealing the lines one click at a time, pulsing the brutalist glow, and resetting cleanly once the final blast lands.

## Features

- **Location Search:** Search for current weather conditions and upcoming forecast cards by city or location.
- **Unit Toggle (`°C` / `°F`):** Switch between Celsius/metric and Fahrenheit/imperial measurements and re-render active weather data without losing the current view.
- **Current Weather Readout:** Displays location, weather condition, current temperature, "feels like" temperature, humidity percentage, wind speed, and daily high/low values.
- **Multi-Day Forecast Cards:** Dynamically renders upcoming forecast days with dates, weather icons, condition descriptions, and high/low temperature ranges.
- **Weather Icon Mapping:** Resolves condition/icon codes to SVG visual assets via a dedicated icon module.
- **Async & Status Handling:** Displays a custom hazard-bar loading state (`DETONATING REQUEST...`), surfaces errors cleanly, and logs unhandled promise rejections.
- **Observer Detonator (`💥`):** An interactive hidden trigger tucked inside the slab interface—each click advances an internal click-counter state to detonate the next poetic clue into the whisper readout before cycling back to dormant.
- **Modular Architecture:** Separates bundle entry imports, formatting/observer helpers, data fetching/normalization, form handling, DOM rendering, and icon resolution.

## How the Observer Detonator Works

- **Trigger (`#observer-detonate-btn`):** A `💥` button embedded inside `.observer-trigger-wrap` in `src/index.html` listens for user clicks.
- **Sequential State (`src/js/script.js`):** Each click increments a step counter that injects the next line of the three-part poetic riddle into `#observer-whisper`, triggers a stepped brutalist CSS transition (`steps(2)`), and resets after the third detonation.

## Project Structure

```text
weather-app/
├── src/
│   ├── icons/
│   │   └── icons.js          # Resolves weather condition/icon identifiers to icon URLs
│   ├── js/
│   │   ├── index.js          # Webpack entry point importing styles and core JS modules
│   │   ├── script.js         # Formatting helpers, async error listener, and observer detonator logic
│   │   ├── form.js           # Search form event handling and weather data requests
│   │   ├── display.js        # DOM rendering, forecast cards, icon updates, and unit toggle state
│   │   └── weather.data.js   # Weather API / worker fetching and response formatting
│   ├── index.html            # HTML template bundled by HtmlWebpackPlugin
│   └── styles.css            # Brutalist concrete-and-blast-orange stylesheet
├── package.json
└── webpack.config.js