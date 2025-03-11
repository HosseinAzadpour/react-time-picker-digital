import React from "react";
import { Hours } from "../constant";
import clsx from "clsx";
import Selector from "./Selector";

const HourContainer = ({
  hourEl,
  hourSelector,
  activeHour,
  setActiveHour,
  language,
  activeColor,
  textColor,
  numbersColor,
}) => {
  return (
    <div className='flex flex-col items-center justify-start gap-[5vh] overflow-hidden'>
      {language === "fa" ? (
        <h2 style={{ color: textColor }}>ساعت</h2>
      ) : (
        <h2 style={{ color: textColor }}>Hour</h2>
      )}
      <div
        style={{ scrollSnapType: "y mandatory" }}
        className='relative  flex flex-col items-center justify-start h-[45vh] w-[30vw] whitespace-nowrap overflow-y-auto overflow-x-hidden gap-[4vh]  duration-300'
        ref={hourEl}
      >
        {Hours.map((item, index) => {
          return (
            <h4
              key={`hourTimePicker-${index}`}
              id='hour'
              style={{
                scrollSnapAlign: "center",
                scrollSnapStop: "normal",
                color: activeHour == item ? activeColor : numbersColor,
              }}
              className={clsx(
                "scroll-snap w-full flex justify-center items-center !text-[9vh] duration-300  border-b border-gray-400",
                activeHour === item ? "!cursor-default" : "!cursor-pointer",
                index === 0 ? "pt-[16.9vh]" : "",
                index + 1 === Hours.length ? "mb-[17vh]" : ""
              )}
              onClick={() => {
                setActiveHour(item);
              }}
            >
              {item}
            </h4>
          );
        })}
      </div>
      <Selector selector={hourSelector} />
    </div>
  );
};

export default HourContainer;
