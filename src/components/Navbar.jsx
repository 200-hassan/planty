import React from "react";
import logoImage from "../assets/logo.png";
import searchImage from "../assets/s.png";
import userImage from "../assets/user.png";
import cartImage from "../assets/cart.png";
const Navbar = () => {
  return (
    <div className="bg-[#004F44] border-2">
      <div className="flex items-center justify-between container mx-auto bg-[#004F44]">
        {/* first */}
        <nav>
          <text>Shop</text>
          <text>Products</text>
          <text>Fertilizer</text>
        </nav>

        {/* second */}
        <div>
          <img src={logoImage} alt="Girl in a jacket" />
        </div>

        {/* third */}
        <div className="flex ">
          <div>
            <img src={searchImage} alt="" />
          </div>
          <div className="flex ">
            <img src={userImage} alt="" />
            <img src={cartImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
