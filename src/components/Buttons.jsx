import React from "react";
const Buttons = ({
  textColor,
  data,
  cancelPage,
  confirmPage,
  language,
  activeHour,
  activeMinute,
}) => {
  return (
    <section className='fixed bottom-0 left-0 h-[10vh] w-screen flex items-center justify-center gap-[20vw]'>
      <a
        href={`${confirmPage}`}
        className='flex items-center justify-center'
        style={{ color: textColor }}
        onClick={() => {
          data({ hour: activeHour, minute: activeMinute });
        }}
      >
        {language === "fa" ? "تایید" : "Confirm"}
      </a>

      <a
        href={`${cancelPage}`}
        className='flex items-center justify-center'
        style={{ color: textColor }}
      >
        {language === "fa" ? "لغو" : "Cancel"}
      </a>
    </section>
  );
};

export default Buttons;
