import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";

const LayoutButton = ({ className }: { className?: string }) => {
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Durian",
    "Elderberry",
    "Fig",
    "Grapefruit",
    "Hazelnut",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Ugli fruit",
    "Watermelon",
    "Xuxa",
    "Yuzu",
    "Zucchini",
  ];

  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((prevs) => {
      if (prevs + 1 >= items.length) {
        return 0;
      } else {
        return prevs + 1;
      }
    });
  };

  return (
    <motion.div
      className={clsx(
        "border-1 h-min w-min cursor-pointer select-none rounded-xl border bg-white p-2",
        `${className}`,
      )}
      onClick={next}
      layout
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="whitespace-nowrap"
        key={index}
      >
        {items[index]}
      </motion.span>
    </motion.div>
  );
};

export default LayoutButton;
