import { useState } from "react";
import "./App.css";
import { LeftSide } from "./leftSide/LeftSide";
import { RightSide } from "./rightSide/RightSide";
import dayjs from "dayjs";

function App() {
  const [currentDate, setCurentDate] = useState(dayjs(new Date()));
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
  // ....................
  const onGoToNextMonthHandler = () => {
    setCurentDate((prevDate) => prevDate.set("month", prevDate.month() + 1));
  };
  const onGoToPrevMonthHandler = () => {
    setCurentDate((prevDate) => prevDate.set("month", prevDate.month() - 1));
  };
  const onSelectDayHandler = (date) => {
    setSelectedDate(date);
  };

  // ....................
  const onTodayHandler = () => {
    setCurentDate(dayjs(new Date()));
    setSelectedDate(dayjs(new Date()));
  };
  return (
    <div className="flex h-full">
      <LeftSide
        currentDate={currentDate}
        selectedDate={selectedDate}
        onGoToNextMonth={onGoToNextMonthHandler}
        onGoToPrevMonth={onGoToPrevMonthHandler}
        onSelectDay={onSelectDayHandler}
      />
      <RightSide
        currentDate={currentDate}
        onToday={onTodayHandler}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default App;
