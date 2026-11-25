const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

async function getWeatherData(location, unitGroup = "metric") {
  const encodedLocation = encodeURIComponent(location.trim());
  const url = `${BASE_URL}/${encodedLocation}?unitGroup=${unitGroup}&contentType=json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    throw error;
  }
}

async function logWeatherForLocation(location, unitGroup = "metric") {
  try {
    await getWeatherData(location, unitGroup);
  } catch {
    // Error is already logged inside getWeatherData
  }
}