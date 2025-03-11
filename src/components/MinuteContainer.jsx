import React from "react";
import { Minutes } from "../constant";
import clsx from "clsx";
import Selector from "./Selector";
const MinuteContainer = ({
  minuteEl,
  activeMinute,
  minuteSelector,
  setActiveMinute,
  language,
  activeColor,
  textColor,
  numbersColor = "red",
}) => {
  return (
    <div className=' flex flex-col items-center justify-start gap-[5vh] overflow-hidden'>
      {language === "fa" ? (
        <h2 style={{ color: textColor }}>دقیقه</h2>
      ) : (
        <h2 style={{ color: textColor }}>Minute</h2>
      )}
      <div
        style={{ scrollSnapType: "y mandatory" }}
        className=' relative  flex flex-col items-center justify-start h-[45vh] w-[30vw] whitespace-nowrap overflow-y-auto overflow-x-hidden gap-[4vh]  duration-300'
        ref={minuteEl}
      >
        {Minutes.map((item, index) => {
          return (
            <h4
              key={`minuteTimePicker-${index}`}
              id='minute'
              style={{
                scrollSnapAlign: "center",
                scrollSnapStop: "normal",
                color: activeMinute == item ? activeColor : numbersColor,
              }}
              className={clsx(
                "scroll-snap w-full flex justify-center  items-center  !text-[9vh] duration-300  border-b border-gray-400",
                activeMinute === item ? "!cursor-default" : "!cursor-pointer",
                index === 0 ? "pt-[16.9vh]" : "",
                index + 1 === Minutes.length ? "mb-[17vh]" : ""
              )}
              onClick={() => {
                setActiveMinute(item);
              }}
            >
              {item}
            </h4>
          );
        })}
      </div>
      <Selector selector={minuteSelector} />
    </div>
  );
};

export default MinuteContainer;
