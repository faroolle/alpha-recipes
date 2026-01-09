"use client";

import { useState } from "react";
import TitleDesc from "./TitleDesc";
import RecipeCard from "./RecipeCard";
import recipes from "../data/recipes";

export default function RecipesSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleRecipes = recipes.slice(0, visibleCount);

  function handleLoadMore() {
    setVisibleCount((prev) => prev + 3);
  }

  return (
    <section className="py-16">
      <TitleDesc
        title="Recipes"
        description="Hand-picked recipes crafted for simplicity and taste."
      />

      {/* Cards container */}
      <div className="max-w-6xl mx-auto grid gap-[30px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visibleRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Load more button */}
      {visibleCount < recipes.length && (
        <div className="mt-[60px] flex justify-center">
          <button
            onClick={handleLoadMore}
            className="py-3 px-8 bg-primary hover:bg-primaryHover text-whiteCustom font-semibold rounded-btn transition-colors"
          >
            More recipes
          </button>
        </div>
      )}
    </section>
  );
}
