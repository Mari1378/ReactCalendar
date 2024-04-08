import React, { useReducer, useRef, useState } from "react";
import { MonthComponent } from "./_MonthComponent";
import { DayComponent } from "./_DayComponent";
import { v4 as uuid } from "uuid";

const initialtodo = [];
const reducer = (prevTodos, action) => {
  switch (action.type) {
    case "ADD": {
      return [...prevTodos, action.payload];
    }
    case "DELETE": {
      return prevTodos.filter((todo) => todo.id == action.payload);
    }
    default:
      return prevTodos;
  }
};
export const RightSide = ({
  onToday: onTodayHandler,
  currentDate,
  selectedDate,
  onSelectDay: onSelectDayHandler,
}) => {
  const [todos, dispatch] = useReducer(reducer, initialtodo);
  const inputRef = useRef("");
  const [isMonth, setIsMonth] = useState(true);
  const [isDay, setIsDay] = useState(false);
  const [dateForAddTask, setDateForAddTask] = useState();
  // .................................

  const addTodo = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: uuid(),
        title: inputRef.current.value,
        Date: dateForAddTask,
      },
    });
    setDateForAddTask(undefined);
  };

  const deleteTodo = (todoId) => {
    dispatch({
      type: "DELETE",
      payload: todoId,
    });
  };

  // .................................
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
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          inputRef={inputRef}
          onSelectDay={onSelectDayHandler}
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
