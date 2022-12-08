import React from 'react'

const DashboardTableHead = ({name,img}) => {
  return (
    <div className="">
      <p className="text-[12px] font-medium leading-[20px] text-UserText text-left pb-2">
        {name}
      </p>
    </div>
  );
}

export default DashboardTableHead