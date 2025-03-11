import { useEffect } from "react";

export const useScrollHandler = ({
  hourEl,
  minuteEl,
  hourSelector,
  minuteSelector,
  setActiveHour,
  setActiveMinute,
  Hours,
  Minutes,
}) => {
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
  }, [
    hourEl,
    minuteEl,
    hourSelector,
    minuteSelector,
    setActiveHour,
    setActiveMinute,
    Hours,
    Minutes,
  ]);
};

export default useScrollHandler;
