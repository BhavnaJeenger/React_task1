import { useState } from "react";
import step1Image from "../assets/images/post.png";
import step2Image from "../assets/images/price.png";
import step3Image from "../assets/images/sell.png";
import step4Image from "../assets/images/search.png";
import step5Image from "../assets/images/n.png";
import step6Image from "../assets/images/supply.png";

// Step card
const Step = ({ icon, title, description, number }) => (
  <div className="flex flex-col items-center text-center p-4 sm:p-6">
    {/* Icon circle with number inside */}
    <div className="relative w-16 h-16 flex items-center justify-center p-3 mb-4 rounded-full border-2 border-[#0a1f44] bg-white">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0073e6] text-white text-xs font-bold flex items-center justify-center rounded-full shadow-md">
        {number}
      </div>
    </div>

    {/* Title & Description */}
    <h3 className="text-lg sm:text-xl font-semibold text-[#0a1f44]">{title}</h3>
    <p className="text-[#0073e6] text-sm sm:text-base mt-2">{description}</p>
  </div>
);

// Main component
const Working = () => {
  const [activeTab, setActiveTab] = useState("sellers");

  return (
    <div className="pt-12 pb-16 flex flex-col items-center bg-white px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1f44]">HOW IT WORKS</h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <button
          className={`px-5 py-2 rounded-md text-base sm:text-lg font-medium ${
            activeTab === "sellers"
              ? "text-[#0a1f44] underline decoration-[#0073e6] decoration-2 underline-offset-4"
              : "text-[#0a1f44]"
          }`}
          onClick={() => setActiveTab("sellers")}
        >
          Sellers
        </button>
        <button
          className={`px-5 py-2 rounded-md text-base sm:text-lg font-medium ${
            activeTab === "buyers"
              ? "text-[#0a1f44] underline decoration-[#0073e6] decoration-2 underline-offset-4"
              : "text-[#0a1f44]"
          }`}
          onClick={() => setActiveTab("buyers")}
        >
          Buyers
        </button>
      </div>

      {/* Steps Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {activeTab === "sellers" ? (
            <>
              <Step
                icon={step1Image}
                title="Post your offer"
                description="Join the marketplace and post products you want to sell in less than a minute."
                number="1"
              />
              <Step
                icon={step2Image}
                title="Get the best price"
                description="Negotiate with buyers in real-time and get the best price for your products."
                number="2"
              />
              <Step
                icon={step3Image}
                title="Sell directly to customers"
                description="Sell products directly to customers in your country and around the world."
                number="3"
              />
            </>
          ) : (
            <>
              <Step
                icon={step4Image}
                title="Find what you’re looking for"
                description="Browse through thousands of offers posted in the marketplace and find what you’re looking for."
                number="1"
              />
              <Step
                icon={step5Image}
                title="Negotiate the best deal"
                description="Negotiate with multiple sellers in real-time and make the best deal right from your phone."
                number="2"
              />
              <Step
                icon={step6Image}
                title="Buy directly from suppliers"
                description="Buy directly from suppliers of quality material in your country or internationally."
                number="3"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Working;
