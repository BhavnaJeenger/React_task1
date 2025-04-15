import React, { useState, useEffect } from "react";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottomOffset = 200; // Adjust as needed
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - bottomOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 right-4 cursor-pointer" onClick={scrollToTop}>
        <svg width="72" height="72" className="opacity-100 hover:opacity-80 transition">
          <path fill="#0b163d" fillOpacity="0.5" d="M36 72a36 36 0 1 0 0-72 36 36 0 0 0 0 72z"></path>
          <path fill="#fff" d="M42.9 30a1 1 0 0 1-1.5 0l-4-4.3v24.6c0 2.3-2.8 2.3-2.8 0V25.7l-4 4.3a1 1 0 0 1-1.5 0l-.5-.7a1 1 0 0 1 0-1.3l7.4-8 7.4 8a1 1 0 0 1 0 1.4z"></path>
        </svg>
      </div>
    )
  );
};

export default ScrollTopButton;
