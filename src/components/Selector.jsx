import React from "react";
const Selector = ({ selector }) => {
  return (
    <div
      className='absolute opacity-0 bg-slate-500 rounded-sm  -translate-y-1/2 top-[55%] h-[2vh] w-[32vw]'
      ref={selector}
    />
  );
};

export default Selector;
