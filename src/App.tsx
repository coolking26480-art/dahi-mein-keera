import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import CapturePage from "./pages/CapturePage";

export default function App() {

  const location = useLocation();

  return (

    <AnimatePresence mode="wait">

      <Routes
        location={location}
        key={location.pathname}
      >

        <Route
          path="/"
          element={
            <motion.div
              initial={{  opacity: 0,  y: 20}}
              animate={{  opacity: 1, y: 0 }}
              exit={{  opacity: 0,  y: -20 }}
              transition={{ duration: .4, ease: "easeOut" }}
            >
              <HomePage/>
            </motion.div>
          }
        />

        <Route
          path="/recipe"
          element={
            <motion.div
              initial={{  opacity: 0,  y: 20}}
              animate={{  opacity: 1, y: 0 }}
              exit={{  opacity: 0,  y: -20 }}
              transition={{ duration: .4, ease: "easeOut" }}
            >
              <RecipePage/>
            </motion.div>
          }
        />

        <Route
          path="/capture"
          element={
            <motion.div
              initial={{  opacity: 0,  y: 20}}
              animate={{  opacity: 1, y: 0 }}
              exit={{  opacity: 0,  y: -20 }}
              transition={{ duration: .4, ease: "easeOut" }}
            >
              <CapturePage/>
            </motion.div>
          }
        />

      </Routes>

    </AnimatePresence>

  );

}