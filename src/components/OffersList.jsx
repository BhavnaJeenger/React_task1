import React from "react";
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";
import image3 from "../assets/images/3.jpeg";
import image4 from "../assets/images/4.jpeg";
import image5 from "../assets/images/5.jpeg";
import image6 from "../assets/images/6.jpeg";
import image7 from "../assets/images/7.jpeg";
import image8 from "../assets/images/8.jpeg";
import { MapPin } from "lucide-react";

const offers = [
  {
    image: image1,
    name: "TPU mix colour regrind ex Apilon 52",
    country: "Slovenia",
    price: "€780.00 / MT",
  },
  {
    image: image2,
    name: "off spec XL HFFR - 6 tons - 500 Eur/MT/EXW",
    country: "Czech Republic",
    price: "Kč12,500.00 / MT ",
  },
  {
    image: image3,
    name: "Hips PS",
    country: "Turkey",
    price: "₺1,090.00 / MT",
  },
  {
    image: image4,
    name: "PET FLAKES",
    country: "Tunisia",
    price: "3,500.00 / MT",
  },
  {
    image: image5,
    name: "Pp",
    country: "Egypt",
    price: "£ o30.00 / kg",
  },
  {
    image: image6,
    name: "PVC LUMP",
    country: "Costa Rica",
    price: "₡146.00 / kg",
  },
  {
    image: image7,
    name: "Polyethylene | PE LUMPS |",
    country: "Costa Rica",
    price: "₡150.00 / kg",
  },
  {
    image: image8,
    name: "LD/PA Rolls",
    country: "Texas,United States",
    price: "$0.01 /lb",
  },
];

const OffersList = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#0a1f44] text-3xl sm:text-4xl font-bold mb-10 text-center">
        NEW OFFERS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white text-[#0a1f44] rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
          >
            {/* Image */}
            <img
              src={offer.image}
              alt={offer.name}
              className="object-cover rounded-t-lg w-full h-48"
            />

            {/* Title */}
            <h3 className="text-[#0a1f44] font-semibold text-xl px-4 pt-3 truncate">
              {offer.name}
            </h3>

            {/* Price */}
            <span className="text-[#0073e6] font-semibold text-sm px-4 pt-1 truncate">
              {offer.price}
            </span>

            {/* Location */}
            <div className="flex justify-between items-center px-4 py-3 mt-auto">
              <p className="text-sm text-gray-500 truncate">{offer.country}</p>
              <MapPin size={16} className="text-[#0a1f44]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersList;
