import React from "react";

const Bar = ({ language, textColor }) => {
  return (
    <section>
      {language === "fa" ? (
        <h1 style={{ color: textColor }}>انتخاب زمان</h1>
      ) : (
        <h1 style={{ color: textColor }}>Select Time</h1>
      )}
    </section>
  );
};

export default Bar;
