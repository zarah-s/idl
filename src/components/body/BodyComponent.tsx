import React from "react";
import TitleContent from "./components/TitleContent";
import NewsSection from "./sections/NewsSection";
import IntroSection from "./sections/IntroSection";
import SummaryDisplaySection from "./sections/SummaryDisplaySection";
import SummaryGridSection from "./sections/SummaryGridSection";
import CarouselSection from "./sections/CarouselSection";
const BodyComponent = () => {
  return (
    <div className="">
      <div className="relative container m-auto xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2">
        <div className=" relative ">
          <IntroSection />

          <SummaryDisplaySection />

          <SummaryGridSection />
        </div>
      </div>
      <div className="flex justify-center">
        <TitleContent title="News" />
      </div>
      <NewsSection />

      <CarouselSection />

      <div className="my-20"></div>
    </div>
  );
};

export default BodyComponent;
