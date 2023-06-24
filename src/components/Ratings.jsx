import React from "react";
import { stars } from "../assets";
import Numberedprogress from "./Numberedprogress";

function Ratings() {
  return (
    <>
      <div className="border border-gray rounded-xl flex flex-wrap px-2 py-4 dark:bg-black">
        <div className="w-full flex flex-col justify-around items-center">
          <h1 className="dark:text-white mt-2 mb-2">Average Rating</h1>
          <h2 className="text-3xl text-primary mt-2 mb-2">4.5</h2>

          <img src={stars} alt="rating" className="w-44" />
          <h1 className="dark:text-white mt-2">200 ratings</h1>
        </div>

        <div className="w-full flex flex-col items-center">
          <Numberedprogress stars="5" percent="70%" wpercent="w-[70%]" />
          <Numberedprogress stars="4" percent="20%" wpercent="w-[20%]" />
          <Numberedprogress stars="3" percent="10%" wpercent="w-[10%]" />
          <Numberedprogress stars="2" percent="0%" wpercent="w-[0%]" />
          <Numberedprogress stars="1" percent="0%" wpercent="w-[0%]" />
        </div>
      </div>
    </>
  );
}

export default Ratings;
