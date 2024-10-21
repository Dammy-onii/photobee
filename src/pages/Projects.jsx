import React from "react";

import projectImg from "../assets/img/projectsimg.png";
import navigateLogo from "../assets/logo/ic_round-navigate-next.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className=" w-full h-full my-5 lg:my-0 lg:h-screen px-10 flex flex-col lg:flex-row items-center justify-between ">
      <div className=" flex flex-col w-full lg:w-2/4 ">
        <h1 className=" text-6xl font-medium ">Projects</h1>
        <Link to="/products" className=" my-10 ">
          <h1 className=" flex flex-row items-center text-2xl font-medium my-2 ">
            Product Design{" "}
            <span className=" animate-pulse ">
              <img src={navigateLogo} alt="" />
            </span>
          </h1>
          <h2 className=" text-xl ">UI/UX design for both web and mobile.</h2>
        </Link>
        <Link to="/graphics" className=" my-10 ">
          <h1 className=" flex flex-row items-center text-2xl font-medium my-2 ">
            Graphic Design{" "}
            <span className=" animate-pulse ">
              <img className="" src={navigateLogo} alt="" />
            </span>
          </h1>
          <h2 className=" text-xl ">
            Brand and visual design, marketing design and illustrations
          </h2>
        </Link>
      </div>
      <div>
        <img className=" w-full object-cover " src={projectImg} alt="" />
      </div>
    </div>
  );
}

export default Projects;
