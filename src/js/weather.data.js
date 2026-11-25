const PROXY_URL = "https://muddy-pine-d3f1.la-brava-codes.workers.dev";

async function getWeatherData(location, unitGroup = "metric") {
  const query = encodeURIComponent(location.trim());
  const url = `${PROXY_URL}?location=${query}&unitGroup=${encodeURIComponent(unitGroup)}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 400 || response.status === 404) {
      throw new Error(`Location not found: "${location}"`);
    }
    throw new Error(`Weather API request failed (${response.status})`);
  }

  const data = await response.json();

  if (!data || (!data.currentConditions && (!Array.isArray(data.days) || data.days.length === 0))) {
    throw new Error(`Incomplete telemetry returned for "${location}"`);
  }

  return data;
}

export function processWeatherData(rawData) {
  const current = rawData.currentConditions ?? rawData.days?.[0] ?? {};
  const today = rawData.days?.[0] ?? {};

  return {
    location: rawData.resolvedAddress ?? "",
    condition: current.conditions ?? today.conditions ?? "",
    icon: current.icon ?? today.icon ?? "",
    temp: current.temp ?? today.temp ?? null,
    feelsLike: current.feelslike ?? today.feelslike ?? null,
    humidity: current.humidity ?? today.humidity ?? null,
    windSpeed: current.windspeed ?? today.windspeed ?? null,
    high: today.tempmax ?? null,
    low: today.tempmin ?? null,
    forecast: (rawData.days ?? []).slice(0, 5).map((day) => ({
      date: day.datetime,
      tempMax: day.tempmax,
      tempMin: day.tempmin,
      conditions: day.conditions,
      icon: day.icon,
    })),
  };
}

export async function getFormattedWeather(location, unitGroup = "metric") {
  const rawData = await getWeatherData(location, unitGroup);
  const formattedData = processWeatherData(rawData);
  console.log("Processed weather object:", formattedData);
  return formattedData;
}