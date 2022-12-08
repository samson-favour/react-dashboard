import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardCard = ({
  percentage,
  img,
  color,
  textColor,
  num1,
  num2,
  chart,
  title,
}) => {
  return (
    <div className="w-[363.42px] h-[160px] border rounded-[20px] flex border-borderColor">
      <div className="flex space-x-7 items-center">
        <div
          style={{ width: 106.65, height: 103 }}
          className="font-semibold ml-8"
        >
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            counterClockwise="false"
            styles={buildStyles({
              textSize: "20px",
              pathColor: color,
              textColor: "#000000",
            })}
            strokeWidth={4}
          />
        </div>
        <div>
          <p className="text-[14px] pb-3 font-semibold leading-[20px] text-cardColor">
            {title}
          </p>
          <h1 className="text-[20px] pb-1 font-semibold leading-[20px] text-[#000000]">
            {num1}
          </h1>
          <p className="text-[12px] pb-1 font-medium leading-[20px] text-cardColor">
            Compared to ({num2} last year)
          </p>
          <div className="flex space-x-2">
            <img src={img} alt="cardimg" />
            <p
              className={`text-[12px] font-medium leading-[20px] ${textColor} `}
            >
              {chart}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
