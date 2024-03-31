import React from "react";
import { MonthComponent } from "./_MonthComponent";
export const RightSide = ({
  onToday: onTodayHandler,
  currentDate,
  selectedDate,
}) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className=" p-5 h-20 flex justify-between" onClick={onTodayHandler}>
        <button className="bg-slate-100 text-xl py-2 px-4">Today</button>
        <div>
          <button className="border border-gray-200 p-1">Month</button>
          <button className="border border-gray-200 p-1">Day</button>
        </div>
      </div>
      <MonthComponent currentDate={currentDate} selectedDate={selectedDate} />
    </div>
  );
};
