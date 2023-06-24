import React, { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";
import ShowingInfo from "../components/ShowingInfo";
import ProfileHalls from "../components/ProfileHalls";
import { hallTowChairs } from "../components/txt";
import HallChairs from "../components/HallChairs";
import SelectOptions from "../components/SelectBox";
import { useSelector } from "react-redux";
import { chairIcon } from "../assets";

const BookMovie = () => {
  const [activeTab, setActiveTab] = useState("hall 1");
  const [halls, setHalls] = useState({});
  const [selectedChairs, setSelectedChairs] = useState([]);

  const [chairsType, setChairsType] = useState({
    premium: [],
    normal: [],
  });

  const { cinemaHalls } = useSelector((state) => state.app);

  const getActiveHall = (value) => {
    setActiveTab(value);
  };

  cinemaHalls.forEach((hall) => {
    halls[hall.hallName] = hall.hallName;
  });

  const getSelectedChairs = (value) => {
    if (
      chairsType.premium.includes(value) ||
      chairsType.normal.includes(value)
    ) {
      setChairsType({
        premium: chairsType.premium.filter((item) => item !== value),
        normal: chairsType.normal.filter((item) => item !== value),
      });
    } else {
      if (value.status === "vip") {
        setChairsType({
          ...chairsType,
          premium: [...chairsType.premium, value],
        });
      } else {
        setChairsType({
          ...chairsType,
          normal: [...chairsType.normal, value],
        });
      }
    }
  };

  return (
    <>
      <h1 className="mb-5 text-xl dark:text-white font-thin md:text-2xl">
        Book: Black Adam
      </h1>

      <div className="mb-5">
        <div className="flex flex-col gap-4 justify-center xl:flex-row">
          <Moviecard
            releaseDate={"28/12/2022"}
            starring={"mohamed tharwat"}
            title={"Nabil elgameel Dr tagmeel"}
            img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
            features={["Comedy", "105min", "Egyptian", "Arabic"]}
          />

          <ShowingInfo />
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        {cinemaHalls.map(
          (hall, index) =>
            hall.hallName === activeTab && (
              <HallChairs
                key={index}
                hallInChairs={hall.seats}
                clicked={getSelectedChairs}
              />
            )
        )}

        <div className="flex-1 bg-white shadow-md dark:shadow-darkShadow rounded-xl p-3 dark:bg-dark md:p-5">
          <div className="pb-5 mb-5 border-b border-gray">
            <div className="pb-5 mb-5 border-b border-gray">
              <SelectOptions getSelect={getActiveHall} data={halls} />
            </div>

            <h2 className="text-lg font-thin mb-4 text-white">Your seats :</h2>

            <div className="flex justify-between mb-3">
              <div className="flex gap-2 items-center">
                <img
                  src={chairIcon}
                  alt={"chair icon"}
                  className="w-6 h-6 flex-shrink-0 primary-filter"
                />

                <p className="text-white font-thin">
                  premium : {chairsType.premium.length}
                </p>
              </div>

              <p className="text-white font-thin">150 EGP</p>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  src={chairIcon}
                  alt={"chair icon"}
                  className="w-6 h-6 flex-shrink-0 invert"
                />

                <p className="text-white font-thin">
                  ordinary : {chairsType.normal.length}
                </p>
              </div>

              <p className="text-white font-thin">90 EGP</p>
            </div>
          </div>

          <div className="pb-5 mb-5 border-b border-gray">
            <h2 className="font-thin text-white flex justify-between">
              Total price :
              <span>
                {chairsType.normal.length * 90 +
                  chairsType.premium.length * 150}{" "}
                EGP
              </span>
            </h2>
          </div>

          <div className="flex">
            <button className="block text-center w-full font-thin capitalize py-2 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-md hover:text-primary hover:bg-transparent">
              save booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookMovie;
