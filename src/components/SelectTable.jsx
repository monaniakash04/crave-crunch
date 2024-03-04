import React from "react";
import ".././index.css";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFirstTable,
  selectSecondTable,
  selectThirdTable,
} from "../Redux/actions/selectTable";
// import axios from "axios";

const SelectTable = ({ setIsTableSelect, isTableSelect, setTable }) => {
  let tableOne = useSelector((state) => {
    return state.table.table1;
  });
  let tableTwo = useSelector((state) => {
    return state.table.table2;
  });
  let tableThree = useSelector((state) => {
    return state.table.table3;
  });
  const dispatch = useDispatch();
  const alreadySelected = (tablename) => {
    toast.success(`${tablename} Is Already Reserved`, {
      position: "top-right",
      icon: "👍",
      className: "bg",
      duration: 3000,
    });
  };

  return (
    <>
      <div className="flex z-50 absolute justify-center items-center w-full h-[100%] border-2 glass">
        <Toaster />
        <div
          id="animate"
          className="absolute z-10 p-4 animate max-w-[500px] h-[200px] bg-white mx-auto"
        >
          <h1 className="font text-orange-500 text-center md:text-2xl text-lg font-bold">
            SELECT YOUR TABLE
          </h1>
          <div className="flex gap-5 items-center h-36  justify-center">
            <button
              onClick={
                tableOne
                  ? () => {
                      alreadySelected("TABLE 1");
                    }
                  : () => {
                      setIsTableSelect(false);
                      setTable(1);
                      dispatch(selectFirstTable());
                    }
              }
              style={{
                backgroundColor: tableOne ? "black" : "orange",
                color: "white",
              }}
              className="p-2 px-5   font"
            >
              1
            </button>
            <button
              onClick={
                tableTwo
                  ? () => {
                      alreadySelected("TABLE 2");
                    }
                  : () => {
                      setIsTableSelect(false);
                      setTable(2);
                      dispatch(selectSecondTable());
                    }
              }
              style={{
                backgroundColor: tableTwo ? "black" : "orange",
                color: "white",
              }}
              className="p-2 px-5  font"
            >
              2
            </button>
            <button
              onClick={
                tableThree
                  ? () => {
                      alreadySelected("TABLE 1");
                    }
                  : () => {
                      setIsTableSelect(false);
                      setTable(3);
                      dispatch(selectThirdTable());
                    }
              }
              style={{
                backgroundColor: tableThree ? "black" : "orange",
                color: "white",
              }}
              className="p-2 px-5  font"
            >
              3
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectTable;
