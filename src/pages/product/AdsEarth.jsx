import React from "react";

import Adsearth from "../../assets/img/Adsearth.png";
import adsAbout from "../../assets/product/ads/adsAbout.png";
import over1 from "../../assets/product/ads/over1.png";
import over2 from "../../assets/product/ads/over2.png";
import over3 from "../../assets/product/ads/over3.png";
import over4 from "../../assets/product/ads/over4.png";

import market1 from "../../assets/product/ads/market1.png";
import market2 from "../../assets/product/ads/market2.png";
import market3 from "../../assets/product/ads/market3.png";
import market4 from "../../assets/product/ads/market4.png";

import bannerImg from "../../assets/product/ads/bannerImg.png";

function AdsEarth() {
  return (
    <div className=" w-full text-[#0E142C] ">
      <div className=" w-full h-[50vh] px-10 flex flex-col items-end justify-center  ">
        <img
          className=" absolute top-0 right-0 h-2/4 w-full cover z-[-1] "
          src={Adsearth}
          alt=""
        />
        <div className=" w-[30%] py-4 px-4 text-[#fff] bg-[#ffffff50] backdrop-blur text-right  ">
          <h1 className=" font-semibold text-5xl ">4Earth App</h1>
          <h2 className=" text-xl font-medium text-right my-4 ">
            Los Angeles California, USA <br />2 yrs Contract
          </h2>
        </div>
      </div>

      <div className=" w-full h-full lg:h-[50vh] flex flex-col lg:flex-row items-center justify-center my-5 ">
        <div className=" w-full lg:w-1/4 h-full flex items-end justify-center ">
          <img className=" w-full lg:h-[80vh] cover " src={adsAbout} alt="" />
        </div>
        <div className=" w-full lg:w-3/4 h-full flex flex-col justify-center px-10 ">
          <h1 className=" text-2xl font-medium ">About</h1>
          <h2 className=" text-xl my-4 font-light ">
            4Earth: The innovative social platform designed to foster
            connections between individuals, corporations, and NGOs passionate
            about sustainable development goals. Immerse yourself in a
            captivating gamified journey where your actions make a real-world
            impact. By engaging with ads and actively participating, you not
            only contribute to generating funds for NGOs but also play a pivotal
            role in the mission to restore and heal our planet.{" "}
          </h2>
          <h1 className=" text-2xl font-medium ">Role</h1>
          <h2 className=" text-xl font-light ">
            Brand Design, Illustration and Marketing design, UI/UX Design
          </h2>
        </div>
      </div>

      <div className=" w-full px-10 py-10  ">
        <div className=" w-full flex flex-col lg:flex-row items-center justify-between ">
          <div className=" w-full lg:w-1/4 flex flex-col ">
            <h1 className=" text-3xl my-4 ">Overview</h1>
            <h2 className=" text-lg ">
              The project commenced with thorough <b>UX research</b> and data
              compilation conducted by both the UX team and the Chief Data
              Officer. Subsequently, <b>wireframes</b> were meticulously crafted
              and showcased to stakeholders. This was succeeded by the
              development of <b>high-fidelity designs and prototypes</b>.
            </h2>
          </div>
          <div className=" w-full lg:w-3/4 grid gap-4 grid-cols-2 lg:grid-cols-4 my-4 ">
            <img src={over1} alt="" />
            <img src={over2} alt="" />
            <img src={over3} alt="" />
            <img src={over4} alt="" />
          </div>
        </div>
        <h2 className=" text-xl py-4 ">
          Other design projects includes the establishment of an{" "}
          <b>Admin section </b>
          dedicated to messaging and reporting. Furthermore, it involved the
          creation of impactful <b>landing pages</b> catered to the requirements
          of the marketing team.
        </h2>
      </div>

      <div className=" w-full px-10 flex flex-col ">
        <h1 className=" text-3xl ">Marketing Designs</h1>
        <h2 className=" text-xl py-4 ">
          I also created designs and assets for the marketing team including
          Illustrations, Vector graphics, Landing page designs with webflow and
          unbounce, Social media graphics and icons.
        </h2>
        <div className=" w-full grid grid-cols-2 gap-5 lg:grid-cols-4 ">
          <img src={market1} alt="" />
          <img src={market2} alt="" />
          <img src={market3} alt="" />
          <img src={market4} alt="" />
        </div>
      </div>

      <img src={bannerImg} className=" w-full h-[40vh] mt-4 cover " alt="" />
    </div>
  );
}

export default AdsEarth;
