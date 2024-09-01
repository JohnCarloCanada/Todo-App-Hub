import React from "react";
import DarkBtnLogo from "../../assets/images/icon-moon.svg";
import LightBtnLogo from "../../assets/images/icon-sun.svg";

import useTailwindDarkMode from "../../hooks/useTailwindDarkMode";

const Header = () => {
  const [theme, toggleDarkMode] = useTailwindDarkMode();
  return (
    <section className="w-full flex justify-between items-center mb-4">
      <span className="text-3xl sm:text-4xl tracking-widest text-l-very-light-gray font-josefin font-bold josefin-sans-custom ">
        TODO
      </span>
      {theme === "light" ? (
        <img
          className="cursor-pointer"
          src={DarkBtnLogo}
          alt="Dark Button Logo"
          onClick={toggleDarkMode}
        />
      ) : (
        <img
          className="cursor-pointer"
          src={LightBtnLogo}
          alt="Light Button Logo"
          onClick={toggleDarkMode}
        />
      )}
    </section>
  );
};

export default Header;
