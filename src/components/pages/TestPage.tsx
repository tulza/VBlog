import BlogCard from "@components/BlogCard";
import { motion } from "framer-motion";
import { useState } from "react";

const TestPage = () => {
  const [Toggle, SetToggled] = useState(false);
  return (
    <div className="bg-yellow grid h-full w-full place-content-center bg-yellow-400 text-black">
      {/* card */}
      <div className="mb-4 flex gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <motion.div
        className="flex h-[30px] w-[60px] cursor-pointer rounded-full bg-white p-1 outline outline-1"
        onClick={() => SetToggled(!Toggle)}
        initial={{ justifyContent: "flex-start" }}
        animate={{ justifyContent: Toggle ? "flex-start" : "flex-end" }}
        transition={{ duration: 2 }}
        key={Toggle ? "On" : "off"}
        layout
      >
        <motion.div className="aspect-square h-full rounded-full bg-black " />
      </motion.div>
    </div>
  );
};

export default TestPage;
