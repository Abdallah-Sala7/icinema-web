import React from "react";
import Controltop from "../components/Controltop";
import Post from "../components/Post";
import Createpost from "../components/Createpost";
import Ratings from "../components/Ratings";

import About from "../components/About";

const Timeline = () => {
  return (
    <>
      <div>
        <Controltop entry="movies_about" left="Movies" right="Timeline" />
        {/* ----------------parent-------------- */}
        <div className="w-full flex gap-10 flex-wrap">
          {/* ----------------child1------------------- */}
          <div className="flex-1">
            {/* ---------------creatpost component---------------- */}
            <Createpost />
            {/* --------------post component-------------- */}
            <Post
              profilename="galaxy cinema"
              time="10:18 PM"
              desc="Are you ready ! … Avatar is counting Down !!! Tell your friends and come to watch it together in its premiere "
              profileimage="https://media0018.elcinema.com/uploads/_310x310_4d5ef21e7c23c2b236dd2a11e40fa6bf0f1eed989d7782b9bbbd69b97e633996.jpg"
              postimg="https://hips.hearstapps.com/hmg-prod/images/movies-for-kids-2021-luca-1624279846.jpeg"
              postalt="avatar"
              likesno="1K"
              commentsno="53k"
              sharesno="40"
            />
            <Post
              profilename="galaxy cinema"
              time="10:18 PM"
              desc="Are you ready ! … Avatar is counting Down !!! Tell your friends and come to watch it together in its premiere "
              profileimage="https://media0018.elcinema.com/uploads/_310x310_4d5ef21e7c23c2b236dd2a11e40fa6bf0f1eed989d7782b9bbbd69b97e633996.jpg"
              postimg="https://hbomax-images.warnermediacdn.com/2022-11/black-adam-hero_2.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=1200"
              postalt="avatar"
              likesno="1K"
              commentsno="53k"
              sharesno="40"
            />
          </div>
          {/* ---------------child2--------------------- */}
          <div className="flex-1">
            {/* ratings */}
            <About />

            <h1 className="text-2xl dark:text-white my-4"> Reviews</h1>

            <div>
              <Ratings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
