import Moviecard from '../components/Moviecard'
import ShowingInfo from '../components/ShowingInfo'
import Controltop from '../components/Controltop'
import { useState } from 'react'
import BokingTable from '../components/BokingTable'
import { poster1Img, poster2Img, poster3Img, searchIcon } from '../assets'

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
              releaseDate={"14 Dec 2022"}
              starring={"Zoe Saldana, Sam Worthington, Michelle Yeoh"}
              title={"Avatar"}
              img={poster1Img}
              features={["Action", "130min", "EN", "+8"]}
            />

            <ShowingInfo time={"03:40:59"} status={150} />
          </div>

          <div className="flex flex-col gap-4 justify-center xl:flex-row">
            <Moviecard
              releaseDate={"28 Dec 2022"}
              starring={" Dwayne Johnson, Pierce Brosnan, Sarah Shahi"}
              title={"Black Adam"}
              img={poster2Img}
              features={["Action", "105min", "+12", "EN"]}
            />

            <ShowingInfo time={"10:35:59"} status={250} />
          </div>

          <div className="flex flex-col gap-4 justify-center xl:flex-row">
            <Moviecard
              releaseDate={"28/12/2022"}
              starring={"mohamed tharwat"}
              title={"Nabil elgameel Dr tagmeel"}
              img={poster3Img}
              features={["Comedy", "105min", "Egyptian", "Arabic"]}
            />

            <ShowingInfo time={"09:40:59"} status={240} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Boking