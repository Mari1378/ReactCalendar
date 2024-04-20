import React, { useReducer, useRef, useState } from "react";
import { MonthComponent } from "./_MonthComponent";
import { DayComponent } from "./_DayComponent";
import { v4 as uuid } from "uuid";
import { Modal } from "./Modal/Modal";
import { HeaderRightSide } from "./_HeaderRightSide";
import { makeTodo } from "../../../../utils/MakeTodo";

const initialtodo = [];
makeTodo();

export const RightSide = ({
  onToday: onTodayHandler,
  currentDate,
  selectedDate,
  onSelectDay: onSelectDayHandler,
  Topic,
  setSelectedDate,
}) => {
  const [todos, dispatch] = useReducer(makeTodo(), initialtodo);
  const [isMonth, setIsMonth] = useState(true);
  const [dateForAddTask, setDateForAddTask] = useState();
  const [titleOfTaskForEdit, setTitleOfTaskForEdit] = useState("");
  const [startTodo, setStartTodo] = useState("08:00:00");
  const [endTodo, setendTodo] = useState("09:00:00");
  // .................................
  const addTodoHandler = (startTodo, endTodo, taskTitle, category) => {
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
  const deleteTodoHandler = (dateTodo) => {
    dispatch({
      type: "DELETE",
      payload: dateTodo,
    });
    setDateForAddTask(undefined);
  };
  const editTodoHandler = (dateTodo, taskTitle) => {
    dispatch({
      type: "EDIT",
      payload: {
        Date: dateTodo,
        title: taskTitle,
      },
    });
    setDateForAddTask(undefined);
  };
  // ............................................
  const onOpenModalHandler = (date, startTime, endTime) => {
    if (startTime && endTime) {
      setStartTodo(startTime);
      setendTodo(endTime);
    }
    setDateForAddTask(date);
    if (date != null) onSelectDayHandler(date);
    console.log(date);
  };
  const onOpenModalForEditHandler = (date, id) => {
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
  const onDayHandler = () => {
    setIsMonth(false);
  };
  // ............................................
  return (
    <div className="w-full h-screen flex flex-col overflow-auto ">
      <HeaderRightSide
        selectedDate={selectedDate}
        onTodayHandler={onTodayHandler}
        onMonthHandler={onMonthHandler}
        onDayHandler={onDayHandler}
      />
      {isMonth ? (
        <MonthComponent
          currentDate={currentDate}
          selectedDate={selectedDate}
          todos={todos}
          onOpenModalHandler={onOpenModalHandler}
          onOpenModalForEditHandler={onOpenModalForEditHandler}
        />
      ) : (
        <DayComponent
          onOpenModalHandler={onOpenModalHandler}
          onOpenModalForEditHandler={onOpenModalForEditHandler}
          todos={todos}
          selectedDate={selectedDate}
        />
      )}
      {dateForAddTask ? (
        <Modal
          setDateForAddTask={setDateForAddTask}
          addTodo={addTodoHandler}
          deleteTodo={deleteTodoHandler}
          Topic={Topic}
          editTodo={editTodoHandler}
          dateForAddTask={dateForAddTask}
          defaultInputValue={titleOfTaskForEdit ? titleOfTaskForEdit : ""}
          startTodo={startTodo}
          endTodo={endTodo}
          setStartTodo={setStartTodo}
          setendTodo={setendTodo}
          setTitleOfTaskForEdit={setTitleOfTaskForEdit}
        />
      ) : null}
    </div>
  );
};
