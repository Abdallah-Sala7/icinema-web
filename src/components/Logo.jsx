import React from "react";
import logo from "../assets/images/logo.svg";
function Logo() {
  return (
    <div className="flex justify-center items-baseline mb-4">
      <img 
        src={logo} 
        alt="logo" 
        className="w-16 h-16 object-contain mr-3" 
      />

      <h1 className="text-5xl text-yellow-300 font-light">
        <span className="text-black dark:text-white">I</span>Cinema
      </h1>
    </div>
  );
}

export default Logo;
