import React from "react";

import aboutImg from "../assets/img/portfolioImg.png";

import cV from "../assets/portfolio/Oluwatobi Oni CV2023.pdf";
import folio from "../assets/portfolio/Oni Oluwatobi portfolio (open des).pdf";

function About() {
  return (
    <div className=" w-full h-full lg:h-screen px-10 flex flex-col lg:flex-row items-center justify-between ">
      <div className=" flex flex-col w-full lg:w-2/4 ">
        <h1 className=" text-6xl font-medium ">Hello,</h1>
        <h2 className=" text-lg font-normal my-4 ">
          Meet Oni Oluwatobi, an accomplished professional in the field of web
          and mobile application design, with a remarkable track record of
          achievements, especially within the telecommunications and marketing
          industry. <br /> During his tenure At Extended Networks, he
          contributed to the creation of cutting-edge solutions that reduced
          downtime and increased network efficiency for major clients like
          Airtel, MTN, and 9mobile. As the former Chief Design Officer (CDO) at
          Boxin, a dynamic startup, he successfully oversaw both product design
          and product marketing endeavors. His contributions were instrumental
          in securing an angel investor, validating the company's vision, and
          propelling its growth potential. <br /> With a reputation as a
          freelance contract designer, Oluwatobi delivers impactful designs for
          venture-backed startups worldwide. He is a driving force in innovative
          design and business success.
        </h2>
        <div className=" w-full lg:w-3/4 flex flex-row gap-5 items-center justify-between ">
          <a href={cV} target="blank">
            <button className=" border-[1px] border-[#fff] px-4 py-4 hover:bg-[#fff] hover:text-[#000] ">
              <h2 className=" font-medium text-md lg:text-2xl ">
                Download Resume
              </h2>
            </button>
          </a>
          <a href={folio} target="blank">
            <button className=" border-[1px] border-[#fff] px-4 py-4 hover:bg-[#fff] hover:text-[#000] ">
              <h2 className=" font-medium text-md lg:text-2xl ">
                Download Portfolio
              </h2>
            </button>
          </a>
        </div>
      </div>
      <div className=" px-2 my-5 ">
        <img className=" w-full " src={aboutImg} alt="" />
      </div>
    </div>
  );
}

export default About;
