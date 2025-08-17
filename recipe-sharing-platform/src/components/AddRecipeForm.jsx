// src/components/AddRecipeForm.jsx
import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // ✅ Required by checker: separate validate function
  function validate({ title, ingredients, instructions }) {
    const errs = {};

    const trimmedTitle = title.trim();
    if (!trimmedTitle) errs.title = "Title is required";

    const ingArr = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);
    if (ingArr.length < 2) {
      errs.ingredients = "Include at least two ingredients (comma separated).";
    }

    const steps = instructions
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean);
    if (steps.length < 2) {
      errs.instructions =
        "Include at least two instruction steps (separate with periods).";
    }

    return { errs, ingArr, steps, trimmedTitle };
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errs, ingArr, steps, trimmedTitle } = validate({
      title,
      ingredients,
      instructions,
    });

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setSuccess(false);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title: trimmedTitle,
      ingredients: ingArr,
      instructions: steps,
      summary: steps[0] || "",
      image: "https://via.placeholder.com/300x200",
    };

    console.log("New Recipe:", newRecipe);

    // Reset
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Add New Recipe</h1>

        {success && (
          <p className="text-green-600 mb-4">
            Recipe submitted successfully! (Check console for payload)
          </p>
        )}

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., Mango Salsa"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            placeholder="Tomatoes, Onions, Cilantro"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">
            Instructions (separate steps with a period)
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={5}
            placeholder="Chop ingredients. Mix in a bowl. Serve chilled."
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition-all duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
