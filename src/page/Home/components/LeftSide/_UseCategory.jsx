import React from "react";
import { Category } from "./_Category";

export const UseCategory = ({
  value,
  setValue,
  color,
  setColor,
  Topic,
  onAddCategoryHandler,
  onDeleteCategory,
}) => {
  return (
    <div className="mt-12 flex flex-col gap-4 text-gray-300">
      <p>Add Your Category</p>
      <div className=" flex gap-2 items-center">
        <input
          type="text"
          placeholder="inter your topic"
          className="bg-black border border-gray-400  px-2 h-8"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <input
          type="color"
          id="colorPicker"
          value={color}
          className="h-8"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      </div>
      {Topic.length === 5 ? (
        <span className="text-red-600">You can have 5 categories</span>
      ) : null}
      <button
        onClick={() => {
          onAddCategoryHandler(value, color);
          setValue("");
          setColor("#00FA6C");
        }}
        className="bg-gray-400 rounded mb-8 px-2 h-8 text-gray-900 w-full"
      >
        Add Category
      </button>
      <ul className="flex flex-col gap-8">
        {Topic.map((item) => {
          return (
            <Category
              key={item.id}
              id={item.id}
              title={item.title}
              color={item.color}
              onDeleteCategory={onDeleteCategory}
            />
          );
        })}
      </ul>
    </div>
  );
};
