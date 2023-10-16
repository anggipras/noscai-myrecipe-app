"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RecipeProps } from "@/app/types";
import Image from "next/image";
import { CustomButton, Loading } from "@/app/components";
import RightArrow from "@/public/assets/right-arrow.svg";

interface RecipeCardProps {
  recipe: RecipeProps;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { strMeal, strMealThumb, strCategory, strArea } = recipe;
  const [showLoading, setShowLoading] = useState(false);
  const router = useRouter();
  const goToDetail = (params: string) => {
    setShowLoading(true);
    router.push(`/recipe-detail/${params}`);
  };
  return (
    <div className="recipe-card group" onClick={() => goToDetail(strMeal)}>
      <div className="recipe-card__content">
        <h2 className="recipe-card__content-title">{strMeal}</h2>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={strMealThumb || ""}
          alt="recipe-model"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="recipe-card__icon">
            <p className="recipe-card__icon-title-text">Category</p>
            <p className="recipe-card__icon-text">{strCategory}</p>
          </div>
          <div className="recipe-card__icon">
            <p className="recipe-card__icon-title-text">Area</p>
            <p className="recipe-card__icon-text">{strArea}</p>
          </div>
        </div>

        <div className="recipe-card__btn-container">
          <CustomButton
            title="View Detail"
            containerStyles="w-full py-[16px] rounded-full bg-black"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon={RightArrow}
            handleClick={() => goToDetail(strMeal)}
          />
        </div>
      </div>
      <Loading isShowProps={showLoading} />
    </div>
  );
};

export default RecipeCard;
