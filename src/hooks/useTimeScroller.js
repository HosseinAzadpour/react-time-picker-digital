import { useEffect } from "react";

export const useTimeScroller = ({
  hourEl,
  minuteEl,
  activeHourIndx,
  activeMinuteIndx,
  activeColor,
  backgroundColor,
  numbersColor,
  textColor,
  onHourClick, // تابعی برای مدیریت کلیک روی ساعت
  onMinuteClick, // تابعی برای مدیریت کلیک روی دقیقه
}) => {
  useEffect(() => {
    // Scroll to active hour and minute
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

  // تابع کلیک ساعت برای اسکرول به موقعیت فعال
  const handleHourClick = (index) => {
    if (hourEl.current) {
      hourEl.current.scrollTo({
        top: document.querySelectorAll("#hour")[index]?.offsetTop,
        behavior: "smooth",
      });
    }
    if (onHourClick) {
      onHourClick(index);
    }
  };

  // تابع کلیک دقیقه برای اسکرول به موقعیت فعال
  const handleMinuteClick = (index) => {
    if (minuteEl.current) {
      minuteEl.current.scrollTo({
        top: document.querySelectorAll("#minute")[index]?.offsetTop,
        behavior: "smooth",
      });
    }
    if (onMinuteClick) {
      onMinuteClick(index);
    }
  };

  return {
    handleHourClick,
    handleMinuteClick,
  };
};

export default useTimeScroller;
