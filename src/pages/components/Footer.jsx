import React from "react";

import nigeria from "../../assets/logo/nigeria.png";

import insta from "../../assets/logo/bi_instagram.png";
import linke from "../../assets/logo/akar-icons_linkedin-fill.png";
import pinterest from "../../assets/logo/group.png";
import behance from "../../assets/logo/ant-design_behance-outlined.png";

function Footer() {
  return (
    <div className=" fixed bottom-0 w-full flex flex-row justify-between px-10 py-5 ">
      <div className=" text-md lg:text-xl text-[#fff] font-semibold ">
        <h1 className=" flex flex-row items-center ">
          Product /{" "}
          <span>
            <img src={nigeria} alt="" />
          </span>
        </h1>
        <h1>Graphic Designer</h1>
      </div>

      <div className=" w-3/4 lg:w-1/4 flex flex-row justify-between items-center ">
        <a href="https://www.instagram.com/tobee_oni/" target="blank">
          <img src={insta} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/oni-tobi/" target="blank">
          <img src={linke} alt="" />
        </a>
        <a href="https://www.pinterest.com/tobest070/_saved/" target="blank">
          <img src={pinterest} alt="" />
        </a>
        <a href="https://www.behance.net/onitobi" target="blank">
          <img src={behance} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
