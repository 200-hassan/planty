import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import { ArrowRight } from "lucide-react";

const Plant = () => {
  return (
    <div className="bg-[#F3FFFC] w-full h-180">
      <div className="justify-center ml-0">
        <div>
          <h3 className="text-[#004F44] py-24 mx-auto container">
            Plant stands
          </h3>
        </div>
        <div className="flex items-center justify-center gap-6">
          <img src={p1} alt="" />
          <img src={p2} alt="" />
          <img src={p3} alt="" />
          <text className="text-[#004F44]">more</text>
          <ArrowRight className="text-[#004F44] w-5" />
        </div>
      </div>
    </div>
  );
};

export default Plant;
