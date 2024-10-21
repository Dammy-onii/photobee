import React from "react";
import { Link } from "react-router-dom";

import backgroundImg from "../assets/img/backgroundimage.png";

import ads from "../assets/product/ads4earth.png";
import berachah from "../assets/product/berachah.png";
import borderless from "../assets/product/borderless.png";
import boxin from "../assets/product/boxin.png";
import helpconnect from "../assets/product/helpconnect.png";
import extendedN from "../assets/product/extendedN.png";
import moonroom from "../assets/product/Moonroom.png";

import helpAppPage from "../assets/portfolio/help app.pdf";

function ProductDesign() {
  return (
    <div className=" w-full h-screen px-10 flex flex-col justify-center ">
      <img
        className=" fixed top-0 left-0 z-[-1] w-screen h-screen "
        src={backgroundImg}
        alt=""
      />
      <h1 className=" text-2xl font-semibold my-4 text-[#fff] ">
        Product Design
      </h1>
      <div className="w-full flex overflow-x-auto py-4 gap-5">
        <div className="flex-shrink-0 py-4 px-4 rounded-2xl bg-[#2B2B2B]">
          <img
            className="w-96 h-96 object-cover rounded-2xl mb-2"
            src={ads}
            alt="Ads for Earth"
          />

          <div className=" text-white py-2 flex flex-col items-center justify-center gap-3 ">
            <h1 className=" text-2xl font-medium ">Ads For Earth</h1>
            <Link to="/ads4earth">
              <h1 className=" font-light flex flex-row items-center gap-2 ">
                View Case Study{" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </h1>
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 py-4 px-4 rounded-2xl bg-[#2B2B2B]">
          <img
            className="w-96 h-96 object-cover rounded-2xl mb-2"
            src={extendedN}
            alt="Extended N"
          />
          <div className=" text-white py-2 flex flex-col items-center justify-center gap-3 ">
            <h1 className=" text-2xl font-medium ">Extended Networks</h1>
            <Link to="/extended">
              <h1 className=" font-light flex flex-row items-center gap-2 ">
                View Case Study{" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 py-4 px-4 rounded-2xl bg-[#2B2B2B]">
          <img
            className="w-96 h-96 object-cover rounded-2xl mb-2"
            src={boxin}
            alt="Boxin"
          />

          <div className=" text-white py-2 flex flex-col items-center justify-center gap-3 ">
            <h1 className=" text-2xl font-medium ">Boxin Logistics</h1>
            <a
              href="https://www.behance.net/gallery/176664211/Boxin-Logistics"
              target="blank"
            >
              <h1 className=" font-light flex flex-row items-center gap-2 ">
                View Case Study{" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </h1>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 py-4 px-4 rounded-2xl bg-[#2B2B2B]">
          <img
            className="w-96 h-96 object-cover rounded-2xl mb-2"
            src={berachah}
            alt="Berachah"
          />

          <div className=" text-white py-2 flex flex-col items-center justify-center gap-3 ">
            <h1 className=" text-2xl font-medium ">Berachah</h1>
            <a
              href="https://www.behance.net/gallery/126860545/Berachah-Brand-UI-Design"
              target="blank"
            >
              <h1 className=" font-light flex flex-row items-center gap-2 ">
                View Case Study{" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </h1>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 py-4 px-4 rounded-2xl bg-[#2B2B2B]">
          <img
            className="w-96 h-96 object-cover rounded-2xl mb-2"
            src={borderless}
            alt="Borderless"
          />

          <div className=" text-white py-2 flex flex-col items-center justify-center gap-3 ">
            <h1 className=" text-2xl font-medium ">Borderless</h1>
            <a
              href="https://www.behance.net/gallery/128967039/Borderless"
              target="blank"
            >
              <h1 className=" font-light flex flex-row items-center gap-2 ">
                View Case Study{" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </h1>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 py-4 px-4 rounded-2xl bg-[#2B2B2B] h-full">
          <img
            className="w-96 h-96 object-cover rounded-2xl mb-2"
            src={moonroom}
            alt="moonroom"
          />

          <div className=" text-white py-2 flex flex-col items-center justify-center gap-3 ">
            <h1 className=" text-2xl font-medium ">Moonroom</h1>
            <a
              href="https://www.behance.net/gallery/199539569/Moonroom-Product-Design"
              target="blank"
            >
              <h1 className=" font-light flex flex-row items-center gap-2 ">
                View Case Study{" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </h1>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 py-4 px-4 rounded-2xl bg-[#2B2B2B]">
          <img
            className="w-96 h-96 object-cover rounded-2xl mb-2"
            src={helpconnect}
            alt="Help Connect"
          />
          <div className=" text-white py-2 flex flex-col items-center justify-center gap-3 ">
            <h1 className=" text-2xl font-medium ">Help Connect</h1>
            <a href={helpAppPage} target="blank">
              <h1 className=" font-light flex flex-row items-center gap-2 ">
                View Case Study{" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDesign;
