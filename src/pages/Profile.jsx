import React, { useState } from "react";
import Controltop from "../components/Controltop";
import Profilemovies from "../components/Profilemovies";
import ProfileAbout from "../components/ProfileAbout";
function Profile() {
  const [navTap, setNavTap] = useState("Movies");

  const handleTap = (tap) => {
    setNavTap(tap);
  };

  return (
    <div className="dark:text-gray">
      <Controltop
        handleTap={handleTap}
        entry="movies_about"
        left="Movies"
        right="About"
      />

      {navTap === "Movies" ? <Profilemovies /> : <ProfileAbout />}
    </div>
  );
}

export default Profile;
