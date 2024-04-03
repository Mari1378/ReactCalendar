import { calenderCreator, isToDay } from "../../../../utils/Date";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../assets/icons/Icon";
import { v4 as uuid } from "uuid";
import { daysOfWeek } from "../../../../constants/Date";
export const LeftSide = ({
  currentDate,
  selectedDate,
  onGoToNextMonth: onGoToNextMonthHandler,
  onGoToPrevMonth: onGoToPrevMonthHandler,
  onSelectDay: onSelectDayHandler,
}) => {
  return (
    <div className="h-screen p-4 w-[350px] bg-black text-white ">
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
      <div className="mt-12">
        <p className="text-xl text-gray-400 font-bold mb-8">Label</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full w-8 h-8 bg-[#1c48ff]"></div>
            <p className="text-gray-300">work</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full w-8 h-8 bg-[#1ba71b]"></div>
            <p className="text-gray-300">Gym</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full w-8 h-8 bg-[#ee2727]"></div>
            <p className="text-gray-300">Free</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full w-8 h-8 bg-[#8b8b8f]"></div>
            <p className="text-gray-300">Education</p>
          </div>
        </div>
      </div>
    </div>
  );
};
