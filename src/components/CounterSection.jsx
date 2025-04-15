import React from "react";
import bgImage from "../assets/images/plastics.jpg";

const CounterSection = () => {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center bg-no-repeat py-16 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(65,85,139,0.7)]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {[
            { count: "50000+", label: "Registered businesses" },
            { count: "150+", label: "Countries" },
            { count: "20 Million", label: "Tons of listed material" },
            { count: "120000+", label: "Real-time negotiations" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-[48px]">
                {item.count}
              </span>
              <div className="text-sm mt-1 font-bold text-[18px]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Border Divider */}
        <div className="border-t border-white w-[90%] mx-auto mt-6 mb-8"></div>

        {/* Footer Text */}
        <div className="uppercase text-xl font-bold m-[20x] p-[30px] leading-[2.5]">
          Polytrend is the world's largest plastic recycling marketplace
        </div>
        <div className="block sm:hidden opacity-100 z-0">
          <a
            href="#"
            className="button button-white signup2-step px-7 py-3 rounded-md bg-white text-[#0a1f44] font-bold"
          >
            Download Free App
          </a>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
