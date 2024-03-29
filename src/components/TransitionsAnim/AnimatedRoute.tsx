import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "@pages/Home";
import TransitionAnimation from "./TransitionAnimation";
import ComponentTesting from "@pages/TestPage";
import PageNotFound from "@pages/PageNotFound";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <TransitionAnimation key={location.pathname}>
        <Routes location={location}>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<ComponentTesting />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </TransitionAnimation>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
