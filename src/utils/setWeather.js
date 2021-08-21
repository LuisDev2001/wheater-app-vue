export function setWeather(
  temperatureCelcius,
  temperatureDescription,
  location
) {
  const objWeather = {
    temperature: temperatureCelcius.toFixed(0),
    temperatureDescription: temperatureDescription,
    locationName: location,
  };
  return objWeather;
}
