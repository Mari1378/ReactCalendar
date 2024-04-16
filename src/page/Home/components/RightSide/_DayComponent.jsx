import React from "react";
import { v4 as uuid } from "uuid";

export const DayComponent = ({
  onOpenModalHandler,
  onOpenModalHandlerForEdit,
  todos,
  dateForAddTask,
  dayOfMonth,
}) => {
  const todoOnDay = todos.find((todo) => {
    return todo.Date.format("DD/MM/YYYY") === dayOfMonth.format("DD/MM/YYYY");
  });
  console.log(todoOnDay);
  const arrayOfTime = [
    "0:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  return (
    <div>
      {arrayOfTime.map((time) => {
        return (
          <div className="flex h-16 cursor-pointer relative" key={uuid()}>
            <p className="px-4 -mt-4 text-lg text-slate-700">{time}</p>
            <div className="border-t border-gray-200 grow h-full">
              {todoOnDay.startTime === time ? (
                <div className="absolute z-10 top-0  rounded-r w-11/12 h-full ">
                  <p
                    style={{
                      backgroundColor: `${todoOnDay.category.color}`,
                    }}
                    className="h-full p-1 text-xl"
                  >
                    {todoOnDay.title}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};
