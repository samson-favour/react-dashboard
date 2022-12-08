import React from "react";
import DashboardTableHead from "./DashboardTableHead";
import box from "../assets/box.png";
import DashboardHomeTableBody from "./DashboardHomeTableBody";

const DashboardHomeTable = () => {
  return (
    <div className="">
      <table>
        <thead className="w-full  ">
          <tr className="">
            <th scope="col" className="w-[260px] pl-9">
              <div className="flex gap-3">
                <img src={box} alt="" className="w-[16px] h-[16px]" />

                <DashboardTableHead name="Account Name" />
              </div>
            </th>
            <th scope="col" className="w-[115px]">
              <DashboardTableHead name="Date" />
            </th>
            <th scope="col" className="w-[90px]">
              <DashboardTableHead name="Amount" />
            </th>
            <th scope="col" className="w-[190px]">
              <DashboardTableHead name="Email Address" />
            </th>
            <th scope="col" className="w-[113px] ">
              <DashboardTableHead name="Account Type" />
            </th>
            <th scope="col" className="w-[175px] ">
              <DashboardTableHead name="Investment Type" />
            </th>
            <th scope="col" className="w-[125px] ">
              <DashboardTableHead name="Status" />
            </th>
            <th scope="col" className="w-[115px] ">
              <DashboardTableHead name="Actions" />
            </th>
          </tr>
        </thead>

        <tbody>
          <DashboardHomeTableBody />
          <DashboardHomeTableBody color/>
          <DashboardHomeTableBody />
        </tbody>
      </table>
    </div>
  );
};

export default DashboardHomeTable;
