import React from "react";
import { MainCard } from "../components";

const MainCardContainer = () => {
  return (
    <div className="absolute w-[min(600px,100%)] left-2/4 -top-40 -translate-x-2/4 px-4  josefin-sans-custom">
      <MainCard />
    </div>
  );
};

export default MainCardContainer;
