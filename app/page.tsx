import { getRecipes } from "@/app/api/recipe";
import HomePage from "./components/HomePage";

export default async function AppData() {
  const getRecipesData = await getRecipes("");
  const allRecipes = getRecipesData ? getRecipesData.meals : null;

  return (
    <main className="overflow-hidden">
      <HomePage allRecipes={allRecipes} />
    </main>
  );
}
