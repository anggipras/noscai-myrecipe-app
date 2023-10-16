"use client";
import { RecipeProps } from "@/app/types";
import { getRecipes } from "@/app/api/recipe";
import { HeroSection, RecipeCard, SearchBar } from "@/app/components";
import { useState } from "react";

const HomePage = (allRecipes: any) => {
  const [recipeData, setRecipeData] = useState(allRecipes.allRecipes);

  const handleDataReceived = async (params: string) => {
    const incomingData = await getRecipes(params);
    setRecipeData(incomingData ? incomingData.meals : []);
  };

  return (
    <>
      <HeroSection />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Recipes List</h1>
          <p>Explore out recipes you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar onDataReceived={handleDataReceived} />
        </div>

        {recipeData ? (
          <section>
            <div className="home__recipes-wrapper">
              {recipeData?.map((recipeData: RecipeProps, idx: number) => (
                <RecipeCard key={idx} recipe={recipeData} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no results for recipes
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
