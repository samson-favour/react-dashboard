import DashboardTable from "../../components/DashboardTable";
import JoinUser from "../tabs/JoinUser";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

const User = () => {
  const [openTab, setOpenTab] = useState(1);


  return (
    <div>
      <div className="mt-7 mb-4 ">
        <h1 className="font-semibold text-[18px] pb-2 leading-[28px] text-[#000000]">
          Users
        </h1>
        <p className="font-normal text-[14px] leading-[22px] text-UserText">
          In the Users details section, you can review and manage all
          transactions with their details. You can view and delete many
          informatin as you want.
        </p>
      </div>

      <div>
        <div className="mb-4 border-tabButton border-b-[0.8px] ">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="mr-4">
              <button
                className={` ${
                  openTab === 1
                    ? "border-[#00B3FF] text-[#00B3FF]"
                    : "text-tabColor"
                } text-[14px] inline-block p-3  rounded-t-lg border-b-2   `}
                onClick={() => setOpenTab(1)}
              >
                All Users
              </button>
            </li>
            <li className="mr-4">
              <button
                className={` ${
                  openTab === 2
                    ? "border-[#00B3FF] text-[#00B3FF]"
                    : "text-tabColor"
                } text-[14px] inline-block p-3  rounded-t-lg border-b-2  `}
                id="dashboard-tab"
                type="button"
                onClick={() => setOpenTab(2)}
              >
                Individual User
              </button>
            </li>
            <li className="mr-4">
              <button
                className={` ${
                  openTab === 3
                    ? "border-[#00B3FF] border-b-2   text-[#00B3FF]"
                    : "text-tabColor"
                } text-[14px] inline-block p-3  rounded-t-lg    `}
                type="button"
                onClick={() => setOpenTab(3)}
              >
                Corporate User
              </button>
            </li>
            <li>
              <button
                className={` ${
                  openTab === 4
                    ? "border-[#00B3FF] border-b-2 text-[#00B3FF]"
                    : "text-tabColor"
                } text-[14px] inline-block p-3  rounded-t-lg   `}
                type="button"
                onClick={() => setOpenTab(4)}
              >
                Joint User
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div className={openTab === 4 ? "block" : "hidden"}>
            <JoinUser />
          </div>
        </div>
      </div>
      {openTab === 4 ? (
        <div>
          <div className="mt-8">
            <DashboardTable />
          </div>

          <div className="w-full rounded-[8px] mt-6 h-[57px] flex justify-between items-center bg-UserBox">
            <div className="pl-4">
              <p className="text-[12px] leading-[20px] text-tabColor">
                1-11 of 1200 pages
              </p>
            </div>
            <div className="flex gap-3 items-center pr-10">
              <p className="text-[12px] leading-[20px] text-tabColor">
                The page you’re on
              </p>
              <div className="flex items-center gap-3">
                <div className="flex  items-center w-[31px] h-[25px] rounded-[8px] bg-[#FFFFFF] border justify-center border-tabButton">
                  <h2 className="text-[12px] text-[#000000] leading-[20px] font-medium ">
                    1
                  </h2>
                  <div>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>

                <div className="h-[25px] w-[0.8px] bg-tabButton"></div>
                <div className="flex gap-2">
                  <div className="w-[23px] h-[25px] rounded-[4px] flex items-center justify-center border-leftArrow border-[0.8px]">
                    <FiChevronLeft color="rgba(0, 0, 0, 0.18)" />
                  </div>
                  <div className="w-[23px] h-[25px] rounded-[4px] flex items-center justify-center border-tabButton border">
                    <FiChevronRight color="#000000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default User;
