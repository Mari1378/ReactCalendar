import dayjs from "dayjs";

export function isToDay(date) {
  if (date.format("DD/MM/YYYY") === dayjs(new Date()).format("DD/MM/YYYY")) {
    return true;
  }
  return false;
}

export function calenderCreator(currentDate) {
  const month = currentDate.month();
  const year = currentDate.year();
  const firstOfMonthDay = dayjs(new Date(year, month, 1)).day();
  let listOfDay = new Array(5).fill([]).map((row, i) => {
    return new Array(7).fill(null).map((day, j) => {
      if (i === 0 && firstOfMonthDay >= 0) {
        if (j < firstOfMonthDay) {
          return dayjs(new Date(year, month, -firstOfMonthDay + j + 1));
        }
      }
      return dayjs(new Date(year, month, i * 7 + (j + 1 - firstOfMonthDay)));
    });
  });
  return listOfDay;
}
