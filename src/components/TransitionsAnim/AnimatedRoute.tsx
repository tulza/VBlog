import { AnimatePresence } from "framer-motion";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Template from "@pages/Template";
import TransitionAnimation from "./TransitionAnimation";
import TestPage from "@pages/TestPage";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <TransitionAnimation key={location.pathname}>
        <Routes location={location}>
          <Route path="/template" element={<Template />} />
          <Route path="/card" element={<TestPage />} />
          <Route path="*" element={<Navigate to="/template" />} />
        </Routes>
      </TransitionAnimation>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
