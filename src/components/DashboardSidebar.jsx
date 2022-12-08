import React from "react";
import dashboard_logo from "../assets/dashboard_logo.png";
import SidebarLink from "./SidebarLink";
import dashboard from "../assets/dashboard.png";
import users from "../assets/users.png";
import product from "../assets/product.png";
import category from "../assets/categories.png";
import investment from "../assets/investment.png";
import transaction from "../assets/transaction.png";

const DashboardSidebar = () => {
  return (
    <main className="max-w-[256px] min-h-screen">
      <div className="w-[256px] min-h-full bg-[#002A76]">
        <div className="flex justify-center h-[92px] items-center border-b border-borderBottomDashBLogo">
          <img src={dashboard_logo} alt="logo" />
        </div>

        <div className="mt-6 ">
          <SidebarLink img={dashboard} text="Dashboard" path='/' />
          <SidebarLink img={users} text="Users" path='/user' />
          <SidebarLink img={product} path='/product' text="Product" />
          <SidebarLink img={category} path='/categories' text="Categories" />
          <SidebarLink img={investment} path='/investment' text="Investment" />
          <SidebarLink img={transaction} path='/transaction ' text="Transactions" />
        </div>
        <div className="border-t border-borderBottomDashBLogo mt-[44rem] text-center pt-6">
          <p className="font-normal text-[14px] text-white leading-[22px] ">
            Copyright 2022 @PAC
          </p>
        </div>
      </div>
    </main>
  );
};

export default DashboardSidebar;
