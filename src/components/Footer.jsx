import React, { useState } from "react";
import "../index.css";
import { MdFastfood } from "react-icons/md";
import axios from "axios";
// import { FaLocationArrow } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
// import { FaArrowRight } from "react-icons/fa6";
// import { CiLocationArrow1 } from "react-icons/ci";

const Footer = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const onChangeHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFeedback({ ...feedback, [name]: value });
  };
  const passData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/feedback", feedback).then((res) => {
      // alert(res + " ok ");
    });
    setFeedback({
      name: "",
      email: "",
      feedback: "",
    });
  };
  return (
    <>
      <div className="max-w-full   max-h-[500px] bg mt-5 grid md:grid-cols-2 grid-cols-1">
        <div className="max-w-[400px] p-3 flex flex-col mx-auto ">
          <div className="flex flex-col gap-3 text-white">
            <div className="flex justify-center">
              <span className="md:text-4xl text-xl">
                <MdFastfood />
              </span>
              <p className="md:text-2xl uppercase">Crave Crunch</p>
            </div>
            <p className="uppercase font-light md:text-xl text-sm">
              If you're out, and starving, and need a bite to eat, then you need
              fast food.
            </p>
            <div className="mx-auto mt-4">
              <ul className="flex md:flex-col flex-wrap cursor-pointer gap-6 list-none md:text-xl text-sm">
                <li className="">
                  <NavLink to="/" className="">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li className="flex">
                  <NavLink to="/bucket">BUCKET</NavLink>
                  <span className="text-2xl">
                    <BsCart />
                  </span>
                </li>
                <li>
                  <NavLink to="/table">TABLE 1</NavLink>
                </li>
                <li>
                  <NavLink to="/invoice">INVOICE</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-center md:text-2xl text-lg text-white">
            FEEDBACK
          </h1>
          <div className="mt-4 md:mt-10">
            <form className="flex flex-col gap-6 justify-center">
              <input
                type="text"
                className="min-w-[300px] font outline-none rounded-sm p-1 h-[30px] mx-auto"
                name="name"
                value={feedback.name}
                onChange={(e) => {
                  onChangeHandle(e);
                }}
                placeholder="Enter Name...."
                id=""
              />
              <input
                type="email"
                className="min-w-[300px]  font outline-none rounded-sm p-1 h-[30px] mx-auto"
                name="email"
                onChange={(e) => {
                  onChangeHandle(e);
                }}
                placeholder="Enter Email...."
                id=""
              />
              <textarea
                placeholder="Feedback...."
                onChange={(e) => {
                  onChangeHandle(e);
                }}
                name="feedback"
                className="min-w-[300px]  font outline-none rounded-sm p-1 h-[70px] mx-auto"
              ></textarea>
              <button
                type="submit"
                onClick={(e) => {
                  passData(e);
                }}
                className="min-w-[300px] bg-white font-bold  font outline-none rounded-sm p-1 h-[30px] mx-auto"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
