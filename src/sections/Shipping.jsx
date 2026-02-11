import React from "react";
import sh from "../assets/sh.png";
import { PhoneCall, Mail } from "lucide-react";

const Shipping = () => {
  return (
    <div className="bg-white py-24 ">
      <div className="relative mx-auto container">
        <img src={sh} className="w-full" />

        <h3 className="absolute left-10 top-10 z-20 text-[#9C6955]">
          Free Shipping Services
        </h3>
        <p className="absolute left-10 top-20 z-20 text-[#9C6955]">
          *only for the same region
        </p>
        <p className="absolute left-10 top-60 z-20 text-[#9C6955] flex gap-2">
          <PhoneCall />
          +62 1189-2719-00
        </p>
        <p className="absolute left-10 top-68 z-20 text-[#9C6955] flex gap-2">
          <Mail />
          order@platify.com
        </p>
      </div>
    </div>
  );
};

export default Shipping;
