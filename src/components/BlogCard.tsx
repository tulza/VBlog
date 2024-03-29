import { motion } from "framer-motion";
import React from "react";

const BlogCard = () => {
  return (
    <motion.div
      className="flex h-[450px] w-[300px] cursor-pointer select-none flex-col gap-4 rounded-xl border border-black bg-white p-6"
      initial={{ boxShadow: "#000 5px 5px" }}
      whileHover={{ boxShadow: "#000 20px 20px" }}
    >
      <div className="h-[175px] w-full rounded-lg border border-black bg-white"></div>
      {/* tags */}
      <div className="flex h-[30px] w-full items-center gap-1">
        <Tag Title="Learning" />
        <Tag Title="Gaming" />
      </div>
      <div className="text-sm font-bold text-zinc-500">
        Published 21 Dec 2023
      </div>
      <div className="text-xl font-bold ">HTML & CSS</div>
      <div className="text-sm font-bold text-zinc-500">
        HTML & CSS is a fundamental skill for building web pages and web apps,
        vital for creating visually appealing and functional websites.
      </div>
    </motion.div>
  );
};

const Tag = ({ Title }: { Title: string }) => {
  return (
    <div className="w-min rounded-md bg-yellow-400 p-1 px-2 font-bold tracking-tighter text-black">
      {Title}
    </div>
  );
};

export default BlogCard;
