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
  setStartTodo,
  setendTodo,
  startTodo,
  endTodo,
}) => {
  const [todos, dispatch] = useReducer(reducer, initialtodo);
  const [inputValue, setInputValue] = useState("");
  const [isMonth, setIsMonth] = useState(true);
  const [dayOfMonth, setDayOfMonth] = useState([]);
  const [dateForAddTask, setDateForAddTask] = useState();
  const [selectedCategory, setSelectedCategory] = useState(Topic[0]);
  const [changeButton, setChangeButton] = useState("EDIT");
  // .................................

  const addTodo = () => {
    if (inputValue) {
      dispatch({
        type: "ADD",
        payload: {
          id: uuid(),
          title: inputValue,
          Date: dateForAddTask,
          category: selectedCategory,
          startTime: startTodo,
          endTime: endTodo,
        },
      });
      setDateForAddTask(undefined);
      setInputValue("");
    }
  };

  const deleteTodo = (dateTodo) => {
    dispatch({
      type: "DELETE",
      payload: dateTodo,
    });
    setDateForAddTask(undefined);
  };
  const editTodo = (dateTodo) => {
    dispatch({
      type: "EDIT",
      payload: {
        Date: dateTodo,
        title: inputValue,
      },
    });
    setDateForAddTask(undefined);
    setInputValue("");
  };
  //

  const onOpenModalHandler = (date) => {
    setDateForAddTask(date);
    if (date != null) onSelectDayHandler(date);
    setChangeButton("ADD");
    console.log(date);
  };
  const onOpenModalHandlerForEdit = (date, id) => {
    setDateForAddTask(date);
    const findTodos = todos.find((item) => {
      return item.id === id;
    });
    setInputValue(findTodos.title);
    setChangeButton("EDIT");
  };
  // .................................
  const onMonthHandler = () => {
    setIsMonth(true);
  };
  const onDayHandler = (date) => {
    setIsMonth(false);
    setDayOfMonth(date);
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
          dateForAddTask={dateForAddTask}
          setDateForAddTask={setDateForAddTask}
          currentDate={currentDate}
          selectedDate={selectedDate}
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          inputValue={inputValue}
          setInputValue={setInputValue}
          Topic={Topic}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          editTodo={editTodo}
          changeButton={changeButton}
          onOpenModalHandler={onOpenModalHandler}
          onOpenModalHandlerForEdit={onOpenModalHandlerForEdit}
          setStartTodo={setStartTodo}
          setendTodo={setendTodo}
          startTodo={startTodo}
          endTodo={endTodo}
        />
      ) : (
        <DayComponent
          onOpenModalHandler={onOpenModalHandler}
          onOpenModalHandlerForEdit={onOpenModalHandlerForEdit}
          todos={todos}
          dateForAddTask={dateForAddTask}
          dayOfMonth={dayOfMonth}
          selectedDate={selectedDate}
          setDateForAddTask={setDateForAddTask}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          inputValue={inputValue}
          Topic={Topic}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          setInputValue={setInputValue}
          editTodo={editTodo}
          changeButton={changeButton}
          setStartTodo={setStartTodo}
          setendTodo={setendTodo}
          startTodo={startTodo}
          endTodo={endTodo}
        />
      )}
    </div>
  );
};
