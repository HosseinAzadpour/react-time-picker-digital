import React, { useEffect, useRef, useState } from "react";
import "./TimePicker.css";
import { Hours, Minutes } from "./constant";
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

  useEffect(() => {
    const handleHourScroll = () => {
      var hours = document.querySelectorAll("#hour");
      for (var i = 0; i < hours.length; i++) {
        if (
          hours[i].getBoundingClientRect().bottom >
            hourSelector.current.getBoundingClientRect().bottom &&
          hours[i].getBoundingClientRect().top <
            hourSelector.current.getBoundingClientRect().top
        ) {
          setActiveHour(Hours[i]);
        }
      }
    };

    const handleMinuteScroll = () => {
      var minutes = document.querySelectorAll("#minute");
      for (var i = 0; i < minutes.length; i++) {
        if (
          minutes[i].getBoundingClientRect().bottom >
            minuteSelector.current.getBoundingClientRect().bottom &&
          minutes[i].getBoundingClientRect().top <
            minuteSelector.current.getBoundingClientRect().top
        ) {
          setActiveMinute(Minutes[i]);
        }
      }
    };
    hourEl.current.addEventListener("scroll", handleHourScroll);
    minuteEl.current.addEventListener("scroll", handleMinuteScroll);

    return () => {
      hourEl.current?.removeEventListener("scroll", handleHourScroll);
      minuteEl.current?.removeEventListener("scroll", handleMinuteScroll);
    };
  }, [hourEl, minuteEl, hourSelector, minuteSelector]);
  useEffect(() => {
    if (hourEl.current && minuteEl.current) {
      hourEl.current.scrollTo({
        top: document.querySelectorAll("#hour")[activeHourIndx]?.offsetTop,
        behavior: "smooth",
      });
      minuteEl.current.scrollTo({
        top: document.querySelectorAll("#minute")[activeMinuteIndx]?.offsetTop,
        behavior: "smooth",
      });
    }
    const root = document.querySelector(":root");
    root.style.setProperty("--secondary", activeColor);
    backgroundColor !== undefined &&
      root.style.setProperty("--primary", backgroundColor);

    root.style.setProperty("--number", numbersColor);

    root.style.setProperty("--text", textColor);
  }, [
    hourEl,
    minuteEl,
    activeHourIndx,
    activeMinuteIndx,
    activeColor,
    backgroundColor,
    numbersColor,
    textColor,
  ]);

  return (
    <main dir={`${language === "fa" ? "rtl" : "ltr"}`} className='timePicker'>
      <section className='addressSection'>
        {language == "fa" ? <h1>انتخاب زمان</h1> : <h1>Select Time</h1>}
      </section>
      <section className='container'>
        <div className='timer'>
          {language == "fa" ? <h2>دقیقه</h2> : <h2>Minute</h2>}
          <div className='timerContainer' ref={minuteEl}>
            {Minutes.map((item, index) => {
              return (
                <h4
                  key={`minuteTimePicker-${index}`}
                  id='minute'
                  className={activeMinute == item ? "active" : ""}
                  onClick={() => {
                    setActiveMinute(item);
                  }}
                >
                  {item}
                </h4>
              );
            })}
          </div>
          <div className='hourSelector' ref={minuteSelector}></div>
        </div>
        <div className='timer'>
          {language == "fa" ? <h2>ساعت</h2> : <h2>Hour</h2>}
          <div className='timerContainer' ref={hourEl}>
            {Hours.map((item, index) => {
              return (
                <h4
                  key={`hourTimePicker-${index}`}
                  id='hour'
                  className={activeHour == item ? "active" : ""}
                  onClick={() => {
                    setActiveHour(item);
                  }}
                >
                  {item}
                </h4>
              );
            })}
          </div>
          <div className='hourSelector' ref={hourSelector}></div>
        </div>
      </section>
      <section className='buttons'>
        <a
          href={`${confirmPage}`}
          onClick={() => {
            data({ hour: activeHour, minute: activeMinute });
          }}
        >
          {language == "fa" ? "تایید" : "Confirm"}
        </a>

        <a href={`${cancelPage}`}>{language == "fa" ? "لغو" : "Cancel"}</a>
      </section>
    </main>
  );
};

export default TimePicker;
