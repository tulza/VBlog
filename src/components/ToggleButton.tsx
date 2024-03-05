import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

const ToggleButton = () => {
  const [isOn, SetIsOn] = useState(false);
  const toggleSwitch = () => SetIsOn(!isOn);

  return (
    <motion.div
      className={clsx(
        "flex h-[30px] w-[60px] cursor-pointer rounded-full bg-white p-1 outline outline-1",
        `${isOn ? "justify-end" : "justify-start"}`,
      )}
      onClick={toggleSwitch}
    >
      <motion.div
        className="aspect-square h-full rounded-full bg-black"
        layout
      />
    </motion.div>
  );
};

export default ToggleButton;
