import React from "react";
import gain from "../../assets/gain.png";
import losses from "../../assets/losses.png";
import BarChart from "../../components/BarChart";
import DashboardCard from "../../components/DashboardCard";
import FilterGen from "../../assets/filterGen.png";
import DashboardHomeTable from "../../components/DashboardHomeTable";
import Doughnut from "../../components/DoughnutChart";
import Doughnutdata from "../../components/Doughnutdata";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Home = () => {
  return (
    <>
      <div className="flex justify-between mt-11 mb-8">
        <DashboardCard
          title="Total Users"
          percentage={75}
          color="#002A76"
          num1=" 6,325"
          num2="4232"
          textColor="text-[#4B9F47]"
          img={gain}
          chart=" +7,24 %"
        />
        <DashboardCard
          title="Total Investment"
          percentage={20}
          color="#F5B544"
          num1="2000"
          num2="1000"
          textColor="text-[#E6521F]"
          img={losses}
          chart="-10,53%"
        />

        <DashboardCard
          title="Total transactions."
          num1="$12,34.00"
          num2="1232"
          percentage={20}
          color="#4B9F47"
          textColor="text-[#4B9F47]"
          img={gain}
          chart="+14,53 %"
        />
      </div>

      <div className="flex justify-between">
        <div className="mt-6 border rounded-[20px] w-[740px] h-[469px] px-7">
          <div className="flex justify-between items-center w-full">
            <p className="text-[16px] pt-7 leading-[24px] text-[#000000] font-semibold">
              Activity
            </p>
            <div className="flex mt-5 cursor-pointer  space-x-5 items-center w-[121px] h-[32px] rounded-[100px] border justify-center border-tabButton">
              <h2 className="text-[12px] text-[#000000] leading-[20px] font-medium ">
                This Year
              </h2>
              <div>
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
          </div>
          <div className="flex pt-2">
            <Doughnutdata text="New Users" color="bg-analyticUser" />
            <Doughnutdata color="bg-[#002A76]" text="Current Users" />
          </div>

          <BarChart />
        </div>
        <div className="mt-6  border rounded-[20px] w-[359px] h-[469px]">
          <div className="w-[292px] mx-auto pt-7">
            <div className="flex justify-between items-center w-full">
              <p className="text-[16px] leading-[24px] text-[#000000] font-semibold">
                Activity
              </p>
              <BiDotsHorizontalRounded size={24} color="#2772F0" />
            </div>
            <p className="text-[12px] leading-[20px] text-UserText ">
              1 May - 13 May, 2022
            </p>
          </div>
          <Doughnut />

          <div className="mx-auto w-[292px] pt-7">
            <div className="flex space-x-4 ">
              <Doughnutdata
                text="Transactions"
                num="451"
                color="bg-[#002A76]"
              />
              <Doughnutdata text="Payouts" num="128" color="bg-[#F5B544]" />
            </div>

            <div className="flex space-x-4 pt-7">
              <Doughnutdata
                color="bg-[#06C1FF]"
                text="Active Users"
                num="716"
              />
              <Doughnutdata
                color="bg-[#E6521F]"
                text="Inactive Users"
                num="412"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className=" h-[379px] border-[0.8px] rounded-[20px]  border-tabButton mb-9">
          <div className="flex mb-9 mt-10 w-full justify-between">
            <div className="pl-9">
              <h2 className="text-[16px] font-semibold leading-[24px] text-[#000000]  text-left pb-2">
                Payout
              </h2>
              <p className="text-[12px] font-medium leading-[20px] text-UserText  text-left pb-2">
                1,023 Payouts
              </p>
            </div>
            <div className="mr-9 flex space-x-2 rounded-[8px] items-center pl-3 border-[0.8px] bg-[#FFFFFF] w-[156px] h-[44px]">
              <div className=" object-contain">
                <img src={FilterGen} width="" alt="filter" />
              </div>
              <h2 className="text-tabColor   font-semibold text-[12px] ">
                Generate Report
              </h2>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <DashboardHomeTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
