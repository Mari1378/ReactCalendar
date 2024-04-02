import React from "react";
import { calenderCreator } from "../../../../utils/Date";
import { v4 as uuid } from "uuid";
import { Modal } from "../Modal";
export const MonthComponent = ({
  currentDate,
  selectedDate,
  isOpen,
  setIsOpen,
}) => {
  const onOpenModalHandler = () => {
    setIsOpen(true);
  };
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "TuesDay",
    "Wednsday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="flex flex-col grow">
      <div className="flex">
        {dayOfWeek.map((day) => {
          return (
            <div
              className="border border-gray-200 w-full h-12 flex justify-center items-center font-bold text-gray-600 "
              key={uuid()}
            >
              {day}
            </div>
          );
        })}
      </div>
      {calenderCreator(currentDate).map((weeks, index) => {
        return (
          <div key={uuid()} className="flex h-full ">
            {weeks.map((days) => {
              return (
                <div
                  onClick={onOpenModalHandler}
                  className="text-l cursor-pointer text-gray-900 font-thin border border-gray-200 w-full flex items-center p-2 flex-col "
                  key={uuid()}
                >
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
      {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
    </div>
  );
};
