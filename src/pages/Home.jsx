import React from "react";

import backgroundImg from "../assets/img/backgroundimage.png";
import portfolioImage from "../assets/img/portfolioImg.png";
import outerProfile from "../assets/img/outerProfile.png";
import innerProfile from "../assets/img/innerProfile.png";
import About from "./About";
import Projects from "./Projects";
import ProductDesign from "./ProductDesign";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./Contact";

function Home() {
  return (
    <div className=" text-[#fff] overflow-hidden scroll-smooth transition-all w-full h-full ">
      <Nav />
      <img
        className=" fixed top-0 left-0 z-[-1] w-screen h-screen "
        src={backgroundImg}
        alt=""
      />
      <div className=" w-screen h-screen flex items-center justify-center overflow-hidden  ">
        <div className=" flex items-center justify-center overflow-hidden object-contain ">
          <img
            className=" mt-[35px] object-cover absolute animate-spin-slow w-fit "
            src={outerProfile}
            alt=""
          />
          <img className=" " src={innerProfile} alt="" />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
