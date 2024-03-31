import React from "react";
import { calenderCreator } from "../../../../utils/Date";
import { v4 as uuid } from "uuid";
export const MonthComponent = ({ currentDate, selectedDate }) => {
  return (
    <div className="flex flex-col grow">
      {calenderCreator(currentDate).map((weeks, index) => {
        return (
          <div key={uuid()} className="flex h-full">
            {weeks.map((days) => {
              return (
                <div
                  className="text-l text-gray-900 font-thin border border-gray-200 w-full flex items-center p-2 flex-col "
                  key={uuid()}
                >
                  {index === 0 && days ? (
                    <p key={uuid()}>{days.format("dddd")}</p>
                  ) : null}
                  <p
                    className="h-8 w-8 flex justify-center items-center"
                    style={
                      days
                        ? selectedDate.format("DD/MM/YYYY") ===
                          days.format("DD/MM/YYYY")
                          ? {
                              backgroundColor: "blue",
                              borderRadius: "100%",
                              color: "white",
                            }
                          : {}
                        : {}
                    }
                  >
                    {days ? days.get("D") : null}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
