import React from "react";
import "../../index.css";
import orderImg from "../../image/order23.gif";
import { useNavigate } from "react-router-dom";

const ConfirmOrderPopup = () => {
  const nav = useNavigate();
  return (
    <>
      <>
        <div className=" absolute flex flex-col gap-3 justify-center max-w-[500px] max-h-[300px] bg-white min-w-[200px] p-3">
          <h1 className=" text-center font md:text-2xl">CREAVE CRUNCH</h1>
          <div className="max-w-[350px] h-[150px]">
            <img src={orderImg} className="w-full h-full object-cover" alt="" />
          </div>
          <h1 className="text-center font ">YOUR ORDER TAKE SUCCESSFULY</h1>
          <button
            onClick={() => {
              nav("/invoice");
            }}
            className="p-1 text-white uppercase bg rounded-md font text-xl"
          >
            view invoice
          </button>
        </div>
      </>
    </>
  );
};

export default ConfirmOrderPopup;
