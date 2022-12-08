import React from "react";
import DashboardTableHead from "./DashboardTableHead";
import box from "../assets/box.png";
import DashboardTableBody from "./DashboardTableBody";

const DashboardTable = () => {
  return (
    <div className="">
      <table>
        <thead className="w-full  ">
          <tr className="">
            <th scope="col" className="w-[260px]">
              <div className="flex gap-3">
                <img src={box} alt="" className="w-[16px] h-[16px]" />

                <DashboardTableHead name="User Name" />
              </div>
            </th>
            <th scope="col" className="w-[150px]">
              <DashboardTableHead name="Date" />
            </th>
            <th scope="col" className="w-[260px]">
              <DashboardTableHead name="Email Address" />
            </th>
            <th scope="col" className="w-[170px]">
              <DashboardTableHead name="User Type" />
            </th>
            <th scope="col" className="w-[190px] pl-6">
              <DashboardTableHead name="KYC Status" />
            </th>
            <th scope="col" className="w-[190px] pl-16">
              <DashboardTableHead name="Actions" />
            </th>
          </tr>
        </thead>

        <tbody>
          <DashboardTableBody />
          <DashboardTableBody color/>
          <DashboardTableBody />
          <DashboardTableBody color />
          <DashboardTableBody />
          <DashboardTableBody color />
          <DashboardTableBody />
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
