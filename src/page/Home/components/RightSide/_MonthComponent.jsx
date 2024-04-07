import React, { useReducer, useRef } from "react";
import { calenderCreator } from "../../../../utils/Date";
import { v4 as uuid } from "uuid";
import { Modal } from "../Modal/Modal";
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
export const MonthComponent = ({
  currentDate,
  selectedDate,
  isOpen,
  setIsOpen,
}) => {
  const [todos, dispatch] = useReducer(reducer, initialtodo);
  const inputRef = useRef("");
  // ..................................
  const onOpenModalHandler = () => {
    setIsOpen(true);
  };
  // .....................................
  const addTodo = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: uuid(),
        title: inputRef.current.value,
      },
    });
    setIsOpen(false);
  };

  const deleteTodo = (todoId) => {
    dispatch({
      type: "DELETE",
      payload: todoId,
    });
  };

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
      {calenderCreator(currentDate).map((weeks, index) => {
        return (
          <div key={uuid()} className="flex h-full ">
            {weeks.map((days) => {
              return (
                <div
                  onClick={onOpenModalHandler}
                  className="text-l cursor-pointer text-gray-900 font-thin border border-gray-200 w-full flex items-center p-2 flex-col "
                  key={uuid()}
                >
                  <p
                    className="h-8 w-8 flex justify-center items-center"
                    style={
                      days
                        ? selectedDate.format("DD/MM/YYYY") ===
                          days.format("DD/MM/YYYY")
                          ? {
                              backgroundColor: "blue",
                              borderRadius: "100%",
                              color: "white",
                            }
                          : {}
                        : {}
                    }
                  >
                    {days ? days.get("D") : null}
                  </p>
                  <ul>
                    {todos.map((todo) => {
                      return <li key={todo.id}>{todo.title}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
      {isOpen ? (
        <Modal
          setIsOpen={setIsOpen}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          inputRef={inputRef}
        />
      ) : null}
    </div>
  );
};
