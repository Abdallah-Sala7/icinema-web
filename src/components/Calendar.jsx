import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../util/calenderData";
import cn from "../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  return (
    <div>
      <div className="flex gap-5 items-center justify-center">
        <GrFormPrevious
          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all dark:invert"
          onClick={() => {
            setToday(today.month(today.month() - 1));
          }}
        />

        <h1
          className="text-dark font-light  cursor-pointer hover:scale-95 transition-all dark:text-white"
          onClick={() => setToday(currentDate)}
        >
          {months[today.month()]}, {today.year()}
        </h1>

        <GrFormNext
          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all dark:invert"
          onClick={() => {
            setToday(today.month(today.month() + 1));
          }}
        />
      </div>

      <div className="flex justify-around py-2 mb-1 border-b border-darkGray">
        {days.map((day, index) => {
          return (
            <h2
              key={index}
              className="text-sm font-light text-center text-dark h-4 w-4 text-gray-500 select-none dark:text-white"
            >
              {day}
            </h2>
          );
        })}
      </div>

      <div className="grid grid-cols-7 ">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="text-center grid place-content-center text-xs"
              >
                <h3
                  className={cn(
                    currentMonth
                      ? "text-dark dark:text-white"
                      : "text-zinc-400",
                    today ? "border-b border-primary" : "",
                    "h-4 w-4 grid place-content-center select-none",
                    date.month() === 3 && date.date() === 7
                      ? "!text-primary"
                      : ""
                  )}
                >
                  {date.date()}
                </h3>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
