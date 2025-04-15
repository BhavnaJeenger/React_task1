import React from "react";
import market from "../assets/images/market1.png";
import resource from "../assets/images/resource1.png";
import Economy from "../assets/images/Eco1.png";
import Economymainlogo from "../assets/images/Economyimage.jpg";
import Recyclingtoday from "../assets/images/re.png";
import Markeyinsider from "../assets/images/ma.jpg";
import RecyclePNews from "../assets/images/repr.jpeg";
import Wastetoday from "../assets/images/waste.jpg";
import ResourceRecycling from "../assets/images/rerecycle.jpg"


const features = [
  {
    logo: Economymainlogo,
    source: "The Economist",
    title:
      "A Chinese ban on rubbish imports is shaking up the global junk trade",
    desc: "China used to import a significant portion of the world’s scrap. Suddenly, revenues from selling mixed waste to China which…",
    href: "https://www.economist.com/special-report/2018/09/27/a-chinese-ban-on-rubbish-imports-is-shaking-up-the-global-junk-trade",
    image: Economy,
  },
  {
    logo: Recyclingtoday,
    source: "Recycling Today",
    title: "Polytrend establishes online trading network for recycled plastics",
    desc: "A Silicon Valley startup says it has taken on the challenge of opening up the plastic scrap trading industry...",
    href: "https://www.recyclingtoday.com/news/scrapo-launches-online-plastic-scrap-trading-network/",
  },
  {
    logo: Markeyinsider,
    source: "Markets Insider",
    title:
      "The Silicon Valley startup Polytrend is helping preserve the environment...",
    desc: "Polytrend, Inc., a Silicon Valley startup, believes that if we are able to simply bridge this gap between the plastic scrap buyers and sellers, it would have…",
    href: "https://markets.businessinsider.com/news/stocks/the-silicon-valley-startup-scrapo-is-helping-preserve-the-environment-by-facilitating-recyclables-trading-1008928003",
    image: market,
  },
  {
    logo: ResourceRecycling,
    source: "Resource Recycling",
    title: "Platform provides insight into post-China markets",
    desc: "Polytrend, a Sunnyvale, Calif. technology company, came online in November 2017, pledging to help reduce disposal of plastics by bridging the gap between buyers…",
    href: "https://resource-recycling.com/plastics/2018/09/26/platform-provides-insight-into-post-china-markets/",
    image: resource,
  },
  {
    logo: Wastetoday,
    source: "Waste Today",
    title: "With the ScrapoSure option, the Scrapo team visits sellers’ sites, verifies their IDs…",
    desc: "One of the factors that can undermine market efficiency and create barriers to trade is the lack of trust between buyers and sellers, according to Scrapo…",
    href: "https://www.wastetodaymagazine.com/news/scrapo-launches-online-plastic-scrap-trading-network/",
  },
  {
    logo: RecyclePNews,
    source: "Recycling Product News",
    title: "New app designed to facilitate plastics recyclables trading",
    desc: "According to Scrapo, Inc., a Silicon Valley startup, one of the most important problems that surrounds the world environment today is…",
    href: "https://www.recyclingproductnews.com/article/26996/new-app-designed-to-facilitate-plastics-recyclables-trading",
  },
];

export default function FeaturedIn() {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 mt-12">
      <h2 className="text-3xl font-semibold text-[#0a1f44] text-center mb-10">
        FEATURED IN
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md transition-all"
          >
            {/* Top Logo & Source */}
            <div className="flex items-center gap-3 mb-5 border-b-2 border-gray-300 pb-2">
              <div
                className="flex-shrink-0"
                style={{
                  backgroundImage: `url(${item.logo})`,
                  backgroundPosition: item.backgroundPosition,
                  backgroundSize: "cover",
                  width: "55px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <p className="text-xl text-[#0a1f44] font-medium">{item.source}</p>
            </div>

            {/* Title + Optional Image (Hidden on Mobile) */}
            <div className="flex items-start">
              {item.image && (
                <img
                  src={item.image}
                  alt="Article"
                  className="hidden sm:block w-20 h-16 object-cover rounded-md mr-3 mt-1"
                />
              )}
              <h3 className="text-[#0a1f44] text-lg sm:text-xl font-semibold">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#0073e6] text-[14px] sm:text-[18px] font-medium mt-2 mb-4">
              {item.desc}
            </p>

            {/* Read More Link */}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a1f44] font-semibold text-[16px] flex items-center group"
            >
              Read more{" "}
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1 mt-[2px]">
                ➜
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
