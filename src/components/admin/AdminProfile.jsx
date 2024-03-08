import React from "react";
import Sidebar from "./Sidebar";

const AdminProfile = ({ sideBar, setSideBar }) => {
  return (
    <>
      <div className="flex  w-full min-h-[600px]">
        <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
        <div className=""></div>
      </div>
    </>
  );
};

export default AdminProfile;
