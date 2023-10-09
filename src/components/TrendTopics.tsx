import React, { useRef, useState, useEffect } from "react";

const Topics = [
  "All",
  "Debates",
  "Cricket",
  "Music",
  "News",
  "Football",
  "Deep House",
  "Jazz",
  "Playlists",
  "Classical Music",
  "Gaming",
  "Podcasts",
  "Blues Guitar",
  "Symphony Orchestra",
];

export default function TrendTopics() {
  const containerRef = useRef(null);
  const [showLeftScrollButton, setShowLeftScrollButton] = useState(false);
  const [showRightScrollButton, setShowRightScrollButton] = useState(false);

  const scrollByAmount = (amount: any) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += amount;
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const isScrollable = container.scrollWidth > container.clientWidth;

      setShowLeftScrollButton(container.scrollLeft > 0); // Show left button when scrolled
      setShowRightScrollButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      ); // Show right button when not at the end
    };

    const handleResize = () => {
      handleScroll();
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Initialize the visibility of scroll buttons
      handleScroll();

      return () => {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="relative">
      {showRightScrollButton && (
        <>
          <button
            className="absolute right-0 top-2 p-2 rounded-full bg-[#222222] hover:bg-[#464646]"
            onClick={() => scrollByAmount(100)} // Adjust the scroll amount as needed
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </>
      )}

      {showLeftScrollButton && (
        <>
          <button
            className="absolute left-0 top-2 p-2 rounded-full bg-[#222222] hover:bg-[#464646]"
            onClick={() => scrollByAmount(-100)} // Adjust the scroll amount as needed
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </>
      )}

      <div
        className="flex pl-4 pb-3 overflow-x-auto"
        ref={containerRef}
        style={{ overflowX: "hidden" }}
      >
        {Topics.map((topic, index) => {
          return (
            <div className="p-2" key={index}>
              <button className="bg-[#222222] hover:bg-[#464646] pt-2 pb-2 pl-3 pr-3 rounded-lg text-sm font-medium">
                {topic}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
