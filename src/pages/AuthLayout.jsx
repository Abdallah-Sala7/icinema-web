import hero from "../assets/images/hero.svg";

import { Routes, Route, Outlet } from "react-router-dom";

import SwitchBtns from "../components/SwitchBtns";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Logo from "../components/Logo";

function AuthLayout() {
  return (
    <section className="bg-white dark:bg-dark">
      <div className="flex flex-auto">
        <div className="w-1/2 pl-16 pr-24 pt-16 hidden flex-col items-center lg:flex">
          <Logo />

          <p className="text-base text-center font-light mb-8 text-dark dark:text-white">
            Register to control your cinema account and follow everything
            related to it
          </p>

          <img src={hero} alt="login" className="w-120 object-contain" />
        </div>

        <div className="w-full min-h-screen lg:w-1/2 lg:pl-28">
          <div className="bg-primary p-1.5 h-full">
            <div className="relative h-full px-4 pt-16 pb-10 bg-lightGray rounded-xl dark:bg-darkGray md:px-16">
              <SwitchBtns />

              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
