import React from "react";
import { calenderCreator } from "../../../../utils/Date";
import { v4 as uuid } from "uuid";
import { colorWithLowOpacity } from "../../../../utils/color";

export const MonthComponent = ({
  currentDate,
  selectedDate,
  todos,
  onOpenModalHandler,
  onOpenModalForEditHandler,
}) => {
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "TuesDay",
    "Wednsday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="flex flex-col grow">
      <div className="flex">
        {dayOfWeek.map((day) => {
          return (
            <div
              className="border border-gray-200 w-full h-12 flex justify-center items-center font-bold text-gray-600 "
              key={uuid()}
            >
              {day}
            </div>
          );
        })}
      </div>
      {calenderCreator(currentDate).map((weeks) => {
        return (
          <div key={uuid()} className="flex h-full">
            {weeks.map((day) => {
              return (
                <div
                  onClick={() => onOpenModalHandler(day)}
                  className="text-l cursor-pointer text-gray-900 gap-1 font-thin border border-gray-200  w-full flex items-center p-1 flex-col "
                  key={uuid()}
                >
                  <p
                    className="h-8 w-8 flex justify-center items-center"
                    style={
                      day
                        ? selectedDate.format("DD/MM/YYYY") ===
                          day.format("DD/MM/YYYY")
                          ? {
                              backgroundColor: "blue",
                              borderRadius: "100%",
                              color: "white",
                            }
                          : {}
                        : {}
                    }
                  >
                    {day ? day.get("D") : null}
                  </p>
                  <ul className="w-28">
                    {todos.map((todo) => {
                      if (
                        todo.Date.format("DD/MM/YYYY") !==
                        day?.format("DD/MM/YYYY")
                      )
                        return null;
                      return (
                        <li
                          onClick={(event) => {
                            event.stopPropagation();
                            onOpenModalForEditHandler(day, todo.id);
                          }}
                          key={todo.id}
                          className="mb-1"
                        >
                          <p
                            style={{
                              color: colorWithLowOpacity(
                                todo.category.color
                              ).isLight()
                                ? "black"
                                : "white",
                              backgroundColor: colorWithLowOpacity(
                                todo.category.color
                              ).toString(),
                              borderLeft: `4px solid ${todo.category.color}`,
                            }}
                          >
                            {todo.title}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
