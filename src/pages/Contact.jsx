import React from "react";

function Contact() {
  return (
    <div className=" w-full h-full mt-5 py-10 gap-0 lg:my-0 lg:h-screen px-10 flex flex-col-reverse lg:flex-row items-center justify-between ">
      <div className=" w-full lg:w-2/4 py-5 h-full lg:h-4/5 my-10   ">
        <iframe
          className=" w-full h-full rounded-[20%] "
          src="https://my.spline.design/darkspideycopy-31eec7e9f8b1976e2dcdbfea000fb1d1/"
        ></iframe>
      </div>
      <div className=" flex flex-col w-full lg:w-2/4 gap-2 ">
        <h1 className=" text-3xl font-medium ">
          Let’s make designs people will love.
        </h1>
        <a href="mailto:tobest070@gmail.com">
          <h1 className=" font-extralight my-5 text-3xl lg:text-7xl lg:ml-[-20%] ">
            Tobest070@gmail.com
          </h1>
        </a>
      </div>
    </div>
  );
}

export default Contact;
