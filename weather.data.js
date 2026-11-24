function processWeatherData(rawData) {
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

async function getFormattedWeather(location, unitGroup = "metric") {
  const rawData = await getWeatherData(location, unitGroup);
  const formattedData = processWeatherData(rawData);
  console.log("Processed weather object:", formattedData);
  return formattedData;
}