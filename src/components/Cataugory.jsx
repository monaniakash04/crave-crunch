import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../index.css";

const Cataugory = ({ setCategory, category }) => {
  const [slider, setSilder] = useState(0);
  return (
    <>
      <div className="flex">
        <button
          className="mx-auto h-[30px] rounded-xl p-1 bg my-auto"
          onClick={() => {
            setSilder(slider - 1);
          }}
        >
          <FaArrowLeft color="white" />
        </button>
        <div className=" scroll  md:max-w-[300px] max-w-[200px] p-3 overflow-hidden mx-auto text-white mt-6 h-[70px] ">
          <ul
            style={{ transform: `translateX(-${slider * 160}px)` }}
            className=" flex duration-500 md:text-2xl text-sm list-none   uppercase gap-4"
          >
            <li
              onClick={() => {
                setCategory("all");
              }}
              className="bg cursor-pointer py-1 w-[100px] my-auto rounded-xl px-4"
            >
              All
            </li>
            <li
              onClick={() => {
                setCategory("bread");
              }}
              className="bg cursor-pointer py-1 w-[100px] my-auto rounded-xl px-4"
            >
              Bread
            </li>
            <li
              onClick={() => {
                setCategory("sandwich");
              }}
              className="bg cursor-pointer py-1 w-[160px] my-auto rounded-xl px-4"
            >
              sandwich
            </li>
            <li
              onClick={() => {
                setCategory("pizza");
              }}
              className="bg cursor-pointer py-1 w-[160px] my-auto rounded-xl px-4 "
            >
              Top&nbsp;Food
            </li>
            <li
              onClick={() => {
                setCategory("drink");
              }}
              className="bg cursor-pointer py-1 w-[100px] my-auto rounded-xl px-4"
            >
              Drink
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            setSilder(slider === 3 ? 0 : slider + 1);
          }}
          className="mx-auto h-[30px] rounded-xl p-1 bg my-auto"
        >
          <FaArrowRight color="white" />
        </button>
      </div>
    </>
  );
};

export default Cataugory;
