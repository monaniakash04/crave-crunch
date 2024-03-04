import React from "react";
import LoginImg from "../../image/loginSvg.svg";
import RegisterImg from "../../image/registerSvg.svg";
import "../../index.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { displayUserInfo } from "../../Redux/actions/userAction";
import { useDispatch } from "react-redux";

const Login = ({ setIsAuth }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(true);
  const [listOfuser, setListOfUser] = useState([]);
  const [oldUser, setOldUser] = useState({ username: "", password: "" });
  const [user, setUser] = useState({
    name: "",
    email: "",
    setPassword: "",
    reEnteredPassword: "",
    phoneNo: "",
    orderList: {
      order: [],
      totalItem: 0,
      totalprice: 0,
    },
  });
  const changeValue = (e) => {
    let nm = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [nm]: value });
  };
  const changeValueOfLoginForm = (e) => {
    let uname = e.target.name;
    let upass = e.target.value;
    setOldUser({ ...oldUser, [uname]: upass });
  };
  const passData = () => {
    if (user.setPassword === user.reEnteredPassword) {
      axios.post("http://localhost:3002/users", user).then(() => {
        console.log("done");
      });
      dispatch(displayUserInfo(user));
      setTimeout(() => {
        Navigate("/account");
      }, 2000);
      setIsAuth(true);
    } else {
      toast("re-enterd password is not match with set password");
    }
    setUser({
      name: "",
      email: "",
      setPassword: "",
      reEnteredPassword: "",
      phoneNo: "",
      orderList: {
        order: [],
        totalItem: 0,
        totalprice: 0,
      },
    });
  };
  // let flag = 0;
  const checkUser = () => {
    axios.get("http://localhost:3002/users").then((res) => {
      setListOfUser(res.data);
      listOfuser.forEach((item) => {
        const { name, setPassword, id } = item;
        if (name === oldUser.username && setPassword === oldUser.password) {
          axios.get(`http://localhost:3002/users/${id}`).then((res) => {
            dispatch(displayUserInfo(res.data));
            // flag = 1;
          });
          setIsAuth(true);
          Navigate("/account");
        }
      });
    });
  };
  return (
    <>
      <div className="w-full  p-1   flex justify-center  max-h-[1000px]   ">
        {/* Login */}
        <Toaster />
        {isRegister ? null : (
          <div className="max-w-[800px]  md:gap-5   flex flex-wrap min-h-[500px] ">
            <div className="max-w-[300px] hidden md:block  h-[500px] ">
              <img src={LoginImg} className="w-full   mx-auto h-full" alt="" />
            </div>
            <div className="max-w-[450px] bg p-5  h-[500px] border-2">
              <h1 className="font-bold text-center uppercase font text-white text-2xl">
                crave crunch
              </h1>
              <h1 className="font-bold mt-2 text-center uppercase font text-white text-lg">
                register
              </h1>
              <div className="mt-10">
                <form action="" className="p-2">
                  <input
                    type="text"
                    name="username"
                    value={oldUser.username}
                    required
                    onChange={(e) => changeValueOfLoginForm(e)}
                    placeholder="Enter Username..."
                    className="p-2  font outline-none   mx-auto w-full h-[30px]"
                    id=""
                  />
                  <input
                    type="text"
                    name="password"
                    value={oldUser.password}
                    required
                    onChange={(e) => changeValueOfLoginForm(e)}
                    placeholder="Enter Username..."
                    className="p-2 mt-5 font outline-none   mx-auto w-full h-[30px]"
                    id=""
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      checkUser();
                    }}
                    className="w-full mt-5 h-[30px] bg-white text-black "
                  >
                    LOGIN
                  </button>
                  <h1 className="text-center mt-5 text-white">OR</h1>
                  <h1 className="text-center text-white mt-5">
                    didn't accout?
                    <span
                      onClick={() => setIsRegister(true)}
                      className="text-blue-700 cursor-pointer font-semibold"
                    >
                      Register
                    </span>
                  </h1>
                </form>
              </div>
            </div>
          </div>
        )}
        {/* Registration */}
        {isRegister && (
          <div className="max-w-[800px] min-h-[500px]  flex flex-wrap justify-center">
            <div className="max-w-[350px] hidden md:flex justify-center items-center border-2 h-full">
              <img src={RegisterImg} alt="" />
            </div>
            <div className="max-w-[450px] bg flex flex-col justify-center items-center border-2 h-full">
              <h1 className="font-bold text-center uppercase font text-white text-2xl">
                crave crunch
              </h1>
              <h1 className="font-bold mt-2 text-center uppercase font text-white text-lg">
                login
              </h1>
              <div className="flex p-3 flex-col items-center">
                <form action="">
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    required
                    onChange={(e) => {
                      changeValue(e);
                    }}
                    placeholder="Enter Name..."
                    className="p-2 mt-5 font outline-none   mx-auto w-full h-[30px]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    required
                    onChange={(e) => {
                      changeValue(e);
                    }}
                    placeholder="Enter Email..."
                    className="p-2 mt-5 font outline-none   mx-auto w-full h-[30px]"
                  />
                  <input
                    type="text"
                    name="setPassword"
                    value={user.setPassword}
                    required={true}
                    onChange={(e) => {
                      changeValue(e);
                    }}
                    placeholder="Set Password..."
                    className="p-2 mt-5 font outline-none   mx-auto w-full h-[30px]"
                  />
                  <input
                    type="text"
                    name="reEnteredPassword"
                    value={user.reEnteredPassword}
                    required
                    onChange={(e) => {
                      changeValue(e);
                    }}
                    placeholder="Re-enter Password..."
                    className="p-2 mt-5 font outline-none   mx-auto w-full h-[30px]"
                  />
                  <input
                    type="tel"
                    name="phoneNo"
                    value={user.phoneNo}
                    required
                    onChange={(e) => {
                      changeValue(e);
                    }}
                    placeholder="Enter Phone No..."
                    className="p-2 mt-5 font outline-none   mx-auto w-full h-[30px]"
                  />
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      passData();
                    }}
                    className="w-full mt-5 h-[30px] bg-white text-black "
                  >
                    REGISTER
                  </button>
                  <h1 className="text-center text-white mt-5">
                    Already Have accout?
                    <span
                      onClick={() => setIsRegister(false)}
                      className="text-blue-700 cursor-pointer font-semibold"
                    >
                      Login
                    </span>
                  </h1>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
