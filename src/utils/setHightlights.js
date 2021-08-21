export function setHightlights(wind, humidity, visibility, pressure) {
  const objHightlights = {
    windStatus: wind,
    humidity: humidity,
    visibility: visibility,
    airPressure: pressure,
  };
  return objHightlights;
}
