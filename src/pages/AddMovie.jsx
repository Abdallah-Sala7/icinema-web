import React, { useEffect, useState } from "react";
import SelectOptions from "../components/SelectBox";
import { genres, language } from "../data/selectData";
import { uploadIcon } from "../assets";
import Controltop from "../components/Controltop";
import { Link, useNavigation } from "react-router-dom";
import { useAddMovieMutation } from "../app/server/addMovieApi";
import { useSelector } from "react-redux";

const AddMovie = () => {
  const navigat = useNavigation();
  const [name, setName] = useState("");
  const [starring, setStarring] = useState("");
  const [genre, setGenre] = useState("");
  const [languageValue, setLanguageValue] = useState("");
  const [duration, setDuration] = useState("");
  const [audience, setAudience] = useState("");
  const [releaseDate, setReleaseDate] = useState(Date.now());
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const [brief, setBrief] = useState("");

  const getLanguage = (value) => {
    setLanguageValue(value);
  };

  const getGenre = (value) => {
    setGenre(value);
  };

  const getAudience = (value) => {
    setAudience(value);
  };

  const [postMovie, { isSuccess, isLoading, isError, data, error }] =
    useAddMovieMutation();

  const userData = JSON.parse(localStorage.getItem("user"));

  const handleAddMovie = () => {
    const movieData = JSON.stringify({
      name,
      starring,
      genre,
      language: languageValue,
      duration,
      release_date: releaseDate,
      audience,
      image: URL.createObjectURL(poster),
      brief,
      category_id: 2,
      cinema_id: userData.id,
      trailer: URL.createObjectURL(trailer),
    });
  };

  return (
    <section>
      <Controltop entry="user" />

      <h1 className="mb-5 text-lg dark:text-white font-thin md:text-3xl">
        Add movie
      </h1>

      <div className="flex items-stretch gap-5 flex-wrap mb-5">
        <div className="w-full md:flex-1">
          <div className="mb-3">
            <label
              htmlFor="movieName"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              movie Name
            </label>
            <input
              type="text"
              id="movieName"
              onChange={(e) => setName(e.target.value)}
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Movie name"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="starringDate"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Starring
            </label>
            <input
              type="date"
              id="starringDate"
              onChange={(e) => setStarring(e.target.value)}
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Movie name"
            />
          </div>

          <div className="mb-3 flex items-center gap-3">
            <div className="flex-1">
              <label
                htmlFor="genre"
                className="inline-block mb-1 capitalize font-light text-dark text-lg dark:text-white"
              >
                Genre
              </label>
              <SelectOptions getSelect={getGenre} data={genres} />
            </div>

            <div className="flex-1">
              <label
                htmlFor="language"
                className="inline-block mb-1 capitalize font-light text-dark text-lg dark:text-white"
              >
                Language
              </label>
              <SelectOptions getSelect={getLanguage} data={language} />
            </div>
          </div>

          <div className="mb-3 flex items-center gap-3">
            <div className="flex-1">
              <label
                htmlFor="Duration"
                className="inline-block mb-1 capitalize font-light text-dark text-lg dark:text-white"
              >
                Duration
              </label>
              <input
                type="text"
                id="Duration"
                onChange={(e) => setDuration(e.target.value)}
                className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
                placeholder="Duration"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="Audience"
                className="inline-block mb-1 capitalize font-light text-dark text-lg dark:text-white"
              >
                Audience
              </label>
              <SelectOptions getSelect={getAudience} data={genres} />
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="releaseDate"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Release date
            </label>
            <input
              type="date"
              id="releaseDate"
              onChange={(e) => setReleaseDate(e.target.value)}
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="releaseDate"
            />
          </div>
        </div>

        <div className="w-full flex-1">
          <div className="flex items-stretch justify-between gap-5 mb-3 flex-wrap min-w-fit">
            <div className="flex-1">
              <label
                htmlFor="selectPoster"
                className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white placeholder:text-white"
              >
                Poster
              </label>
              <label
                htmlFor="selectPoster"
                className="cursor-pointer flex flex-col py-8 px-4 text-center items-center gap-3 w-full rounded-lg border-2 border-primary border-dashed bg-lightGray dark:bg-dark"
              >
                <img
                  src={uploadIcon}
                  className="w-11 h-11 object-contain"
                  alt="upload icon"
                />

                <p className="text-gray">Drop poster here or</p>

                <p className="text-primary border-b border-primary">browse</p>
              </label>

              <input
                type="file"
                name="selectPoster"
                id="selectPoster"
                onChange={(e) => setPoster(e.target.value)}
                className="hidden"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="selectTrialer"
                className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white placeholder:text-white"
              >
                Trailer
              </label>
              <label
                htmlFor="selectTrialer"
                className="cursor-pointer flex flex-col py-8 px-4 text-center items-center gap-3 w-full rounded-lg border-2 border-primary border-dashed bg-lightGray dark:bg-dark"
              >
                <img
                  src={uploadIcon}
                  className="w-11 h-11 object-contain"
                  alt="upload icon"
                />

                <p className="text-gray">Drop video here or</p>

                <p className="text-primary border-b border-primary">browse</p>
              </label>

              <input
                type="file"
                name="selectTrialer"
                id="selectTrialer"
                onChange={(e) => setTrailer(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Brief"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Brief
            </label>
            <textarea
              name="Brief"
              id="Brief"
              onChange={(e) => setBrief(e.target.value)}
              cols="20"
              rows="10"
              placeholder="Brief......"
              className="w-full h-48 py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      <Link
        to={"/profile/show-days"}
        className="ml-auto text-xl font-thin capitalize block w-fit py-2 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-md hover:text-primary hover:bg-transparent"
      >
        next
      </Link>
    </section>
  );
};

export default AddMovie;
