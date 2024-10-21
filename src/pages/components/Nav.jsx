import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" m-auto h-full ">
      <div className=" fixed top-0 right-0 flex flex-row w-full h-[15vh] px-10 justify-end items-center ">
        <h1 className=" font-semibold text-3xl text-[#fff] text-right ">
          ONI <br />
          OLUWATOBI
        </h1>
      </div>
      <div className=" fixed top-0 right-0 h-full flex items-center justify-center text-[#fff] transition-all ">
        <div className=" h-2/4 flex flex-col items-center justify-between  font-semibold  ">
          <a href="#about">
            <h1 className=" rotate-90  ">About</h1>
          </a>
          <a href="#projects">
            <h1 className=" rotate-90 hover:text-[#FAC03A]  ">Projects</h1>
          </a>
          <a href="#contact">
            <h1 className=" rotate-90 hover:text-[#FAC03A]  ">Contact</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
