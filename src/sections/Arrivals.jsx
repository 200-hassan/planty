import React from "react";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";

const Arrivals = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center mx-auto container gap-253">
        <p className="text-[#004F44] mt-24">Colorful New Arrivals</p>
        <p className="text-[#004F44] mt-24">view all</p>
      </div>
      <div className="flex items-center justify-center mx-auto container gap-12 mt-[67px] pb-24">
        <img src={r1} alt="" className="" />
        <img src={r2} alt="" />
        <img src={r3} alt="" />
        <img src={r4} alt="" />
      </div>
    </div>
  );
};

export default Arrivals;
