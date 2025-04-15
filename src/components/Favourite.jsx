import React from "react";
import favimg1 from "../assets/images/favimg1.jpeg";
import favimg2 from "../assets/images/favimg2.jpeg";
import favimg3 from "../assets/images/favimg3.jpeg";
import favimg4 from "../assets/images/favimg4.jpeg";
import favimg5 from "../assets/images/favimg5.jpeg";
import favimg6 from "../assets/images/favimg6.jpeg";
import favimg7 from "../assets/images/favimg7.jpeg";
import favimg8 from "../assets/images/favimg8.jpeg";

const images = [
  { image: favimg1, title: "PS regrind" },
  { image: favimg2, title: "PE Regranulate" },
  { image: favimg3, title: "Recycled PP Granules" },
  { image: favimg4, title: "PVC Rigid Light Grey Regrind " },
  { image: favimg5, title: "LDPE REPRO" },
  { image: favimg6, title: "LDPE GRADE A " },
  { image: favimg7, title: "ABS from reels " },
  { image: favimg8, title: "Polyester Airbag scrap with silicon" },
];

const Favourite = () => {
  return (
    <div className=" bg-white flex flex-col items-center text-white mt-12">
      <h2 className="text-[#0a1f44] text-4xl font-bold mb-8 text-[28px]">
        FAVORITES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative bg-white text-[#0a1f44] rounded-lg shadow-md opacity-[0.8] transition-opacity duration-300"
          >
            <img
              src={img.image} 
              alt={img.title}
              className="object-cover rounded-lg w-60 h-50"
            />
            <div className="text-center absolute inset-0 flex items-center justify-center bg-[#0a1f44] bg-opacity-50 text-white text-xl font-semibold opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg z-5">
              {img.title}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[40px] bg-[#001f3f] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 flex justify-between items-center px-4 text-white text-sm rounded-b-lg z-20">
              {/* Left Side: See More */}
              <span>See More</span>

              {/* Right Side: Arrow */}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ➜
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
