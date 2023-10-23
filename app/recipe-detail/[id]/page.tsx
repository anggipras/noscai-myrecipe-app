import { getRecipes } from "@/app/api/recipe";
import { RecipeProps } from "@/app/types";

const RecipeDetail = async ({ params }: { params: { id: string } }) => {
  const getRecipesData = await getRecipes(params.id);
  const recipeData: RecipeProps = getRecipesData.meals[0];
  const ingredients = Object.keys(getRecipesData.meals[0])
    .filter(
      (key) =>
        key.startsWith("strIngredient") &&
        getRecipesData.meals[0][key].trim() !== ""
    )
    .map((key) => ({
      ingredient: getRecipesData.meals[0][key],
      measure:
        getRecipesData.meals[0][key.replace("strIngredient", "strMeasure")],
    }));
  let ingreAndMeasure = ingredients;

  return (
    <main className="overflow-hidden">
      <div className="mt-48 padding-x padding-y max-width">
        <div className="rounded-xl shadow-lg shadow-orange-200 bg-orange-50 p-8 flex flex-row max-md:flex-col">
          <div className="mx-auto my-auto w-[50%] max-md:w-[100%]">
            <div className="transition-all duration-500 hover:scale-110">
              <img
                src={recipeData.strMealThumb}
                alt=""
                className="rounded-3xl mx-auto w-[50%]"
              />
            </div>
          </div>

          <div className="w-[50%] max-md:w-[100%] max-md:mt-8">
            <p className="pb-4 text-4xl border-b-black border-b-2">
              {recipeData.strMeal}
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
            <div className="mt-2 text-base">{recipeData.strInstructions}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetail;