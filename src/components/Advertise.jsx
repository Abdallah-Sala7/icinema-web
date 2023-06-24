import React from "react";

function Advertise(props) {
  return (
    <div className="w-full p-4 rounded-2xl shadow-md dark:shadow-darkShadow">
      <div className="w-full aspect-square mb-4 rounded-xl border border-primary overflow-hidden">
        <img
          src={props.src}
          alt="shalaby"
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
      </div>

      <p className="text-light font-light text-center rounded-xl py-3 px-4 shadow-md dark:shadow-darkShadow">
        Galaxy cinema added 9D experience, try it to enjoy more
      </p>
    </div>
  );
}

export default Advertise;
