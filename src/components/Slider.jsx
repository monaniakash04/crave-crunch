import React, { useState, useEffect } from "react";
import "../index.css";
// import img2 from "../image/i5.jpg";
import img3 from "../image/pexels-jane-doan-1128678.jpg";
import img4 from "../image/pexels-susanne-jutzeler-sujufoto-1233319.jpg";
import img5 from "../image/pexels-sydney-troxell-708587.jpg";
// import video1 from "../image/production_id_3785789 (1080p).mp4";
import "../index.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const [slider, setSlider] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      slider === 4 ? setSlider(0) : setSlider(slider + 1);
      console.log("hello");
    }, 2000);
  }, [slider]);

  return (
    <>
      <div className="w-full p-2 overflow-hidden md:h-[650px] h-[200px] mt-5">
        <div
          style={{ transform: `translateX(-${slider * 100}%)` }}
          className="w-full flex gap-5  h-full duration-1000"
        >
          <img src={img3} className="min-w-full rounded-lg max-h-full" alt="" />
          <img src={img4} className="min-w-full max-h-full rounded-lg" alt="" />
          <img src={img5} className="min-w-full max-h-full rounded-lg" alt="" />
          <img src={img5} className="min-w-full max-h-full rounded-lg" alt="" />
          <img src={img5} className="min-w-full max-h-full rounded-lg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Slider;
