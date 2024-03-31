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
  return createCalendarWithMonthAndYear(month, year);
}

function createCalendarWithMonthAndYear(month, year) {
  const firstOfMonthDay = dayjs(new Date(year, month, 1)).day();
  let listOfDay = new Array(6).fill([]).map((row, i) => {
    return new Array(7).fill(null).map((day, j) => {
      if (i === 0 && firstOfMonthDay >= 0) {
        if (j < firstOfMonthDay) {
          return null;
        }
      }
      const dateOfDay = dayjs(
        new Date(year, month, i * 7 + (j + 1 - firstOfMonthDay))
      );
      return dateOfDay.month() === month ? dateOfDay : null;
    });
  });
  return listOfDay.filter((week) => !week.every((item) => item === null));
}
