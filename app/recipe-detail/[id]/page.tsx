"use client";
import { getRecipes } from "@/app/api/recipe";
import Loading from "@/app/components/Loading";
import { RecipeProps } from "@/app/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const [recipeData, setRecipeData] = useState<RecipeProps>();
  const [showLoading, setShowLoading] = useState(false);
  const [ingreAndMeasure, setIngreAndMeasure] = useState([
    { ingredient: null, measure: null },
  ]);
  const params = useParams();

  useEffect(() => {
    setShowLoading(true);
    const fetchRecipesData = async () => {
      if (params) {
        const getRecipesData = await getRecipes(params.id as string);
        setRecipeData(getRecipesData.meals[0]);
        const ingredients = Object.keys(getRecipesData.meals[0])
          .filter(
            (key) =>
              key.startsWith("strIngredient") &&
              getRecipesData.meals[0][key].trim() !== ""
          )
          .map((key) => ({
            ingredient: getRecipesData.meals[0][key],
            measure:
              getRecipesData.meals[0][
                key.replace("strIngredient", "strMeasure")
              ],
          }));
        setIngreAndMeasure(ingredients);
        setShowLoading(false);
      }
    };
    fetchRecipesData();
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="mt-48 padding-x padding-y max-width">
        <div className="rounded-xl shadow-lg shadow-orange-200 bg-orange-50 p-8 flex flex-row max-md:flex-col">
          <div className="mx-auto my-auto w-[50%] max-md:w-[100%]">
            <div className="transition-all duration-500 hover:scale-110">
              <img
                src={recipeData ? recipeData.strMealThumb : ""}
                alt=""
                className="rounded-3xl mx-auto w-[50%]"
              />
            </div>
          </div>

          <div className="w-[50%] max-md:w-[100%] max-md:mt-8">
            <p className="pb-4 text-4xl border-b-black border-b-2">
              {recipeData ? recipeData.strMeal : null}
            </p>
            <p className="mt-4 italic">Ingredients:</p>
            <ul className="mt-2 ml-4 p-0 list-disc">
              {ingreAndMeasure
                ? ingreAndMeasure.map((data, key) => {
                    return (
                      <li key={key} className="size">
                        {data.measure} {data.ingredient}
                      </li>
                    );
                  })
                : null}
            </ul>
            <p className="mt-8 italic">Instructions:</p>
            <div className="mt-2 text-base">
              {recipeData ? recipeData.strInstructions : null}
            </div>
          </div>
        </div>
      </div>
      <Loading isShowProps={showLoading} />
    </main>
  );
};

export default RecipeDetail;