import React from "react";
import box from "../assets/box.png";
import user from "../assets/user.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DashboardTableBody = ({ color }) => {
  return (
    <tr className="border-t h-[65px]">
      <td>
        <div className="flex gap-3 items-center">
          <img src={box} alt="" className="w-[16px] h-[16px]" />

          <div className="flex gap-3 items-center">
            <img src={user} className="w-[40px] h-[39px]" alt="" />
            <p className="text-[12px] text-[#000000] leading-[20px] font-medium">
              Hamid Clinton
            </p>
          </div>
        </div>
      </td>

      <td className="text-[12px] text-[#000000] leading-[20px] font-medium">
        17 May 2022
      </td>
      <td className="text-[12px] text-[#000000] leading-[20px] font-medium">
        hamid04@gmail.com
      </td>
      <td className=" text-[12px] text-[#000000] leading-[20px] font-medium">
        Joint
      </td>
      <td className="pl-6">
        {color ? (
          <div className="flex items-center justify-center text-[12px] bg-approvedUser text-[#002A76] w-[91px] h-[32px] rounded-[8px] leading-[20px] font-medium">
            Approved
          </div>
        ) : (
          <div className="flex items-center justify-center text-[12px] bg-tableBoxBg text-[#4B9F47] w-[91px] h-[32px] rounded-[8px] leading-[20px] font-medium">
            Approved
          </div>
        )}
      </td>
      <td className="pl-16">
        <div className="flex  space-x-2 items-center w-[91px] h-[32px] rounded-[8px] border justify-center border-tabButton">
          <h2 className="text-[12px] text-[#000000] leading-[20px] font-medium ">
            Details
          </h2>
          <div>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div></div>
      </td>
    </tr>
  );
};

export default DashboardTableBody;
