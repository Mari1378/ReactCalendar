import React from "react";
import { DeleteIcon } from "../../../../assets/icons/Icon";

export const Category = ({ title, color, onDeleteCategory, id }) => {
  return (
    <li>
      <div className="flex items-center justify-between text-gray-300">
        <div className="flex items-center gap-2">
          <div
            style={{ backgroundColor: `${color}` }}
            className="w-6 h-6 rounded-xl"
          ></div>
          <p>{title}</p>
        </div>
        <button
          className="text-2xl"
          onClick={() => {
            onDeleteCategory(id);
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};
