import React, { useState } from "react";
import { MonthComponent } from "./_MonthComponent";
import { DayComponent } from "./_DayComponent";
export const RightSide = ({
  onToday: onTodayHandler,
  currentDate,
  selectedDate,
}) => {
  const [isMonth, setIsMonth] = useState(true);
  const [isDay, setIsDay] = useState(false);
  const [dateForAddTask, setDateForAddTask] = useState();
  const onMonthHandler = () => {
    setIsDay(false);
    setIsMonth(true);
  };
  const onDayHandler = () => {
    setIsMonth(false);
    setIsDay(true);
  };
  return (
    <div className="w-full h-screen flex flex-col overflow-auto ">
      <div
        className=" p-5 h-20 flex justify-between items-center mb-8"
        onClick={onTodayHandler}
      >
        <button className="bg-slate-100 text-xl h-12 py-2 px-4">Today</button>
        <div className="flex gap-0.5">
          <button
            onClick={onMonthHandler}
            className="border border-gray-200 rounded-l-lg px-5 py-1"
          >
            Month
          </button>
          <button
            onClick={onDayHandler}
            className="border border-gray-200 rounded-r-lg px-5 py-1"
          >
            Day
          </button>
        </div>
      </div>
      {isMonth ? (
        <MonthComponent
          dateForAddTask={dateForAddTask}
          setDateForAddTask={setDateForAddTask}
          currentDate={currentDate}
          selectedDate={selectedDate}
        />
      ) : (
        <DayComponent
          dateForAddTask={dateForAddTask}
          setDateForAddTask={setDateForAddTask}
        />
      )}
    </div>
  );
};
