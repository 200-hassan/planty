import React from "react";
import siImage from "../assets/si.png";
import sImage from "../assets/s.png";

const Search = () => {
  return (
    <div className="w-full h-55 bg-[#F3FFFC]  flex items-center justify-center">
      <div className="border-2 border-green-900 ">
        <img src={siImage} alt="" className="p-2" />
      </div>
      <div className="border-2 border-green-900 ml-4 w-252">
        <p className="text-[#004F44] ml-7 p-3">Search flowers</p>
      </div>
      <div className="border-2 border-green-900 ml-4 bg-green-900 h-13 w-13 flex items-center justify-center">
        <img src={sImage} alt="" className="" />
      </div>
    </div>
  );
};

export default Search;
