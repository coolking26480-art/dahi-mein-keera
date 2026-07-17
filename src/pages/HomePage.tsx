import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FloatingDecoration from "../components/ui/FloatingDecoration";

import star1 from "../assets/decorations/star-1.png";
import star2 from "../assets/decorations/star-2.png";
import star3 from "../assets/decorations/star-3.png";

import sparkle1 from "../assets/decorations/sparkle-1.png";
import sparkle2 from "../assets/decorations/sparkle-2.png";
import sparkle3 from "../assets/decorations/sparkle-3.png";
import sparkle4 from "../assets/decorations/sparkle-4.png";

import cucumber1 from "../assets/decorations/cucumber-1.png";
import cucumber2 from "../assets/decorations/cucumber-2.png";
import cucumber3 from "../assets/decorations/cucumber-3.png";
import cucumber4 from "../assets/decorations/cucumber-4.png";

import olives1 from "../assets/decorations/olives-1.png";
import olives2 from "../assets/decorations/olives-2.png";
import olives3 from "../assets/decorations/olives-3.png";
import olives4 from "../assets/decorations/olives-4.png";

import garlic1 from "../assets/decorations/garlic-1.png";
import garlic2 from "../assets/decorations/garlic-2.png";
import garlic3 from "../assets/decorations/garlic-3.png";

import dill1 from "../assets/decorations/dill-1.png";

import cilantro1 from "../assets/decorations/cilantro-1.png";
import cilantro2 from "../assets/decorations/cilantro-2.png";

import greens1 from "../assets/decorations/greens-1.png";

import "../styles/home.css";

const decorations = [
  { src: star1, top: "8%", left: "10%", size: 110, rotation: 0, strength: 55 },
  { src: star2, top: "18%", left: "82%", size: 90, rotation: 8, strength: 50 },
  { src: star3, top: "78%", left: "82%", size: 70, rotation: -8, strength: 45 },

  { src: sparkle1, top: "26%", left: "28%", size: 32, strength: 30 },
  { src: sparkle2, top: "20%", left: "60%", size: 44, strength: 34 },
  { src: sparkle3, top: "68%", left: "18%", size: 42, strength: 34 },
  { src: sparkle4, top: "82%", left: "70%", size: 30, strength: 30 },

  { src: cucumber1, top: "55%", left: "4%", size: 140, rotation: -8, strength: 18 },
  { src: cucumber2, top: "58%", left: "76%", size: 130, rotation: 8, strength: 18 },
  { src: cucumber3, top: "12%", left: "2%", size: 90, rotation: -12, strength: 16 },
  { src: cucumber4, top: "10%", left: "70%", size: 82, rotation: 8, strength: 16 },

  { src: olives1, top: "80%", left: "18%", size: 70, rotation: 8, strength: 30 },
  { src: olives2, top: "76%", left: "70%", size: 72, rotation: -8, strength: 30 },
  { src: olives3, top: "8%", left: "90%", size: 70, rotation: 15, strength: 32 },
  { src: olives4, top: "45%", left: "90%", size: 74, rotation: -10, strength: 32 },

  { src: garlic1, top: "68%", left: "2%", size: 95, rotation: -12, strength: 22 },
  { src: garlic2, top: "12%", left: "60%", size: 82, rotation: 10, strength: 22 },
  { src: garlic3, top: "6%", left: "40%", size: 68, rotation: 0, strength: 18 },

  { src: dill1, top: "82%", left: "40%", size: 145, rotation: -12, strength: 60 },

  { src: cilantro1, top: "38%", left: "2%", size: 82, rotation: -18, strength: 42 },
  { src: cilantro2, top: "38%", left: "92%", size: 82, rotation: 18, strength: 42 },

  { src: greens1, top: "2%", left: "84%", size: 80, rotation: 10, strength: 24 }
];

export default function HomePage() {
  const navigate = useNavigate();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / (rect.width / 2),
      y: (e.clientY - rect.top - rect.height / 2) / (rect.height / 2),
    });
  }

  return (
    <main className="home" onMouseMove={handleMouseMove}>

      {decorations.map((item, index) => (
        <FloatingDecoration
          key={index}
          src={item.src}
          alt=""
          top={item.top}
          left={item.left}
          size={item.size}
          rotation={item.rotation}
          xOffset={mouse.x * item.strength}
          yOffset={mouse.y * item.strength}
        />
      ))}

      <div className="hero">

        <h1 className="heroTitle">
          Dahi Mein
          <br />
          Keera
        </h1>

        <h2 className="heroSubtitle">
          TZATZIKI 101
        </h2>

        <button
          className="ctaButton"
          onClick={() => navigate("/recipe")}
        >
          maatchAAAAA
        </button>

      </div>

    </main>
  );
}