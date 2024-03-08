import React from "react";
import "../../index.css";
import OrderCard from "./OrderCard";
import Sidebar from "./Sidebar";
import OrderCardWithDetail from "./OrderCardWithDetail";

const AdminDashboard = ({ sideBar, setSideBar }) => {
  return (
    <>
      <div className="flex  w-full min-h-[600px]">
        <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
        <div className="w-full flex flex-wrap gap-5 justify-center items-center">
          {/* Order List with Table number */}
          <div className="max-w-[300px]   p-1 flex flex-col  min-h-[400px] bg-orange-400">
            <OrderCard />
          </div>
          {/* Order Name With Quantity */}
          <div className="max-w-[300px]   p-1 flex flex-col  min-h-[400px] bg-orange-400">
            <OrderCardWithDetail />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
