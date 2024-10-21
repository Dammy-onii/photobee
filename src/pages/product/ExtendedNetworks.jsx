import React from "react";

import extendedIntro from "../../assets/product/extended/extendedIntro.png";
import overview from "../../assets/product/extended/overview.png";

import sol1 from "../../assets/product/extended/sol1.png";
import sol2 from "../../assets/product/extended/sol2.png";
import sol3 from "../../assets/product/extended/sol3.png";
import sol4 from "../../assets/product/extended/sol4.png";

import mobile1 from "../../assets/product/extended/mobile1.png";
import mobile2 from "../../assets/product/extended/mobile2.png";
import mobile3 from "../../assets/product/extended/mobile3.png";
import mobile4 from "../../assets/product/extended/mobile4.png";

import whatsAppBot from "../../assets/product/extended/whatsappBot.png";
import userTesting from "../../assets/product/extended/userTesting.png";

function ExtendedNetworks() {
  return (
    <div className=" text-[#4A4A4A] ">
      <div className=" w-full px-10 py-10 flex flex-row items-center justify-between bg-[#C84347] text-[#fff] ">
        <h1 className=" text-4xl font-medium tracking-wide ">
          Extended Networks{" "}
        </h1>
        <span className=" w-2/4 border-2  "></span>
      </div>

      <div className=" w-full px-10 py-10 flex flex-col lg:flex-row  ">
        <div className=" w-full lg:w-2/4 flex flex-col items-center justify-center pr-10 ">
          <h1 className=" text-3xl font-semibold ">About Extended Neworks</h1>
          <h2 className=" text-2xl font-light my-4  ">
            Extended Networks W.A. Limited is one of the biggest and fastest
            growing Co-location Service Providers for Mobile Network Operators
            in Nigeria They also helps Telecommunication companies monitor and
            maintain their Sites and clusters, which enables mobile network
            operators to improve services to their subscribers. Trusted by MTN,
            Airtel, 9mobile etc.
          </h2>
          <h1 className=" text-3xl font-semibold ">My Role</h1>
          <h2 className=" text-2xl font-light my-4  ">
            UI/UX Design, Infographics design, Email report design and WhatsApp
            bot extension UX design
          </h2>
        </div>
        <img className=" w-full lg:w-3/5 " src={extendedIntro} alt="" />
      </div>

      <div className=" w-full py-10 flex flex-col lg:flex-row ">
        <img
          className=" w-full px-10 my-4 lg:px-0 lg:w-2/5 h-fit "
          src={overview}
          alt=""
        />

        <div className=" w-full lg:w-3/5 flex flex-col items-start justify-center px-10 ">
          <h1 className=" text-3xl font-semibold ">Overview</h1>
          <h2 className=" text-2xl font-light mt-4  ">
            The Products for Extended Networks W.A. Limited was aimed to
            <b>
              simplify operations for engineers, Administrators and managers
            </b>{" "}
            and also make all operations effective. To do this the following
            products were designed:{" "}
            <b>
              Mobile application for field engineers, Web application for Site
              administrators and Managers, Email Reporting, AI predictive
              Insights, Text Messaging for urgent alerts and WhatsApp bot
            </b>
          </h2>
          <h2 className=" text-2xl font-light  ">
            The product helped Site managers and field Engineers monitor their
            assigned sites remotely and also open and close tickets created by
            the system or by users. Sensors are placed on the equipment's and
            machines at the field / sites that collects data for analysis and
            generating reports, This data is also collected by Artificial
            Intelligence for predictive analysis and suggested maintenance
            schedules.
          </h2>
        </div>
      </div>

      <div className=" w-full py-10 ">
        <div className=" w-full lg:w-2/5 flex flex-col pl-10 ">
          <h1 className=" text-3xl font-semibold my-4 ">Solutions</h1>
          <h2 className=" text-2xl font-light ">
            Some of the solutions from the web product includes; live dashboard,
            insight dashboard, ticketing, planner, etc
          </h2>
        </div>
        {/* <div className=" w-full grid grid-cols-2 gap-10 py-10 px-2 items-center justify-around  bg-[#C84347] ">
          <img className=" w-full object-cover " src={sol1} alt="" />
          <img className=" w-3/4  object-cover " src={sol2} alt="" />
          <img className="object-cover" src={sol3} alt="" />
          <img src={sol4} alt="" />
        </div> */}
      </div>

      <div className=" w-full py-10 ">
        <div className=" w-full lg:w-full flex justify-end ">
          <div className=" w-full lg:w-2/5 flex flex-col px-10 py-5 text-right ">
            <h1 className=" text-3xl font-semibold my-4 ">
              Mobile Application
            </h1>
            <h2 className=" text-2xl font-light text-justify ">
              The mobile Application was created mainly for field engineers on
              the go and for managers to track their performance. the
              features/solutions includes; field tracking, ticketing, task
              planner, maintainance schedule etc.
            </h2>
          </div>
        </div>
        <div className=" w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-center px-10 place-items-center bg-[#C84347] ">
          <img src={mobile1} alt="" />
          <img src={mobile2} alt="" />
          <img src={mobile3} alt="" />
          <img src={mobile4} alt="" />
        </div>
      </div>

      <div className=" w-full flex flex-col lg:flex-row px-10 py-10 ">
        <div className=" w-full lg:w-3/5 flex flex-col ">
          <h1 className=" text-3xl font-semibold my-4 ">
            Whatsapp bot and Email Reporting
          </h1>
          <h2 className=" text-2xl font-light ">
            The mobile Application was created mainly for field engineers on the
            go and for managers to track their performance. the
            features/solutions includes; field tracking, ticketing, task
            planner, maintainance schedule etc.
          </h2>
        </div>
        <img className=" w-full lg:full " src={whatsAppBot} alt="" />
      </div>

      <div className=" w-full flex flex-col lg:flex-row px-10 py-10 ">
        <div className=" w-full lg:w-3/5 flex flex-col ">
          <h1 className=" text-3xl font-semibold my-4 ">
            User Testing / Research
          </h1>
          <h2 className=" text-2xl font-light ">
            Various research methods were used to collect information and feed
            back from the users including; in person interviews, Guerilla test,
            AB Testing and questionaries
          </h2>
        </div>
        <img className=" w-full lg:full " src={userTesting} alt="" />
      </div>
    </div>
  );
}

export default ExtendedNetworks;
