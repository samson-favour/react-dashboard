import React from "react";

const Doughnutdata = ({ text, num, color }) => {
  return (
    <div className="flex items-center justify-between w-[146px]">
      <div className="flex items-center space-x-2">
        <div className={`w-[15.54px] h-[15px] ${color} rounded-full`}></div>
        <p className="text-[12px] leading-[20px] text-[#000000] font-medium">{text}</p>
      </div>
      <p className="text-[12px] text-UserText">{num}</p>
    </div>
  );
};

export default Doughnutdata;
