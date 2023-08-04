import React from "react";

function Purpose() {
  return (
    <div className="mt-10 lg:mt-20 ">
      <div className="section_padding flex items-center flex-col justify-center gap-3">
        <h2 className="text_color text-md md:text-lg">Still thinking???</h2>
        <h1 className="text-center md:text-left text-white text-xl md:text-4xl font-bold">
          BUY WITH A PURPOSE
        </h1>
        <h2 className="text-white mt-5 font-[600] text-sm md:text-[18px]">
          When you buy a Pepe NFT, you're not just getting a unique digital
          asset – you're becoming a part of a community-driven project that is
          committed to creating a fun and engaging memecoin experience for
          everyone. By supporting the Pepe project through your purchase, you'll
          be investing in the future of memecoins while also becoming a part of
          a welcoming and inclusive community. So why not buy a Pepe NFT today
          and join the memecoin movement?
        </h2>
        <button className="px-8 py-3 rounded-full text-white text-sm bg-gradient-to-r from-[#FEF102] to-[#FFA108] button_shadow">
          Mint Now
        </button>
      </div>
      <div className="flex gap-5 flex-col md:flex-row items-center mt-10 justify-center">
        <img
          src="/Rectangle 7.png"
          alt=""
          className="hidden xl:block w-[297px] h-[305px]  xl:w-[210px] xl:h-[270px]"
        />
        <img
          src="/Rectangle 5.png"
          alt=""
          className="w-[297px] h-[305px] md:w-[230px] md:h-[300px] object-contain"
        />
        <img
          src="/Rectangle 4.png"
          alt=""
          className=" w-[297px] h-[305px] md:w-[250px] md:h-[360px] object-contain"
        />
        <img
          src="/Rectangle 8.png"
          alt=""
          className="w-[297px] h-[305px] md:w-[230px] md:h-[300px] object-contain"
        />
        <img
          src="/Rectangle 9.png"
          alt=""
          className=" hidden xl:block w-[297px] h-[305px] xl:w-[210px] xl:h-[270px]"
        />
      </div>
    </div>
  );
}

export default Purpose;
