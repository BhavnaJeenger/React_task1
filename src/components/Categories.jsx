import React from "react";
import { ArrowRight } from "lucide-react";
import logo from "../assets/images/c1.png";

const materialList = ["PET", "HDPE", "PVC", "LDPE", "PP", "PS", "ABS", "NYLON"];

const Categories = () => {
  return (
    <div className="relative bg-gray-100 py-12 px-4 sm:px-8 flex justify-center mt-12 overflow-hidden">
      {/* ✅ Blurred background image only on small screens */}
      <div
        className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-left bg-contain blur-md opacity-100 z-0 block sm:hidden"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover"
        }}
      />

      {/* ✅ Clear background on larger screens (if you want) */}
      <div
        className="absolute bottom-0 left-0 w-full h-full bg-no-repeat  left bg-cover z-0 hidden sm:block"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl w-full">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl sm:text-4xl text-[#0a1f44] text-center font-bold mb-4 uppercase">
            Top Categories
          </h2>
          <p className="text-[#0073e6] text-[16px] sm:text-[18px] text-center">
            Browse through thousands of <br /> offers in top categories. All
            types <br /> of plastic for your recycling or manufacturing needs.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-2 px-4 ml-[77px]">
          {materialList.map((item, index) => (
            <div
              key={index}
              className="group flex justify-between items-center px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-white hover:shadow"
            >
              <div className="flex items-center space-x-3 w-full">
                <span
                  className="w-0 h-0 flex-shrink-0"
                  style={{
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                    borderLeft: "6px solid #0073e6",
                  }}
                />
                <span className="text-gray-800 font-bold text-[20px] sm:text-[18px]">
                  {item}
                </span>
              </div>
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#0073e6] text-white flex items-center justify-center transform transition-all duration-300 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
