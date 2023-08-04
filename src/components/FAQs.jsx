import React from "react";
import FAQsElement from "./subcomponents/FAQsElement";
const DATA = [
  {
    count: "01",
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquid, dicta quos eaque accusamus voluptate.",
  },
  {
    count: "02",
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquid, dicta quos eaque accusamus voluptate.",
  },
  {
    count: "03",
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquid, dicta quos eaque accusamus voluptate.",
  },
  {
    count: "04",
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquid, dicta quos eaque accusamus voluptate.",
  },
];
function FAQs() {
  return (
    <div
      className="bg-faqs-image bg-contain bg-left bg-no-repeat mt-10 lg:mt-20 h-full xl:h-[90vh] "
      id="faqs"
    >
      <div className="section_padding flex items-center flex-col justify-center gap-3">
        <h1 className="text-center md:text-left text-white text-xl md:text-4xl font-bold">
          Frequently Asked <span className="text_color">Questions</span>
        </h1>
      </div>

      <div class="mx-auto px-5 text-white">
        <div class="grid gap-3 max-w-xl mx-auto mt-8">
          {DATA.map((item) => (
            <FAQsElement
              question={item.question}
              answer={item.answer}
              count={item.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
