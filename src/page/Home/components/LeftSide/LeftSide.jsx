import { calenderCreator, isToDay } from "../../../../utils/Date";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../assets/icons/Icon";
import { v4 as uuid } from "uuid";
import { daysOfWeek } from "../../../../constants/Date";
import { useState } from "react";
import { Category } from "./Category";
export const LeftSide = ({
  currentDate,
  selectedDate,
  onGoToNextMonth: onGoToNextMonthHandler,
  onGoToPrevMonth: onGoToPrevMonthHandler,
  onSelectDay: onSelectDayHandler,
}) => {
  const [Topic, setTopic] = useState([]);
  const [value, setValue] = useState("");
  const [color, setColor] = useState("#00FA6C");

  // ........................................................
  const onAddHandler = () => {
    if (value) {
      if (Topic.length <= 4) {
        setTopic([
          ...Topic,
          {
            title: value,
            id: uuid(),
            color: color,
          },
        ]);
        setValue("");
        setColor("#00FA6C");
      }
    }
  };
  // ..........................................................

  const onDeleteCategory = (id) => {
    const newTopic = Topic.filter((item) => {
      return item.id !== id;
    });
    setTopic(newTopic);
  };
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
      <div className="flex gap-2 flex-col  ">
        {calenderCreator(currentDate).map((week) => {
          return (
            <div className=" flex justify-between" key={uuid()}>
              {week.map((dateObject) => {
                return (
                  <span
                    onClick={() => {
                      if (dateObject != null) onSelectDayHandler(dateObject);
                    }}
                    className="w-8 h-8 flex justify-center items-center"
                    style={
                      dateObject != null
                        ? selectedDate.format("DD/MM/YYYY") ===
                          dateObject?.format("DD/MM/YYYY")
                          ? { backgroundColor: "blue", borderRadius: "100%" }
                          : isToDay(dateObject)
                          ? { backgroundColor: "red", borderRadius: "100%" }
                          : {}
                        : {}
                    }
                    key={uuid()}
                  >
                    {dateObject != null ? dateObject.get("D") : null}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <p>Select Your Category</p>
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
          onClick={onAddHandler}
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
