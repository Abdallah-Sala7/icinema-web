import { useState } from "react";
import Moviecard from "./Moviecard";
import Searchinput from "./Searchinput";
import Advertise from "./Advertise";
import { editIcon } from "../assets";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Profilemovies() {
  const [activeTab, setActiveTab] = useState("tab1");

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
      <div>
        <div>
          <h1 className="mb-5 text-xl dark:text-white font-thin md:text-2xl">
            Showing now
          </h1>

          <Searchinput />

          <Swiper
            pagination={pagination}
            spaceBetween={20}
            modules={[Pagination]}
            className="movie-swiper !pb-12"
          >
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <h1 className="mb-5 text-xl dark:text-white font-thin mt-5 md:text-2xl">
            Coming soon
          </h1>

          <Searchinput />

          <Swiper
            pagination={pagination}
            spaceBetween={20}
            modules={[Pagination]}
            className="movie-swiper !pb-12"
          >
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Moviecard
                releaseDate={"28/12/2022"}
                starring={"mohamed tharwat"}
                title={"Nabil elgameel Dr tagmeel"}
                img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
                features={["Comedy", "105min", "Egyptian", "Arabic"]}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div>
        <h1 className="mb-5 text-3xl dark:text-white font-thin">Advertise</h1>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center flex-1 gap-2 rounded-xl py-1 px-2 sm:py-2 sm:px-4 shadow-md dark:shadow-darkShadow overflow-auto">
            <button
              className={`px-6 py-1 font-light rounded-lg border border-primary transition-colors md:px-12 ${
                activeTab === "tab1" ? "bg-primary text-dark" : "text-primary"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              Ad1
            </button>

            <button
              className={`px-6 py-1 font-light rounded-lg border border-primary transition-colors md:px-12 ${
                activeTab === "tab2" ? "bg-primary text-dark" : "text-primary"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Ad2
            </button>

            <button
              className={`px-6 py-1 font-light rounded-lg border border-primary transition-colors md:px-12 ${
                activeTab === "tab3" ? "bg-primary text-dark" : "text-primary"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Ad3
            </button>
          </div>

          <a
            href="#"
            className="p-3 rounded-xl shadow-md dark:shadow-darkShadow"
          >
            <img
              src={editIcon}
              alt="edit icon"
              className="w-5 h-5 object-contain sm:w-6 sm:h-6"
            />
          </a>
        </div>

        <Advertise
          src={
            "https://m.media-amazon.com/images/M/MV5BMTU1ZjgzMTAtNGJhNC00NjE5LWI0Y2QtZmQxYmMxNzNiY2VhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Profilemovies;
