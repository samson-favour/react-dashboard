import React from 'react'
import {Outlet} from 'react-router-dom'
import DashboardMobileSidebar from '../../components/DashboardMobileSidebar';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';

const SharedLayout = () => {
  return (
    <main className="flex w-full">
      <DashboardMobileSidebar />
     <DashboardSidebar/>
      <div className='w-full'>
        <DashboardNavbar />
        <div className="max-w-[1184px] mx-auto ">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default SharedLayout