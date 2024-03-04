import React from "react";

const OrderCard = () => {
  return (
    <>
      <div className="min-w-[160px] rounded-lg p-2 flex flex-col justify-center h-[190px] bg-orange-500">
        <div className="w-[110px] rounded-lg mx-auto h-[100px]">
          <img
            src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pizza"
            className="w-full h-full rounded-lg"
          />
        </div>
        <h1 className="text-md font-bold text-center uppercase text-white ">
          Arugula and burratta pizza
        </h1>
        <h1 className="text-md text-center uppercase text-white ">100/-</h1>
      </div>
    </>
  );
};

export default OrderCard;
