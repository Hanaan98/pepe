import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
function About() {
  return (
    <div
      className="bg-about-image h-full pb-32 md:pb-96 bg-contain bg-right-bottom  bg-no-repeat mt-10 lg:mt-20 "
      id="about"
    >
      <div className="section_padding flex items-center flex-col justify-center gap-3">
        <h2 className="text_color text-md md:text-lg">About the pepe</h2>
        <h1 className="text-center lg:text-left text-white text-xl md:text-4xl font-bold">
          WHAT IS PEPE NFT?
        </h1>
        <h2 className="text-white mt-5 font-[600] text-sm lg:text-[18px]">
          PEPE is a fun and exciting memecoin project that is dedicated to
          creating a unique and memeable experience for our community. Here's
          what you need to know about PEPE
        </h2>
        <ul className="flex flex-col gap-2 text-white text-xs lg:text-[16px] mt-5 px-1 lg:px-3">
          <li className="flex gap-2  ">
            <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#fef102" />
            <div>
              <span className="font-bold underline">The Memeable Memecoin</span>
              :&nbsp;PEPE is all about embracing the world of memes and creating
              a memecoin that is truly fun and irreverent.
            </div>
          </li>
          <li className="flex gap-2  ">
            <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#fef102" />
            <div>
              <span className="font-bold underline">Unique Digital Assets</span>
              :&nbsp;Our PEPE NFT is a one-of-a-kind digital asset that
              represents ownership in our project. By owning a PEPE NFT, you
              become a part of our community and gain access to exclusive
              benefits and rewards.
            </div>
          </li>
          <li className="flex gap-2  ">
            <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#fef102" />
            <div>
              <span className="font-bold underline">
                Community-Driven Governance
              </span>
              :&nbsp;PEPE is a community-driven project, which means that our
              community members have a say in how the project is run.
            </div>
          </li>
          <li className="flex gap-2  ">
            <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#fef102" />
            <div>
              <span className="font-bold underline">
                The Future of Memecoins
              </span>
              :&nbsp;We believe that memecoins have the potential to be the next
              big thing in cryptocurrency. PEPE is at the forefront of this
              movement, and we're excited to be a part of the future of
              memecoins.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
