import React from "react";

function FAQsElement(props) {
  return (
    <div class="py-5 border border-[#24293a] px-2 rounded-md">
      <details class="group">
        <summary class="flex justify-between items-center font-medium cursor-pointer gap-2 md:gap-5 ">
          <span className="text-[0.75rem] md:text-lg">{props.count}</span>
          <span className="text-[0.75rem] md:text-lg">{props.question}</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="text-white text-[0.6rem] md:text-sm mt-3 group-open:animate-fadeIn">
          {props.answer}
        </p>
      </details>
    </div>
  );
}

export default FAQsElement;
