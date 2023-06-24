import { adminBokingImg, adminOwnerImg, adminProfileImg, adminTimelineImg } from "../assets";
import Controltop from "../components/Controltop";
import Createuser from "../components/Createuser";

function Admin() {
  return (
    <div>
      <Controltop entry="user" />

      <h1 className="my-5 font-thin text-dark dark:text-white sm:text-xl">
        You have several admins to control your system perfectly:
      </h1>

      <Createuser
        name="Owner"
        img={adminOwnerImg}
        value={"@mianadmin"}
        description="can control and view all the system content, and it's impossible for all sub admins"
      />

      <Createuser
        img={adminProfileImg}
        name="Cinema Profile"
        description="Can set location, add movies, photos of halls, place screen and seats of the cinema"
      />

      <Createuser
        img={adminBokingImg}
        name="Booking"
        description="Can see movies, so he can book tickets offline for clients and save booking details"
      />

      <Createuser
        img={adminTimelineImg}
        name="Timeline"
        description="Can add profile picture, add posts and reels , see clients interactions on the posts and reels"
      />
    </div>
  );
}

export default Admin;
