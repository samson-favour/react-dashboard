import React from 'react'
import { CiSearch } from "react-icons/ci";
import UserFilter from "../../components/UserFilter";
import { TiArrowSortedDown } from "react-icons/ti";
import FilterGen from "../../assets/filterGen.png";

const JoinUser = () => {
  return (
    <form className="rounded-[8px] h-[66px] flex justify-between items-center bg-UserBox px-4">
      <div className="flex space-x-4">
        <div className="relative ">
          <div className="flex  absolute top-4 left-0 items-center pl-3 pointer-events-none">
            <CiSearch width="13px" height="13px" color="#000000" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="text-tabColor flex-shrink w-[296px] font-productRegular px-[30px] min-h-[46px] text-quick-silver text-[12px] outline-none border border-borderColor  rounded-[8px] block"
            placeholder="Search for username, or something..."
            required
          />
        </div>
        <div className="w-[94px] h-[44px] rounded-[8px]   ">
          <UserFilter
            title="Date"
            icon={
              <TiArrowSortedDown width="9px" height="7.5px" color="#CACBD4" />
            }
          />
        </div>
        <div className="w-[155px] h-[44px] rounded-[8px]   ">
          <UserFilter
            title="User Type"
            icon={
              <TiArrowSortedDown width="9px" height="7.5px" color="#CACBD4" />
            }
          />
        </div>
        <div className="w-[126px] h-[44px] rounded-[8px]   ">
          <UserFilter
            title="KYC Status"
            icon={
              <TiArrowSortedDown width="9px" height="7.5px" color="#CACBD4" />
            }
          />
        </div>
      </div>
      <div className=" flex space-x-2 rounded-[8px] items-center pl-3 border-[0.8px] bg-[#FFFFFF] w-[156px] h-[44px]">
        <div className=" object-contain">
          <img src={FilterGen} width="" alt="filter" />
        </div>
        <h2 className="text-tabColor   font-semibold text-[12px] ">
          Generate Report
        </h2>
      </div>
    </form>
  );
}

export default JoinUser