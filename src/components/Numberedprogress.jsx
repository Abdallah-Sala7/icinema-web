import React from "react";
import Progressbar from "./Progressbar";
function Numberedprogress(props) {
  return (
    <div className="w-full">
      <div className="flex flex-row   w-full justify-around">
        <h1 className="dark:text-white mt-3">{props.stars} stars</h1>
        <Progressbar percent={props.wpercent} />
        <h1 className="dark:text-white mt-3">{props.percent}</h1>
      </div>
    </div>
  );
}

export default Numberedprogress;
