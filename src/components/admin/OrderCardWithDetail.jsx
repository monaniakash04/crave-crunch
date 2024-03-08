import React from "react";

const OrderCardWithDetail = () => {
  return (
    <>
      <div className="w-full gap-5 h-[70px] rounded-sm bg p-1 flex duration-200 hover:border-2 items-center">
        <div className="max-w-[150px] h-[50px] border-2 rounded-md">
          <img
            src="https://th.bing.com/th/id/OIP.sPvQibznbJiC4yEfY6pnRgHaHa?rs=1&pid=ImgDetMain"
            className="w-full h-full"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font text-white md:text-sm text-sx">FANTA DRINK</h1>
          <h1 className="font text-xs text-white">40/-</h1>
        </div>
        <div className="flex flex-col md:gap-2 justify-center">
          <h1 className="uppercase font text-white md:text-sm text-sx">
            QUANTITY
          </h1>
          <h1 className="uppercase font text-white md:text-sm text-sx text-center">
            10
          </h1>
        </div>
      </div>
    </>
  );
};

export default OrderCardWithDetail;
