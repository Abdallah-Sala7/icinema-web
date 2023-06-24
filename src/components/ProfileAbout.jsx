import React from "react";
import {
  locationInputIcon,
  mailIcon,
  nameIcon,
  phoneiconIcon,
  profileImg,
} from "../assets";
import ProfileHalls from "./ProfileHalls";

const ProfileAbout = () => {
      const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <div className="flex items-center justify-center flex-wrap gap-5 mb-8">
        <div className="relative w-36 h-36 rounded-full overflow-hidden md:w-44 md:h-44">
          <img
            src={userData.cover}
            alt="porf"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-72 flex-auto">
          <label
            htmlFor="cinemaName"
            className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
          >
            Cinema name
          </label>
          <div className="relative mb-5">
            <input
              type="text"
              id="cinemaName"
              defaultValue={userData.name}
              className="w-full h-full py-3 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Cinema name"
            />

            <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
              <img
                src={nameIcon}
                alt="edit icon"
                className="w-5 h-5 object-contain sm:w-6 sm:h-6 invert dark:invert-0"
              />
            </a>
          </div>

          <label
            htmlFor="email"
            className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
          >
            E-mail
          </label>

          <div className="relative">
            <input
              type="email"
              id="email"
              defaultValue={userData.email}
              className="w-full h-full py-3 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="E-mail"
            />

            <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
              <img
                src={mailIcon}
                alt="edit icon"
                className="w-5 h-5 object-contain sm:w-6 sm:h-6 invert dark:invert-0"
              />
            </a>
          </div>
        </div>

        <div className="w-72 flex-auto">
          <label
            htmlFor="Location"
            className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
          >
            Location
          </label>
          <div className="relative mb-5">
            <input
              type="text"
              id="Location"
              defaultValue={userData.address}
              className="w-full h-full py-3 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Location"
            />

            <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
              <img
                src={locationInputIcon}
                alt="edit icon"
                className="w-5 h-5 object-contain sm:w-6 sm:h-6 invert dark:invert-0"
              />
            </a>
          </div>

          <label
            htmlFor="PhoneNumber"
            className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
          >
            Phone number
          </label>

          <div className="relative">
            <input
              type="text"
              id="PhoneNumber"
              defaultValue={userData.phone}
              className="w-full h-full py-3 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Phone number"
            />

            <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
              <img
                src={phoneiconIcon}
                alt="edit icon"
                className="w-5 h-5 object-contain sm:w-6 sm:h-6 invert dark:invert-0"
              />
            </a>
          </div>
        </div>
      </div>

      <ProfileHalls />
    </div>
  );
};

export default ProfileAbout;
