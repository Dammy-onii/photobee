import React from "react";

import photobee from "../../assets/logo/PHOTOBEE.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className=" fixed top-0 left-0 flex flex-row w-full h-[15vh] px-10 justify-between items-center ">
      <Link to="/">
        <img src={photobee} alt="" />
      </Link>
      {/* <h1 className=" font-semibold text-3xl text-[#fff] text-right ">
        ONI <br />
        OLUWATOBI
      </h1> */}
    </div>
  );
}

export default Logo;
