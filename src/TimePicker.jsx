import React, { useRef, useState } from "react";
import { Hours, Minutes } from "./constant";
import { useTimeScroller } from "./hooks/useTimeScroller";
import { useScrollHandler } from "./hooks/useScrollHandler";
import Bar from "./components/Bar";
import MinuteContainer from "./components/MinuteContainer";
import HourContainer from "./components/HourContainer";
import Buttons from "./components/Buttons";
const TimePicker = ({
  data,
  cancelPage = "/",
  confirmPage = "/",
  language = "en",
  activeColor = "orange",
  backgroundColor = "black",
  textColor = "white",
  numbersColor = "gray",
}) => {
  const minuteEl = useRef(null);
  const minuteSelector = useRef(null);
  const hourEl = useRef(null);
  const hourSelector = useRef(null);
  var [activeHour, setActiveHour] = useState();
  var activeHourIndx = 59;
  var activeMinuteIndx = 299;
  var [activeMinute, setActiveMinute] = useState();
  useTimeScroller({
    hourEl,
    minuteEl,
    activeHourIndx,
    activeMinuteIndx,
    activeColor,
    backgroundColor,
    numbersColor,
    textColor,
  });
  useScrollHandler({
    hourEl,
    minuteEl,
    hourSelector,
    minuteSelector,
    setActiveHour,
    setActiveMinute,
    Hours,
    Minutes,
  });
  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      style={{ backgroundColor: backgroundColor }}
      className={`timePicker  overflow-hidden h-screen w-screen pt-[5vh] px-[1.5vh] flex flex-col justify-start gap-[10vh]`}
    >
      <Bar language={language} textColor={textColor} />
      <section className=' w-full h-[55vh] flex items-center justify-center overflow-hidden gap-[10vh] '>
        <HourContainer
          hourEl={hourEl}
          hourSelector={hourSelector}
          activeHour={activeHour}
          setActiveHour={setActiveHour}
          language={language}
          activeColor={activeColor}
          textColor={textColor}
          numbersColor={numbersColor}
        />
        <MinuteContainer
          minuteEl={minuteEl}
          activeMinute={activeMinute}
          minuteSelector={minuteSelector}
          setActiveMinute={setActiveMinute}
          language={language}
          activeColor={activeColor}
          textColor={textColor}
          numbersColor={numbersColor}
        />
      </section>
      <Buttons
        data={data}
        cancelPage={cancelPage}
        confirmPage={confirmPage}
        language={language}
        activeHour={activeHour}
        activeMinute={activeMinute}
        textColor={textColor}
      />
    </main>
  );
};

export default TimePicker;
