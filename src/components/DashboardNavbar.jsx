import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

import { IoIosNotificationsOutline } from "react-icons/io";
import profile_image from "../assets/profile_image.png";

const DashboardNavbar = () => {
  const location = useLocation();

  return (
    <main className=" w-full border-b border-borderColor">
      <div className="max-w-[1184px] flex justify-between mx-auto items-center h-[92px]">
        <div className="font-bold text-[18px] leading-[28px]">
          {location.pathname === "/user"
            ? "Hi, Samson Clinton"
            : "Dashboard Overview"}
          {console.log(location)}
        </div>
        <form className="flex items-center w-full max-w-[256px]">
          <label className="sr-only ">Search</label>
          <div className="relative w-full">
            <div className="flex  absolute top-4 left-0 items-center pl-3 pointer-events-none">
              <CiSearch
                width="13px"
                height="13px"
                color=" rgba(0, 0, 0, 0.25)"
              />
            </div>
            <input
              type="text"
              id="simple-search"
              className="  w-full flex-shrink font-productRegular px-[40px] min-h-[46px] text-quick-silver text-[14px] outline-none border border-borderColor  rounded-full block"
              placeholder="Search ..."
              required
            />
          </div>
        </form>
        <div className="flex gap-7">
          <div className="w-[35px] border relative border-borderColor rounded-full h-[35px] flex items-center justify-center">
            <IoIosNotificationsOutline size={20} color="rgba(0, 0, 0, 0.6)" />
            <div className="bg-[#E6521F] w-[8px] h-[8px] absolute rounded-full top-0 right-0"></div>
          </div>

          <div>
            <img src={profile_image} alt="profile-img" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardNavbar;
