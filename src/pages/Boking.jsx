import Moviecard from '../components/Moviecard'
import ShowingInfo from '../components/ShowingInfo'
import Controltop from '../components/Controltop'
import { useState } from 'react'
import BokingTable from '../components/BokingTable'
import { searchIcon } from '../assets'

const Boking = () => {
  const [activeTap, setActiveTap] = useState("");

  const handleTap = (tap) =>{
    setActiveTap(tap)
    console.log(tap);
  }
  

  return (
    <div>
      <Controltop
        handleTap={handleTap}
        entry="movies_about"
        left="Movies"
        right="History"
      />
      {activeTap === "History" ? (
        <>
          <h1 class="mb-5 text-xl dark:text-white font-thin md:text-2xl">
            List of tickets
          </h1>

          <div className="relative mb-5 max-w-xs">
            <input
              type="text"
              id="PhoneNumber"
              className="w-full h-full py-3 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Phone number"
            />

            <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
              <img
                src={searchIcon}
                alt="edit icon"
                className="w-5 h-5 object-contain sm:w-6 sm:h-6 invert dark:invert-0"
              />
            </a>
          </div>

          <BokingTable />
        </>
      ) : (
        <div className="flex flex-col gap-4">
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
      )}
    </div>
  );
}

export default Boking