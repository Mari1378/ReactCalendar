import dayjs from "dayjs";
import React, { useState } from "react";
import { LeftSide, RightSide } from "./components";
import { v4 as uuid } from "uuid";

export const Home = () => {
  const [currentDate, setCurentDate] = useState(dayjs(new Date()));
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
  const [Topic, setTopic] = useState([]);
  const [value, setValue] = useState("");
  const [color, setColor] = useState("#00FA6C");
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
  const onDeleteCategory = (id) => {
    const newTopic = Topic.filter((item) => {
      return item.id !== id;
    });
    setTopic(newTopic);
  };
  // ....................
  const onGoToNextMonthHandler = () => {
    setCurentDate((prevDate) => prevDate.set("month", prevDate.month() + 1));
  };
  const onGoToPrevMonthHandler = () => {
    setCurentDate((prevDate) => prevDate.set("month", prevDate.month() - 1));
  };
  const onSelectDayHandler = (date) => {
    setSelectedDate(date);
  };

  // ....................
  const onTodayHandler = () => {
    setCurentDate(dayjs(new Date()));
    setSelectedDate(dayjs(new Date()));
  };
  return (
    <div className="flex h-full">
      <LeftSide
        currentDate={currentDate}
        selectedDate={selectedDate}
        onGoToNextMonth={onGoToNextMonthHandler}
        onGoToPrevMonth={onGoToPrevMonthHandler}
        onSelectDay={onSelectDayHandler}
        Topic={Topic}
        onAddHandler={onAddHandler}
        onDeleteCategory={onDeleteCategory}
        value={value}
        setValue={setValue}
        color={color}
        setColor={setColor}
      />
      <RightSide
        currentDate={currentDate}
        onToday={onTodayHandler}
        selectedDate={selectedDate}
        onSelectDay={onSelectDayHandler}
        Topic={Topic}
      />
    </div>
  );
};
