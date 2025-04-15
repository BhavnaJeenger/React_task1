import React from "react";
import bannerImage from "../assets/images/banner-img.png";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0a1f44] text-white py-8 md:py-12 lg:py-10 relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center pb-8">
          <div className="text-2xl font-bold">Polytrend</div>
          <Link
            to="/login"
            className="border-2 border-white px-4 py-2 rounded-md transition hover:bg-white hover:text-[#0a1f44] text-sm sm:text-base hidden sm:block"
          >
            Log In
          </Link>
        </nav>

        {/* Hero section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Plastic Recycling <br />
              Marketplace
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              Connect and trade directly with suppliers{" "}
              <br className="hidden sm:block" /> & buyers of recyclable plastics
            </p>

            {/* Desktop Button */}

            <Link
              to="/signup"
              className="hidden lg:inline-block bg-white text-[#0b163d] px-6 py-3 font-semibold rounded-md transition hover:bg-blue-200 text-sm sm:text-base"
            >
              Join Polytrend
            </Link>

            {/* Mobile/Tablet Button */}
            <button  onClick={() => navigate('/signup')} className="inline-block lg:hidden bg-white 
            text-[#0b163d] px-6 py-3 font-semibold rounded-md transition hover:bg-blue-200 text-sm sm:text-base">
              Download Polytrend App
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={bannerImage}
              alt="Recyclable Graphic"
              className="object-contain max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
