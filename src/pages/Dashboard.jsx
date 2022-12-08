import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

const Dashboard = ({children}) => {
  return (
    <>
      <div className="flex ">
        <DashboardSidebar />
        <div className="w-full">
          <DashboardNavbar />
          <div>
            <div className="max-w-[1169px]  w-full  mx-auto">dhd</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

