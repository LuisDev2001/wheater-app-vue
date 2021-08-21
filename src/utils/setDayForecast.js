export function setDateForecast(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feby",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const getMonth = Number(date.split("-")[1].replace("0", "")) - 1;
  const getDayNumber = date.split("-")[2];
  const getDay = new Date(date);
  const getDayText = days[getDay.getDay()];
  const fullDate = `${getDayText}, ${getDayNumber} ${months[getMonth]}`;

  return fullDate;
}
