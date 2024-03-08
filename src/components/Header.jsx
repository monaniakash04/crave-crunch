import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import simpleUser from "../image/simpleUser.jpg";
import boySvg from "../image/boyUserProfilePng.png";
// import girlSvg from "../image/girlUserProfilePng.png";
import "../index.css";

const Header = ({ cartItemTotal, table }) => {
  const [header, setHeader] = useState(false);

  return (
    <>
      <div className="min-w-full flex justify-between p-3 bg">
        <div className="flex">
          <span className="text-4xl pr-1 text-white">
            <MdFastfood />
          </span>
          <h1 className="md:text-3xl text-xl uppercase font-semibold text-white">
            <Link to="/">Crave Crunch</Link>
          </h1>
        </div>
        <div className="text-white  p-1 font-semibold md:block hidden ">
          <ul className="flex cursor-pointer gap-6 list-none text-xl">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li className="flex">
              <NavLink to="/bucket">BUCKET</NavLink>
              <span className="text-3xl relative">
                <label className="absolute text-xs red my-auto p-[1px] left-5 top-[-5px] rounded-full">
                  {cartItemTotal}
                </label>
                <BsCart />
              </span>
            </li>
            <li>
              <NavLink to="/table">TABLE {table}</NavLink>
            </li>
            <li>
              <NavLink to="/admin">ADMIN</NavLink>
            </li>
            <li>
              <Link to="/account">
                <div className="w-[40px] h-[40px] rounded-[100%] bg-black">
                  <img
                    src={boySvg}
                    className="w-full h-full mt-[-5px] rounded-[100%]"
                    alt=""
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <span
          onClick={() => {
            setHeader(!header);
          }}
          className="text-3xl text-white duration-500 block md:hidden "
        >
          <CgMenu className={header ? "hidden" : "block"} />
          <MdOutlineClose className={header ? "block" : "hidden"} />
        </span>
      </div>
      {/* sidebar */}
      <div
        style={{
          transform: header ? "translateX(0%)" : "translateX(-100%)",
        }}
        className="absolute z-20 md:hidden  text-white flex justify-center duration-700 mt-1 min-w-full rounded-2xl min-h-[250px] bg"
      >
        <ul className="flex cursor-pointer flex-col p-2 gap-6 list-none text-xl">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="flex">
            <NavLink to="/bucket">BUCKET</NavLink>
            <span className="text-2xl relative">
              <label className="absolute text-xs red my-auto p-[1px] left-5 top-[-5px] rounded-full">
                {cartItemTotal}
              </label>
              <BsCart />
            </span>
          </li>
          <li>
            <NavLink to="/table">TABLE 1</NavLink>
          </li>
          <li>
            <NavLink to="/admin">ADMIN</NavLink>
          </li>
          <li>
            <Link to="/account">
              <div className="w-[40px] mx-auto h-[40px] rounded-[100%] bg-black">
                <img
                  src={boySvg}
                  className="w-full h-full mt-[-5px] rounded-[100%]"
                  alt=""
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
