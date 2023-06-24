import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SwitchBtns = () => {

  return (
    <div className="flex justify-center gap-1 mb-7 top-32 left-0 overflow-x-clip lg:mb-0 lg:flex-col lg:-translate-x-full lg:absolute">
      <NavLink
        to={"/auth/login"}
        className={({ isActive }) =>
          `relative block w-32 py-2.5 font-light text-dark text-center rounded-lg
          lg:rounded-l-full lg:mb-5
          dark:text-white
          ${isActive ? "lg:activeBtn bg-primary" : "hover:text-primary"}`
        }
      >
        Sign in
      </NavLink>

      <NavLink
        to={"/auth/register"}
        className={({ isActive }) =>
          `relative block w-32 py-2.5 font-light text-dark text-center rounded-lg
          lg:rounded-l-full lg:mb-5
          dark:text-white
          ${isActive ? "lg:activeBtn bg-primary" : "hover:text-primary"}`
        }
      >
        Sign up
      </NavLink>
    </div>
  );
};

export default SwitchBtns;
