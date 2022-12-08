import React from 'react'

const UserFilter = ({title,icon}) => {
  return (
    <div className="flex  pl-2 space-x-4 items-center h-full bg-[#F7F9FB] border-[0.8px] rounded-[8px] border-tabButton">
      <h2 className="text-tabColor  font-semibold text-[12px] ">{title}</h2>
      <div>{icon}</div>
    </div>
  );
}

export default UserFilter