import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/MyRecipe.png";

const HeaderBar = () => {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-8 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <div className="border-2 border-solid rounded-full border-orange-500 p-3">
            <Image
              src={Logo}
              alt="logo"
              width={80}
              className="object-contain"
            />
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderBar;
