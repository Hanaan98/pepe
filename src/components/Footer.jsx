import React from "react";

function Footer() {
  return (
    <div className="px-4 py-6 md:px-20 md:py-6 text-[#bfbfbf] text-sm mt-10">
      <hr className=" border-r-2 border-[#bfbfbf]" />
      <div className="flex justify-between mt-4 items-center gap-5">
        <h1 className="text-xs md:text-sm"> @2022NFT. All rights reserved </h1>
        <div className="flex gap-3">
          <h1 className="text-xs md:text-sm">Terms & Agreements</h1>
          <h1 className="text-xs md:text-sm">Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
