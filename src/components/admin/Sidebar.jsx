import React from "react";
import "../../index.css";
import { TiThMenu } from "react-icons/ti";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useLocation, Link } from "react-router-dom";

const Sidebar = ({ sideBar, setSideBar }) => {
  const { pathname } = useLocation();
  return (
    <>
      <div
        style={{ maxWidth: "300px" }}
        className="absolute p-2 flex  flex-col min-h-[500px] duration-200 font   bg"
      >
        <TiThMenu
          onClick={() => {
            setSideBar(!sideBar);
          }}
          color="white"
          className="text-2xl ml-2"
        />
        <div className="flex gap-2 flex-col mt-5 justify-center w-full">
          <Link to={"/admin"}>
            <div
              style={{
                backgroundColor: pathname === "/admin" ? "white" : "",
                color: pathname === "/admin" ? "black" : "",
              }}
              className="flex w-full gap-2 p-2 hover:bg-white hover:text-black text-white duration-100  rounded-sm h-[40px]"
            >
              <IoFastFoodSharp className="text-2xl" />
              <h1
                style={{
                  display: sideBar ? "none" : "block",
                }}
                className=" text-xl"
              >
                ORDERS
              </h1>
            </div>
          </Link>
          <Link to={"/admin/totalorder"}>
            <div
              style={{
                backgroundColor:
                  pathname === "/admin/totalorder" ? "white" : "",
                color: pathname === "/admin/totalorder" ? "black" : "",
              }}
              className="flex w-full gap-2 p-2 hover:bg-white hover:text-black text-white duration-100  rounded-sm h-[40px]"
            >
              <MdDoNotDisturbOnTotalSilence className="text-2xl" />
              <h1
                style={{ display: sideBar ? "none" : "block" }}
                className=" text-xl"
              >
                TOTAL ORDER
              </h1>
            </div>
          </Link>
          <Link to={"/admin/adminprofile"}>
            <div
              style={{
                backgroundColor:
                  pathname === "/admin/adminprofile" ? "white" : "",
                color: pathname === "/admin/adminprofile" ? "black" : "",
              }}
              className="flex w-full gap-2 p-2 hover:bg-white hover:text-black text-white duration-100  rounded-sm h-[40px]"
            >
              <CgProfile className="text-2xl" />
              <h1
                style={{ display: sideBar ? "none" : "block" }}
                className=" text-xl"
              >
                PROFILE
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
