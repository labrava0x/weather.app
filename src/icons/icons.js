const ICONS = {
  sun: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#ffb703" stroke-width="4"><circle cx="32" cy="32" r="12"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13.6 13.6l5.7 5.7M44.7 44.7l5.7 5.7M50.4 13.6l-5.7 5.7M19.3 44.7l-5.7 5.7"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#e2e4e8" stroke-width="4"><path d="M44 40A18 18 0 0 1 24 20c0-3.5 1-6.8 2.8-9.5A20 20 0 1 0 53.5 37.2 17.9 17.9 0 0 1 44 40Z"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#e2e4e8" stroke-width="4"><path d="M18 46h28a10 10 0 0 0 1-19.9A14 14 0 0 0 20 22a11 11 0 0 0-2 24Z"/></svg>`,
  partlyCloudy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#e2e4e8" stroke-width="4"><circle cx="24" cy="24" r="9" stroke="#ffb703"/><path d="M24 8v4M8 24h4M12.7 12.7l2.8 2.8" stroke="#ffb700"/><path d="M22 48h26a9 9 0 0 0 .8-17.9A12 12 0 0 0 25 27a10 10 0 0 0-3 21Z"/></svg>`,
  rain: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#e2e4e8" stroke-width="4"><path d="M18 38h28a9 9 0 0 0 1-17.9A13 13 0 0 0 21 17a10 10 0 0 0-3 21Z"/><path d="M22 46l-4 10M34 46l-4 10M46 46l-4 10" stroke="#ff4d00"/></svg>`,
  snow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#e2e4e8" stroke-width="4"><path d="M18 38h28a9 9 0 0 0 1-17.9A13 13 0 0 0 21 17a10 10 0 0 0-3 21Z"/><path d="M24 46v10M19 51h10M40 46v10M35 51h10" stroke="#ffb703"/></svg>`,
  thunder: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#e2e4e8" stroke-width="4"><path d="M18 36h28a9 9 0 0 0 1-17.9A13 13 0 0 0 21 15a10 10 0 0 0-3 21Z"/><path d="M34 38l-8 12h10l-4 10" stroke="#ff4d00"/></svg>`,
  wind: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#e2e4e8" stroke-width="4"><path d="M10 24h32a6 6 0 1 0-6-6M10 34h40a6 6 0 1 1-6 6M10 44h22" stroke="#ff4d00"/></svg>`,
  fog: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#e2e4e8" stroke-width="4"><path d="M12 22h40M16 32h32M10 42h44M18 52h28"/></svg>`,
};

export function getWeatherIconUrl(iconName = "") {
  if (!iconName || typeof iconName !== "string") return null;
  const key = iconName.toLowerCase();

  let svg = ICONS.sun;
  if (key.includes("thunder")) svg = ICONS.thunder;
  else if (key.includes("snow") || key.includes("sleet") || key.includes("hail")) svg = ICONS.snow;
  else if (key.includes("rain") || key.includes("showers")) svg = ICONS.rain;
  else if (key.includes("partly-cloudy")) svg = ICONS.partlyCloudy;
  else if (key.includes("cloudy") || key.includes("overcast")) svg = ICONS.cloud;
  else if (key.includes("wind")) svg = ICONS.wind;
  else if (key.includes("fog")) svg = ICONS.fog;
  else if (key.includes("night")) svg = ICONS.moon;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}