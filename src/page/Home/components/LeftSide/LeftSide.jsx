import { ArrowLeftIcon, ArrowRightIcon } from "../../../../assets/icons/Icon";
import { useState } from "react";
import { MakeWeek } from "./_MakeWeek";
import { UseCategory } from "./_UseCategory";
import Color from "color";
import { colorWithLowOpacity } from "../../../../utils/color";
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
      <div
        className="w-8 h-8"
        style={{ backgroundColor: colorWithLowOpacity(color) }}
      ></div>
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
      <MakeWeek
        currentDate={currentDate}
        onSelectDayHandler={onSelectDayHandler}
        selectedDate={selectedDate}
      />
      <UseCategory
        value={value}
        setValue={setValue}
        color={color}
        setColor={setColor}
        Topic={Topic}
        onAddCategoryHandler={onAddCategoryHandler}
        onDeleteCategory={onDeleteCategory}
      />
    </div>
  );
};
