import React from "react";
import RoundedBtn from "../components/RoundedBtn";
import { motion } from "framer-motion";
const IntroSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.5 }}
      className="flex"
    >
      <div className="lg:w-[60%]">
        <img src="/images/berry.png" className="w-20" alt="" />
        <p className="font-bold text-4xl my-10">
          Welcome to Integrated Dairies Limited, producers of Farmfresh milk and
          Yogurts.
        </p>
        <p className="text-[#1b1c1e80] mb-5">
          We produce the best diary products in Nigeria. Farmfresh milk and
          yoghurt is for everyone who wants to feel good, alive, and refreshed.
        </p>
        <RoundedBtn text="Shop Now" />
      </div>
      <div className="xl:block lg:block md:block sm:hidden xs:hidden">
        <img
          src="/images/field.png "
          alt=""
          className="w-96 absolute top-0 right-0"
        />
        <div className="flex absolute right-32 top-72">
          <img src="/images/yo_1.png" className="w-20" alt="" />
          <img src="/images/yo_2.png" className="w-20" alt="" />
          <img src="/images/yo_3.png" className="w-20" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
