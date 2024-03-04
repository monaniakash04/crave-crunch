import React, { useState } from "react";
import "../index.css";

const Table = ({ table }) => {
  const [gameNum, setGameNum] = useState(0);
  const [changePos, setChangePos] = useState(true);
  const [divWidth, setDivWidth] = useState(1);
  const [isGameStart, setIsGameStart] = useState(false);

  return (
    <>
      <div className="w-full flex-col gap-6 h-[100vh] flex justify-center items-center">
        <div
          id="game"
          onMouseOver={
            isGameStart
              ? () => {
                  let randomNum = Math.floor(Math.random() * 2);
                  let randomNum2 = Math.floor(Math.random() * 5);
                  setGameNum(randomNum);
                  setDivWidth(randomNum2);
                  setChangePos(!changePos);
                }
              : null
          }
          style={{
            transform: isGameStart
              ? gameNum === 1
                ? changePos
                  ? "translateX(300px)"
                  : "translateX(-300px)"
                : changePos
                ? "translateY(120px)"
                : "translateY(-120px)"
              : "translateX(0px)",
            width: isGameStart ? `${divWidth * 100}px` : null,
            height: isGameStart ? `${divWidth * 100}px` : null,
          }}
          className=" md:w-[200px] duration-0 p-3 w-[200px] md:h-[300px] h-[150px] rounded-3xl   bg flex justify-center items-center"
        >
          <h1 className="text-5xl text-white font-bold ">{table}</h1>
        </div>
        <button
          onClick={() => {
            setIsGameStart(true);
          }}
          className="bg md:block hidden rounded-lg font text-3xl text-white px-4 py-2"
          style={{ display: isGameStart ? "none" : "block" }}
        >
          PLAY
        </button>
      </div>
    </>
  );
};

export default Table;
