import React from "react";
import dayjs from "dayjs";

export const HeaderRightSide = ({
  selectedDate,
  onTodayHandler,
  onMonthHandler,
  onDayHandler,
}) => {
  return (
    <div
      className=" p-5 h-20 flex justify-between items-center mb-8"
      onClick={onTodayHandler}
    >
      <button className="bg-slate-100 text-xl h-12 py-2 px-4">Today</button>
      {/* <h2 className="text-xl text-gray-500 font-bold">
        {" "}
        {selectedDate.format("MMMM")} {selectedDate.format("DD")} ,{" "}
        {selectedDate.format("YYYY")}
      </h2> */}
      <div className="flex gap-0.5">
        <button
          onClick={onMonthHandler}
          className="border border-gray-200 rounded-l-lg px-5 py-1"
        >
          Month
        </button>
        <button
          onClick={() => onDayHandler(selectedDate)}
          className="border border-gray-200 rounded-r-lg px-5 py-1"
        >
          Day
        </button>
      </div>
    </div>
  );
};