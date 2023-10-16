"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import SearchIcon from "@/public/assets/magnifying-glass.svg";
import ModelIcon from "@/public/assets/chef-hat.png";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-12 z-10 ${otherClasses}`}>
    <Image
      src={SearchIcon}
      alt="magnifying-glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ onDataReceived }: any) => {
  const [model, setModel] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    onDataReceived(model.toLowerCase());
  };

  const getRecipe = (e: any) => {
    setModel(e.target.value);
    if (e.target.value === "") {
      onDataReceived("");
    }
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Image
          src={ModelIcon}
          width={30}
          height={30}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="recipe-model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => getRecipe(e)}
          placeholder="Any recipe..."
          className="searchbar__input"
        />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
