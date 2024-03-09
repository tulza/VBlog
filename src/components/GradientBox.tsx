import { motion } from "framer-motion";
import React from "react";

const GradientBox = () => {
  return (
    <motion.div
      className="inset-28 h-[400px] w-[300px] overflow-hidden border-4"
      initial={{
        borderImage: "",
      }}
      animate={{
        borderImage: "",
      }}
      transition={{ ease: "linear", duration: 10, repeat: Infinity }}
    >
      <div className="h-full w-full rounded-3xl bg-black"></div>
    </motion.div>
  );
};

export default GradientBox;
