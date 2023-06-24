import React from "react";
import Avatar from "./Avatar";
import Edit from "./Edit";

function PostTop(props) {
  return (
    <div>
      <div className="flex items-center gap-4 relative">
      <img className="rounded-full w-14 h-14" src={props.src} alt="Rounded avatar"/>

        <div>
          <h1 className="capitalize dark:text-white">{props.name}</h1>
          <h2 className="text-gray">{props.time}</h2>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 ">
          {" "}
          <Edit />
        </div>
      </div>
    </div>
  );
}

export default PostTop;
