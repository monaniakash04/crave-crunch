import React from "react";
import userProfile from "../../image/men.png";
import "../../index.css";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux";

const Profile = () => {
  // const userorderList = useSelector((state) => state.user.orderList);
  const userName = useSelector((state) => state.user.name);
  const userEmail = useSelector((state) => state.user.email);
  const userPhone = useSelector((state) => state.user.phoneNo);
  const userTotalItem = useSelector((state) => state.user.orderList.totalItem);
  const userTotalPrice = useSelector(
    (state) => state.user.orderList.totalprice
  );

  return (
    <>
      <div className="max-w-[700px] min-h-[400px] bg flex flex-col justify-center rounded-lg m-1">
        <div className="w-[70px] mx-auto  h-[70px] rounded-full ">
          <img src={userProfile} className="w-full h-full" alt="" />
        </div>
        <div className="flex m-2   flex-col">
          <form>
            <div className="flex md:flex-row flex-col gap-5">
              <input
                type="text"
                className="font p-2 h-[30px] outline-none rounded-sm"
                readOnly
                value={userName}
                placeholder="NAME"
              />
              <input
                type="text"
                className="font p-2 h-[30px] outline-none rounded-sm"
                placeholder="EMAIL"
                readOnly
                value={userEmail}
              />
            </div>
            <div className="flex gap-5 mt-5 md:flex-row flex-col">
              <input
                type="text"
                className="font p-2 h-[30px] outline-none rounded-sm"
                readOnly
                placeholder="phone"
                value={userPhone}
              />
              <input
                type="text"
                className="font p-2 h-[30px] outline-none rounded-sm"
                placeholder="totalitem"
                value={userTotalItem}
                readOnly
              />
            </div>
            <div className="mx-auto mt-5 w-full">
              <input
                type="text"
                className="font w-full p-2 h-[30px] outline-none rounded-sm"
                placeholder="totalprice"
                value={userTotalPrice}
                readOnly
              />
            </div>
            <div className="w-full mt-5">
              <select name="" id="" className="w-full outline-none font">
                <option value="">ORDER</option>
                <option value="">1</option>
              </select>
            </div>
          </form>
        </div>
        <div className="max-w-[300px] gap-2 scroll h-[220px] flex items-center overflow-scroll p-1 md:ml-16 ">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
        <div className="flex gap-3 justify-center w-full mb-5">
          <button className="bg-white font font-semibold rounded-lg text-black px-7 py-2">
            LOG OUT
          </button>
          <button className="bg-orange-400 font font-semibold rounded-lg text-white px-7 py-2">
            EDIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
