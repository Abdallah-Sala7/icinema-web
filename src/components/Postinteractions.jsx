import React from "react";
import Squarebutton from "./Squarebutton";

import { comment, like, share } from "../assets";
function Postinteractions(props) {
  return (
    <div className="w-full flex gap-2 justify-between">
      <div className="flex items-center">
        <Squarebutton logo={<img src={like} className="w-5 h-5 object-contain" alt="like" />} />
        <h1 className="dark:text-white text-sm">
          {props.likes} likes
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <Squarebutton logo={<img src={comment} className="w-5 h-5 object-contain" alt="comment" />} />
        <h1 className="dark:text-white text-sm">
          {props.comments} comments
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <Squarebutton logo={<img src={share} className="w-5 h-5 object-contain" alt="share" />} />
        <h1 className="dark:text-white text-sm">
          {props.shares} shares
        </h1>
      </div>
    </div>
  );
}

export default Postinteractions;
