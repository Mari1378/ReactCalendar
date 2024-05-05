import React, { useState } from "react";
import { CloseIcon, DeleteIcon, Minus } from "../../../../../assets/icons/Icon";

export const Modal = ({
  setDateForAddTask,
  addTodo: addTodoHandler,
  deleteTodo: deleteTodoHandler,
  editTodo: editTodoHandler,
  Topic,
  dateForAddTask,
  defaultInputValue,
  startTodo,
  endTodo,
  setStartTodo,
  setendTodo,
}) => {
  const [inputValue, setInputValue] = useState(defaultInputValue);
  const [selectedCategory, setSelectedCategory] = useState(Topic[0]);
  // ........................................
  const onCloseModalHandler = () => {
    setDateForAddTask(undefined);
    setInputValue("");
  };

  return (
    <div className="fixed shadow-2xl inset-y-1/4 inset-x-[550px] text-gray-600 flex gap-2 flex-col bg-white w-[320px] h-[400px] rounded-lg">
      <div className="flex justify-between items-center w-full bg-gray-100 h-12 text-2xl text-gray-500">
        {defaultInputValue ? (
          <button
            onClick={() => {
              deleteTodoHandler(dateForAddTask);
            }}
            className="px-4 py-2"
          >
            <DeleteIcon />
          </button>
        ) : null}

        <button onClick={onCloseModalHandler} className="px-4 py-2 ">
          <CloseIcon />
        </button>
      </div>
      <div className="p-5">
        <input
          className="pt-3 border-0 text-gray-600 text-2xl pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Add title"
        />
      </div>
      <div className="px-5  text-lg mb-4">
        <p className="mb-2">Select the topic</p>
        <div className="flex gap-2">
          {Topic.map((item) => {
            return (
              <button
                onClick={() => setSelectedCategory(item)}
                className="w-8 h-8 rounded-2xl"
                key={item.id}
                style={{
                  backgroundColor: item.color,
                  border:
                    item.id === selectedCategory.id
                      ? "1px solid #000000"
                      : "none",
                }}
              ></button>
            );
          })}
        </div>
      </div>
      <div className="px-5 flex text-lg items-center gap-2 mb-4">
        <input
          type="time"
          value={startTodo}
          name="time"
          onChange={(e) => setStartTodo(e.target.value)}
        />
        <Minus />
        <input
          type="time"
          value={endTodo}
          name="time"
          onChange={(e) => setendTodo(e.target.value)}
        />
      </div>
      <button
        onClick={
          !defaultInputValue
            ? () => {
                addTodoHandler(
                  startTodo,
                  endTodo,
                  inputValue,
                  selectedCategory
                );
                setInputValue("");
              }
            : () => {
                editTodoHandler(dateForAddTask, inputValue);
                setInputValue("");
              }
        }
        className="ml-52 bg-[#94a3b8] px-3 py-2 w-24 text-[18px] text-white rounded"
      >
        {!defaultInputValue ? "Add" : "Edit"}
      </button>
    </div>
  );
};
