import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import { motion } from "framer-motion";

const CarouselSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 container m-auto mt-20 xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2"
    >
      <CarouselComponent
        title="Testimonials"
        content="People love the community and are happy with the help we provide"
      />
      <CarouselComponent
        title="Partners"
        content="People love the community and are happy with the help we provide"
      />
    </motion.div>
  );
};

export default CarouselSection;
