import { calenderCreator, isToDay } from "../../../utils/Date";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/icons/Icon";
import { v4 as uuid } from "uuid";
import { daysOfWeek } from "../../../constants/Date";
export const LeftSide = ({
  currentDate,
  selectedDate,
  onGoToNextMonth: onGoToNextMonthHandler,
  onGoToPrevMonth: onGoToPrevMonthHandler,
  onSelectDay: onSelectDayHandler,
}) => {
  return (
    <div className="h-screen p-4 w-[300px] bg-black text-white">
      <div className="flex justify-between items-center mb-3">
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
                    onClick={() => onSelectDayHandler(dateObject)}
                    className="w-8 h-8 flex justify-center items-center"
                    style={
                      selectedDate.format("DD/MM/YYYY") ===
                      dateObject.format("DD/MM/YYYY")
                        ? { backgroundColor: "blue", borderRadius: "100%" }
                        : isToDay(dateObject)
                        ? { backgroundColor: "red", borderRadius: "100%" }
                        : {}
                    }
                    key={uuid()}
                  >
                    {dateObject.get("D")}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
