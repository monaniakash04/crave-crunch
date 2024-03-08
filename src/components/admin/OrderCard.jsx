import React from "react";
// import iceCreamImg from "../../image/undraw_ice_cream_s-2-rh.svg";
import OrderFood from "../../image/undraw_shopping_app_flsj.svg";
import "../../index.css";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

const OrderCard = () => {
  return (
    <>
      <div className="w-full gap-5 h-[70px] rounded-sm bg p-1 flex duration-200 hover:border-2 items-center">
        <div className="max-w-[150px] h-[50px] border-2 rounded-md">
          <img src={OrderFood} className="w-full h-full" alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="font text-white md:text-xl">TABLE 1</h1>
          <h1 className="font text-xs text-white">Click To View List</h1>
        </div>
        <div className="flex md:gap-4">
          <MdDelete className="text-white cursor-pointer md:text-xl text-lg" />
          <IoMdDoneAll className="text-white cursor-pointer md:text-xl text-lg" />
        </div>
      </div>
    </>
  );
};

export default OrderCard;
