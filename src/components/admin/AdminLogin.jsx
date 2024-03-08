import React, { useState } from "react";
import admin from "../../image/admin.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setIsAdminAuth }) => {
  const nav = useNavigate();
  const [Admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let pass = e.target.value;
    setAdmin({ ...Admin, [name]: pass });
  };

  const OnSubmitHandler = () => {
    axios.get("http://localhost:3001/admin").then((res) => {
      const data = res.data;
      data.map((item) => {
        const { username, password } = item;
        if (username == Admin.username && password == Admin.password) {
          alert("done");
          setIsAdminAuth(true);
          nav("/admin");
        }
      });
    });
  };

  return (
    <>
      <div className="w-full  p-1   flex justify-center  max-h-[1000px]   ">
        {/* Login */}

        <div className="max-w-[800px]  md:gap-5   flex flex-wrap min-h-[500px] ">
          <div className="max-w-[300px] hidden md:block  h-[500px] ">
            <img src={admin} className="w-full   mx-auto h-full" alt="" />
          </div>
          <div className="max-w-[450px] bg p-5  h-[500px] border-2">
            <h1 className="font-bold text-center uppercase font text-white text-2xl">
              crave crunch
            </h1>
            <h1 className="font-bold mt-2 text-center uppercase font text-white text-lg">
              ADMIN LOGIN
            </h1>
            <div className="mt-10">
              <form action="" className="p-2">
                <input
                  type="text"
                  name="username"
                  required
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  value={Admin.username}
                  placeholder="Enter Username..."
                  className="p-2  font outline-none   mx-auto w-full h-[30px]"
                  id=""
                />
                <input
                  type="text"
                  name="password"
                  value={Admin.password}
                  required
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  placeholder="Enter Username..."
                  className="p-2 mt-5 font outline-none   mx-auto w-full h-[30px]"
                  id=""
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    OnSubmitHandler();
                  }}
                  className="w-full mt-5 h-[30px] bg-white text-black "
                >
                  LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
