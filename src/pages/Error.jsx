import React from "react";
import notFound from "../image/404.svg";

const Error = () => {
  return (
    <div className="h-[60vh] w-full flex items-center justify-center">
      <div className="max-w-[300px] h-[300px]">
        <img src={notFound} className="w-full h-full" alt="" />
      </div>
    </div>
  );
};

export default Error;
