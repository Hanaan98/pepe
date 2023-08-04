import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col justify-between mt-2  md:flex-row" id="home">
      <img
        src="/pepe1.png"
        alt="pepe1"
        className="md:max-h-[50vh] lg:max-h-[100vh] object-cover mt-3 hidden md:block"
      />
      <div className="flex flex-col items-center">
        <img
          src="/heroimage.png"
          alt="heroimage"
          className="w-72 h-64 md:w-96 md:h-80 object-cover"
        />
        <h1 className="text-2xl font-extrabold text-white md:text-4xl lg:text-5xl  uppercase w-3/4 text-center -mt-10">
          Welcome to the <span className=" text_color">pepe</span>
        </h1>
        <img
          src="/PEPE NFT CIRCLE.png"
          alt=""
          className="-mt-10 w-60 md:w-80 object-cover"
        />
        <p className="text-center text-white text-xs -mt-5 px-4 md:px-0 md:text-sm md:-mt-10">
          Our PEPE NFT is a one-of-a-kind digital asset that represents
          ownership in our fun and exciting community-driven project.
        </p>
      </div>
      <img
        src="/pepe2.png"
        alt="pepe2"
        className="md:max-h-[50vh] lg:max-h-[100vh] object-cover mt-3 hidden md:block"
      />
    </div>
  );
}

export default HeroSection;
