import React from "react";

const Approved = ({ color, bg, textColor }) => {
  if (color === "#E6521F")
    return (
      <div
        className={`flex items-center justify-center text-[12px] bg-decline ${textColor} w-[91px] h-[32px] rounded-[8px] leading-[20px] font-medium`}
      >
        Approved
      </div>
    );
  if (color === "#EEB042")
    return (
      <div
        className={`flex items-center justify-center text-[12px] bg-pending ${textColor} w-[91px] h-[32px] rounded-[8px] leading-[20px] font-medium`}
      >
        Approved
      </div>
    );
  return (
    <div
      className={`flex items-center justify-center text-[12px] bg-tableBoxBg ${textColor} w-[91px] h-[32px] rounded-[8px] leading-[20px] font-medium`}
    >
      Approved
    </div>
  );
};

export default Approved;
