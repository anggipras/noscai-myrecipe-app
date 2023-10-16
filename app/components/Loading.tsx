import React from "react";
const Loading = ({ isShowProps }: any) => {
  return (
    <div
      className={`${
        isShowProps ? "flex" : "hidden"
      } fixed justify-center items-center inset-0 z-50 bg-black/80`}
    >
      <div className="bg-white p-8 w-fit rounded-2xl items-center justify-center flex flex-col">
        <span className="relative flex h-7 w-7">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-7 w-7 bg-orange-500"></span>
        </span>
        <p className="mt-4">Please Wait...</p>
      </div>
    </div>
  );
};

export default Loading;
