import React from "react";

function BenefitsElement(props) {
  return (
    <div className="bg-benefits-element bg-no-repeat bg-contain  h-[30vh] md:h-[20vh] xl:h-[30vh] max-w-xs ">
      <h1 className="text-white text-[0.82rem] p-5 xl:text-sm md:pl-5 md:pr-2 md:py-4 ">
        {props.text}
      </h1>
    </div>
  );
}

export default BenefitsElement;
