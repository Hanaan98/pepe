import React from "react";
import BenefitsElement from "./subcomponents/BenefitsElement";
const DATA = [
  {
    text: "By owning a PEPE NFT, you gain access to exclusive benefits and rewards, such as voting rights, merchandise discounts, and more.",
  },
  {
    text: "PEPE is at the forefront of the memecoin movement, and by owning a PEPE NFT, you'll gain access to the latest memecoin innovation.",
  },
  {
    text: "By owning a PEPE NFT, you'll have a one-of-a-kind digital asset that represents ownership in our project. Each NFT has its own unique features and rewards.",
  },
  {
    text: "PEPE is committed to creating a fun and engaging memecoin experience for our community, with a focus on memes and other engaging content.",
  },
  {
    text: "PEPE is a community-driven project with a transparent governance structure, meaning that community members have a say in how the project is run.",
  },
  {
    text: "PEPE is a fun-loving and inclusive community. Owning a PEPE NFT makes you a part of our welcoming community that values diversity and accessibility.",
  },
];
function Benefits() {
  return (
    <div
      className="bg-benefits-image h-full lg:h-[80vh] xl:h-full bg-cover bg-center bg-no-repeat mt-10 lg:mt-20 lg:px-32 xl:px-60"
      id="benefits"
    >
      <div className="section_padding flex items-center flex-col justify-center gap-3">
        <h2 className="text_color text-md md:text-lg">Why pepe???</h2>
        <h1 className="text-center  text-white text-xl md:text-4xl font-bold">
          BENEFITS OF PEPE
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {DATA.map((item) => (
          <BenefitsElement text={item.text} />
        ))}
      </div>
      <div className="hidden lg:block bg-benefits-element-lg bg-no-repeat bg-contain h-[40vh] ">
        <ul className="text-white p-4 text-sm xl:text-base">
          <li className="flex gap-2 ">
            <div>
              <span className="font-bold underline">Early Access:</span>
              &nbsp;Get early access to new memecoin features and innovations.
            </div>
          </li>
          <li className="flex gap-2">
            <div>
              <span className="font-bold underline">Rarity:</span>
              &nbsp;Each PEPE NFT is a unique digital asset, making them rare
              and potentially valuable.
            </div>
          </li>
          <li className="flex gap-2">
            <div>
              <span className="font-bold underline">
                Investment Opportunity:
              </span>
              &nbsp;PEPE has the potential to be a valuable investment
              opportunity for NFT owners.
            </div>
          </li>
          <li className="flex gap-2">
            <div>
              <span className="font-bold underline">
                Creative Collaboration:
              </span>
              &nbsp;Collaborate creatively with other community members to
              create new memes and content.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Benefits;
