import React from "react";
import NewsCard from "../components/NewsCard";
import { motion } from "framer-motion";

const NewsSection = () => {
  return (
    <div className="bg-[#95c3ad8f]">
      <div className="py-10">
        {/* <!-- component --> */}
        <div className="flex flex-col">
          <div className="flex overflow-x-scroll  hide-scroll-bar">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-nowrap  "
            >
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
