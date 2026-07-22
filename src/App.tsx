import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import CapturePage from "./pages/CapturePage";

export default function App() {

  const location = useLocation();
const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

useEffect(() => {

  function handleResize() {

    setIsDesktop(window.innerWidth > 900);

  }

  window.addEventListener("resize", handleResize);

  
  return () => window.removeEventListener("resize", handleResize);

}, []);

if (isDesktop) {

  return (

    <main
      style={{
        minHeight: "100vh",
        background: "#F7F4EA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px"
      }}
    >

      <div
        style={{
          textAlign: "center",
          maxWidth: "480px"
        }}
      >

        <h1
          style={{
            fontFamily: "Rubik Bubbles",
            color: "#20331D",
            fontSize: "3rem",
            marginBottom: "20px"
          }}
        >
          TZATZIKI 101
        </h1>

        <div
          style={{
            fontSize: "4rem",
            marginBottom: "24px"
          }}
        >
          📱
        </div>

        <h2
          style={{
            color: "#20331D",
            marginBottom: "16px"
          }}
        >
          Designed for mobile
        </h2>

        <p
          style={{
            color: "#50624B",
            lineHeight: 1.7
          }}
        >
          This experience is designed for phones.
          <br />
          Please open this website on your mobile device for the best experience.
        </p>

      </div>

    </main>

  );

}

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