import React from "react";

import PostTop from "./PostTop";
import Postimg from "./Postimg";
import Postinteractions from "./Postinteractions";

function Post(props) {
  return (
    <div>
      <div className="w-full border dark:bg-black my-5 rounded-xl p-4">
        <PostTop
          name={props.profilename}
          src={props.profileimage}
          time={props.time}
        />

        <h1 className='dark:text-white my-4'>{props.desc}</h1>

        <Postimg src={props.postimg} alt={props.postalt} />

        <Postinteractions
          likes={props.likesno}
          comments={props.commentsno}
          shares={props.sharesno}
        />
      </div>
    </div>
  );
}

export default Post;
