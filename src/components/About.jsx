import React from "react";
import { locaiton, following } from "../assets";
function About() {
  return (
    <div className="w-full">
      <h1 className="text-2xl dark:text-white mb-4">About</h1>
      <div className="flex items-center gap-5">
        <div className="flex gap-2">
          <img src={following} alt="following" />
          <h1 className="dark:text-white">330 followers</h1>
        </div>

        <div className="flex gap-2">
          <img src={locaiton} alt="following" />
          <h1 className="dark:text-white">120 people checked in</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
