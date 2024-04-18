import React, { useReducer, useRef, useState } from "react";
import { MonthComponent } from "./_MonthComponent";
import { DayComponent } from "./_DayComponent";
import { v4 as uuid } from "uuid";
import { Modal } from "./Modal/Modal";

const initialtodo = [];
const reducer = (prevTodos, action) => {
  switch (action.type) {
    case "ADD": {
      return [...prevTodos, action.payload];
    }
    case "DELETE": {
      return prevTodos.filter(
        (todo) =>
          todo.Date.format("DD/MM/YYYY") !== action.payload.format("DD/MM/YYYY")
      );
    }
    case "EDIT": {
      return prevTodos.map((todo) =>
        todo.Date.format("DD/MM/YYYY") ===
        action.payload.Date.format("DD/MM/YYYY")
          ? { ...todo, title: action.payload.title }
          : todo
      );
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
  Topic,
  setSelectedDate,
}) => {
  const [todos, dispatch] = useReducer(reducer, initialtodo);
  const [isMonth, setIsMonth] = useState(true);
  const [dateForAddTask, setDateForAddTask] = useState();
  const [titleOfTaskForEdit, setTitleOfTaskForEdit] = useState("");
  // .................................

  const addTodo = (startTodo, endTodo, taskTitle, category) => {
    if (taskTitle) {
      dispatch({
        type: "ADD",
        payload: {
          id: uuid(),
          title: taskTitle,
          Date: dateForAddTask,
          category: category,
          startTime: startTodo,
          endTime: endTodo,
        },
      });
      setDateForAddTask(undefined);
    }
  };

  const deleteTodo = (dateTodo) => {
    dispatch({
      type: "DELETE",
      payload: dateTodo,
    });
    setDateForAddTask(undefined);
  };
  const editTodo = (dateTodo, taskTitle) => {
    dispatch({
      type: "EDIT",
      payload: {
        Date: dateTodo,
        title: taskTitle,
      },
    });
    setDateForAddTask(undefined);
  };
  //

  const onOpenModalHandler = (date, id) => {
    setDateForAddTask(date);
    if (date != null) onSelectDayHandler(date);
    console.log(date);
  };
  const onOpenModalHandlerForEdit = (date, id) => {
    setDateForAddTask(date);
    const findTodos = todos.find((item) => {
      return item.id === id;
    });
    setTitleOfTaskForEdit(findTodos.title);
  };
  // .................................
  const onMonthHandler = () => {
    setIsMonth(true);
  };
  const onDayHandler = (date) => {
    setIsMonth(false);
    setSelectedDate(date);
  };
  return (
    <div className="w-full h-screen flex flex-col overflow-auto ">
      <div
        className=" p-5 h-20 flex justify-between items-center mb-8"
        onClick={onTodayHandler}
      >
        <button className="bg-slate-100 text-xl h-12 py-2 px-4">Today</button>
        <h2 className="text-xl text-gray-500 font-bold">
          {" "}
          {selectedDate.format("MMMM")} {selectedDate.format("DD")} ,{" "}
          {selectedDate.format("YYYY")}
        </h2>
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
      {isMonth ? (
        <MonthComponent
          currentDate={currentDate}
          selectedDate={selectedDate}
          todos={todos}
          onOpenModalHandler={onOpenModalHandler}
          onOpenModalHandlerForEdit={onOpenModalHandlerForEdit}
        />
      ) : (
        <DayComponent
          onOpenModalHandler={onOpenModalHandler}
          onOpenModalHandlerForEdit={onOpenModalHandlerForEdit}
          todos={todos}
          selectedDate={selectedDate}
        />
      )}
      {dateForAddTask ? (
        <Modal
          setDateForAddTask={setDateForAddTask}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          Topic={Topic}
          editTodo={editTodo}
          dateForAddTask={dateForAddTask}
          defaultInputValue={titleOfTaskForEdit ? titleOfTaskForEdit : ""}
        />
      ) : null}
    </div>
  );
};
