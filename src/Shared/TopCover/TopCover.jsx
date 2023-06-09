import React from "react";
import { Parallax } from "react-parallax";

const TopCover = ({ img,title }) => {
  return (
    <Parallax
        blur={{ min: -25, max: 25 }}
        bgImage={img} className="rounded"
        bgImageAlt="Bg"
        strength={-150}
    >
        <div
      className="hero lg:h-[600px]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="p-10 lg:p-32 rounded-md bg-gradient-to-r from-[#121a38eb] to-[#1b30485b]">
          <h1 className="mb-5 text-5xl text-white lg:text-8xl">{title}</h1>
          <p className="mb-5 uppercase">
            Would You Like to Try a Class ?
          </p>
        </div>
      </div>
    </div>
    </Parallax>
    
  );
};

export default TopCover;
