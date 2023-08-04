import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="p-3 flex justify-between items-center md:px-10 md:py-2 lg:px-20 lg:py-4 relative">
        <div>
          <Link href="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10 text-[#ffffff66] text-sm hover:transition-all">
            <li>
              <Link href="/" className="font_color" onClick={handleScroll}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="font_color" onClick={handleScroll}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="#roadmap"
                className="font_color"
                onClick={handleScroll}
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="#benefits"
                className="font_color"
                onClick={handleScroll}
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link href="#faqs" className="font_color" onClick={handleScroll}>
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <button className="hidden md:block px-8 py-3 rounded-full text-white text-sm bg-gradient-to-r from-[#FEF102] to-[#FFA108] button_shadow">
            Mint Now
          </button>
          <div className="lg:hidden">
            {!showMenu ? (
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                color="white"
                onClick={() => {
                  setShowMenu(true);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faClose}
                size="lg"
                color="white"
                onClick={() => {
                  setShowMenu(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="absolute right-8 top-12 scale-up-center bg-[#2a3042] p-3 w-40 md:top-12 md:p-4 md:right-16 flex flex-col items-end gap-2">
          <ul className="flex flex-col gap-3 text-white text-sm hover:transition-all items-end">
            <li>
              <Link href="/" className="font_color" onClick={handleScroll}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="font_color" onClick={handleScroll}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="#roadmap"
                className="font_color"
                onClick={handleScroll}
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="#benefits"
                className="font_color"
                onClick={handleScroll}
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link href="#faqs" className="font_color" onClick={handleScroll}>
                FAQs
              </Link>
            </li>
          </ul>
          <button className=" md:hidden px-5 py-2 rounded text-white text-sm bg-gradient-to-r from-[#FEF102] to-[#FFA108] button_shadow">
            Mint Now
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
