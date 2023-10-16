"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "@/app/components/CustomButton";
import HeroImg from "@/public/assets/hero.png";

const HeroSection = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-48 padding-x">
        <h1 className="hero__title">Find and get a free recipe!</h1>

        <p className="hero__subtitle">
          Embark on a Culinary Journey of Irresistible Flavors and Culinary
          Discoveries: Your Gateway to Cooking Mastery and Gastronomic Bliss
        </p>

        <CustomButton
          title="Explore Recipes"
          containerStyles="bg-primary-orange text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          ``
          <Image src={HeroImg} alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default HeroSection;
