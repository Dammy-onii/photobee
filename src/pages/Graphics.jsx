import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import backgroundImg from "../assets/img/backgroundimage.png";

// Illustrations
import ill1 from "../assets/portfolio/illustration/abstract faces 3.jpg";
import ill2 from "../assets/portfolio/illustration/arab art 1.jpg";
import ill3 from "../assets/portfolio/illustration/arab art mock plane.jpg";
import ill4 from "../assets/portfolio/illustration/arab pat 2-01.jpg";
import ill5 from "../assets/portfolio/illustration/art work 2.jpg";
import ill6 from "../assets/portfolio/illustration/art3 hats2-01.jpg";
import ill7 from "../assets/portfolio/illustration/bbbabe.jpg";
import ill8 from "../assets/portfolio/illustration/big uncles artwork.jpg";
import ill9 from "../assets/portfolio/illustration/book.png";
import ill10 from "../assets/portfolio/illustration/change me oh lord.jpg";
import ill11 from "../assets/portfolio/illustration/hats up.jpg";

// Logo
import logo1 from "../assets/portfolio/logo/behance logo.jpg";
import logo2 from "../assets/portfolio/logo/bluesoft id.jpg";
import logo3 from "../assets/portfolio/logo/dishes by r.jpg";
import logo4 from "../assets/portfolio/logo/dishes by r.jpg";
import logo5 from "../assets/portfolio/logo/f_ f brand black surface.jpg";
import logo6 from "../assets/portfolio/logo/fine and fitted.jpg";

function Graphics() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(-1);

  const images = [
    {
      id: 1,
      category: "illustration",
      image: ill1,
    },
    {
      id: 2,
      category: "illustration",
      image: ill2,
    },
    {
      id: 3,
      category: "illustration",
      image: ill3,
    },
    {
      id: 4,
      category: "illustration",
      image: ill4,
    },
    {
      id: 5,
      category: "illustration",
      image: ill5,
    },
    {
      id: 6,
      category: "illustration",
      image: ill6,
    },
    {
      id: 7,
      category: "illustration",
      image: ill7,
    },
    {
      id: 8,
      category: "illustration",
      image: ill8,
    },
    {
      id: 9,
      category: "illustration",
      image: ill9,
    },
    {
      id: 10,
      category: "illustration",
      image: ill10,
    },
    {
      id: 11,
      category: "logo",
      image: logo1,
    },
    {
      id: 12,
      category: "logo",
      image: logo2,
    },
    {
      id: 13,
      category: "logo",
      image: logo3,
    },
    {
      id: 14,
      category: "logo",
      image: logo4,
    },
    {
      id: 15,
      category: "logo",
      image: logo5,
    },
    {
      id: 16,
      category: "logo",
      image: logo6,
    },
  ];

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.category === filter);

  const handleClick = (index) => {
    setIndex(index);
    setOpen(true);
  };

  useEffect(() => {
    console.log(handleClick);
  }, [handleClick]);

  return (
    <div className=" w-full h-full flex flex-col justify-center items-center py-10 ">
      <img
        className=" fixed top-0 left-0 z-[-1] w-screen h-screen "
        src={backgroundImg}
        alt=""
      />

      <div className=" fixed top-10 w-full flex flex-row gap-5 justify-start px-10 text-[#fff] text-l mt-20 z-20 font-semibold ">
        <h1
          className={`border-[1px] border-[#fff] px-4 py-4 hover:bg-[#fff] hover:text-[#000] ${
            filter === "all" ? "bg-[#fff] text-[#000]" : ""
          } `}
          onClick={() => setFilter("all")}
        >
          All
        </h1>
        <h1
          className={`border-[1px] border-[#fff] px-4 py-4 hover:bg-[#fff] hover:text-[#000] ${
            filter === "illustration" ? "bg-[#fff] text-[#000]" : ""
          } `}
          onClick={() => setFilter("illustration")}
        >
          illustration
        </h1>
        <h1
          className={`border-[1px] border-[#fff] px-4 py-4 hover:bg-[#fff] hover:text-[#000] ${
            filter === "logo" ? "bg-[#fff] text-[#000]" : ""
          } `}
          onClick={() => setFilter("logo")}
        >
          logo
        </h1>
      </div>

      <div className=" w-3/4 h-full columns-1 md:columns-2 lg:columns-3 gap-4 mt-6 ">
        {filteredImages.map((image, i) => (
          <div key={image.id} className="mb-4 break-inside-avoid">
            <img
              src={image.image}
              alt={image.category}
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => handleClick(i)}
            />
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          slides={filteredImages.map((img) => ({ src: img.image }))}
          open={open}
          index={index}
          close={() => setOpen(false)}
        />
      )}
    </div>
  );
}

export default Graphics;
