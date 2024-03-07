import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <>
      <div className="absolute bottom-0 flex w-full justify-center gap-8 p-8">
        <NavButton name="template" />
        <NavButton name="home" />
        <NavButton name="test" />
      </div>
    </>
  );
};

const NavButton = ({ name }: { name: string }) => {
  return (
    <Link to={`${name}`}>
      <motion.div whileHover="hover">
        <motion.div
          className="z-10 border-4 border-background bg-white p-4 px-8 font-bold text-black"
          variants={{ hover: { y: 10, borderColor: "var(--white)" } }}
        >
          <code>{name}</code>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Navigation;
