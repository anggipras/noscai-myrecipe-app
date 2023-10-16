import { getData } from "@/app/utils/fetch-config";

export const getRecipes = async (params: string) => {
  return await getData(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${params}`
  );
};
