import React from "react";
import { CloseIcon, DeleteIcon } from "../../../../assets/icons/Icon";
import { v4 as uuid } from "uuid";

export const Modal = ({
  setDateForAddTask,
  addTodo,
  deleteTodo,
  inputValue,
  Topic,
  setSelectedCategory,
  selectedCategory,
  setInputValue,
}) => {
  // ........................................
  const onCloseModalHandler = () => {
    setDateForAddTask(undefined);
  };

  return (
    <div className="fixed shadow-2xl inset-y-1/4 inset-x-[550px] flex gap-4 flex-col bg-white w-[320px] h-[400px] rounded-lg">
      <div className="flex justify-between items-center w-full bg-gray-100 h-12 text-2xl text-gray-500">
        <button
          onClick={() => {
            deleteTodo();
          }}
          className="px-4 py-2"
        >
          <DeleteIcon />
        </button>
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
      <div className="px-5 text-gray-700 text-lg mb-8">
        <p className="mb-4">Select the topic</p>
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
      <button
        onClick={addTodo}
        className="ml-52 bg-[#94a3b8] px-3 py-2 w-24 text-[18px] text-white rounded"
      >
        Save
      </button>
    </div>
  );
};
