import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ path, text, img }) => {
  return (
    <NavLink
      to={path}
      className="h-[48px] cursor-pointer flex items-center pl-4 text-white space-x-4"
    >
      <img src={img} alt="" />

      <h2 className="text-[16px] leading-[24px]">{text}</h2>
    </NavLink>
  );
};

export default SidebarLink;
