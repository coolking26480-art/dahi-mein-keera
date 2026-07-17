import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, X, Camera } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/recipe.css";

const ingredients = [
  { name: "Finely grated cucumber", quantity: "½ cup" },
  { name: "Slightly strained dahi", quantity: "1 cup" },
  { name: "Fresh lemon juice", quantity: "1 tbsp" },
  { name: "Jeera powder", quantity: "½ tsp" },
  { name: "Extra virgin olive oil", quantity: "½ tbsp" },
  { name: "Garlic, grated", quantity: "1½ cloves" },
  { name: "Salt", quantity: "1 dash" },
  { name: "Fresh coriander, chopped", quantity: "1 tbsp" },
  { name: "Dried parsley", quantity: "1½ tsp" },
];

const steps = [
  "/steps/1.png",
  "/steps/2.png",
  "/steps/3.png",
  "/steps/4.png",
  "/steps/5.png",
  "/steps/6.png",
  "/steps/7.png",
  "/steps/8.png",
];

export default function RecipePage() {

  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="recipePage">

    <header className="recipeHeader">

  <Link to="/" className="backButton">
    <ArrowLeft size={22} />
  </Link>

  <h1>TZATZIKI 101</h1>

  <div className="headerSpacer" />

</header>

<section className="ingredientsSection">

  <h2>Ingredients</h2>

  <div className="ingredientsBox">

    {ingredients.map((item, index) => (

      <label
        key={index}
        className="ingredientRow"
      >

        <div className="ingredientLeft">

          <input
            type="checkbox"
            className="ingredientCheck"
          />

          <span>{item.name}</span>

        </div>

        <span className="ingredientQty">

          {item.quantity}

        </span>

      </label>

    ))}

  </div>

</section>

<h2 className="recipeSectionTitle">

  How to Make It

</h2>

<section className="recipeGrid">

  {steps.map((image, index) => (

    <div
      key={index}
      className="recipeCard"
      onClick={() => setSelectedImage(image)}
    >

      <img
        src={image}
        alt={`Step ${index + 1}`}
      />

    </div>

  ))}

</section>

<button
  className="cameraButton"
  onClick={() => navigate("/capture")}
>
  <Camera size={22} />
  Take a Photo
</button>

<AnimatePresence>

  {selectedImage && (

    <motion.div
      className="lightbox"
      onClick={() => setSelectedImage(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.img
        src={selectedImage}
        className="lightboxImage"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: .9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: .9, opacity: 0 }}
      />

      <button
        className="closeButton"
        onClick={() => setSelectedImage(null)}
      >

        <X size={28} />

      </button>

    </motion.div>

  )}

</AnimatePresence>

</main>
  );
}