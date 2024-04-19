import { calenderCreator, isToDay } from "../../../../utils/Date";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../assets/icons/Icon";
import { v4 as uuid } from "uuid";
import { daysOfWeek } from "../../../../constants/Date";
import { useState } from "react";
import { Category } from "./Category";
import { MakeWeek } from "./MakeWeek";
export const LeftSide = ({
  currentDate,
  selectedDate,
  onGoToNextMonth: onGoToNextMonthHandler,
  onGoToPrevMonth: onGoToPrevMonthHandler,
  onSelectDay: onSelectDayHandler,
  Topic,
  onAddCategoryHandler,
  onDeleteCategory,
}) => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("#00FA6C");
  // ............................................................
  return (
    <div className="h-screen p-4 w-[350px] bg-black text-white overflow-auto">
      <div className="flex justify-between items-center mb-8">
        <p className="font-bold text-2xl  ml-[6px]">
          {currentDate.format("MMMM")} - {currentDate.format("YYYY")}
        </p>
        <div className="flex gap-2">
          <div className="cursor-pointer" onClick={onGoToPrevMonthHandler}>
            <ArrowLeftIcon />
          </div>
          <div className="cursor-pointer" onClick={onGoToNextMonthHandler}>
            <ArrowRightIcon />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        {daysOfWeek.map((day) => {
          return (
            <p
              className="w-8 h-8 flex justify-center items-center mb-2 text-gray-600"
              key={uuid()}
            >
              {day}
            </p>
          );
        })}
      </div>

      <MakeWeek
        currentDate={currentDate}
        onSelectDayHandler={onSelectDayHandler}
        selectedDate={selectedDate}
      />
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
    </div>
  );
};
