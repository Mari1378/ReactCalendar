import React from "react";
import { calenderCreator } from "../../../../utils/Date";
import { Modal } from "../Modal/Modal";
import { v4 as uuid } from "uuid";

export const MonthComponent = ({
  currentDate,
  selectedDate,
  dateForAddTask,
  setDateForAddTask,
  todos,
  addTodo,
  deleteTodo,
  inputRef,
  onSelectDay: onSelectDayHandler,
}) => {
  // ..................................
  const onOpenModalHandler = (date) => {
    setDateForAddTask(date);
  };
  // .....................................

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
          <div key={uuid()} className="flex h-full ">
            {weeks.map((day) => {
              return (
                <div
                  onClick={() => onOpenModalHandler(day)}
                  className="text-l cursor-pointer text-gray-900 font-thin border border-gray-200 w-full flex items-center p-2 flex-col "
                  key={uuid()}
                >
                  <p
                    onClick={() => {
                      if (day != null) onSelectDayHandler(day);
                    }}
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

                  <ul>
                    {todos.map((todo) => {
                      if (
                        todo.Date.format("DD/MM/YYYY") !==
                        day?.format("DD/MM/YYYY")
                      )
                        return null;
                      return <li key={todo.id}>{todo.title}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
      {dateForAddTask ? (
        <Modal
          setDateForAddTask={setDateForAddTask}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          inputRef={inputRef}
        />
      ) : null}
    </div>
  );
};
