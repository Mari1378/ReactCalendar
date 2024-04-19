import React from "react";
import { v4 as uuid } from "uuid";
import { calenderCreator, isToDay } from "../../../../utils/Date";

export const MakeWeek = ({ currentDate, onSelectDayHandler, selectedDate }) => {
  return (
    <div className="flex gap-2 flex-col">
      {calenderCreator(currentDate).map((week) => {
        return (
          <div className="flex justify-between" key={uuid()}>
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
  );
};
