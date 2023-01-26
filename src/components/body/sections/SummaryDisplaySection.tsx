import React from "react";
import SummaryDisplay from "../components/SummaryDisplay";
import FarmFreshProduct from "../../../../public/images/product.png";
import YoSummary from "../../../../public/images/yo_summary.png";
import { motion } from "framer-motion";
const SummaryDisplaySection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <SummaryDisplay
        title="FarmFresh Products"
        content="The sensory qualities of nutritional drinks are a priority. Milk
        proteins meet this challenge by providing the finished product with
        texture , taste and appearance in a natural way."
        imageUrl={FarmFreshProduct}
      />
      <SummaryDisplay
        title="reFresh Yoghurt"
        content="We produce the best diary products in Nigeria. Farmfresh milk and yoghurt is for everyone who wants to feel good, alive, and refreshed."
        imageUrl={YoSummary}
        reversed
      />
    </motion.div>
  );
};

export default SummaryDisplaySection;
