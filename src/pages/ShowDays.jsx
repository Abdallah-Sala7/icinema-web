import { hall } from "../data/selectData";
import SelectOptions from "../components/SelectBox";
import BokingTable from "../components/BokingTable";
import AddMovieSuccess from "../components/AddMovieSucces";
import { useState } from "react";
import Controltop from "../components/Controltop";

const ShowDays = () => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <section>
      <Controltop entry="user" />
      <div className="flex flex-wrap justify-between gap-3 mb-5">
        <div className="w-full sm:flex-1">
          <div className="mb-3">
            <label
              htmlFor="pickDays"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Pick days
            </label>
            <input
              type="date"
              id="pickDays"
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Pick days"
            />
          </div>

          <div>
            <label
              htmlFor="pickTimes"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Pick Times
            </label>
            <input
              type="time"
              id="pickTimes"
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Pick Times"
            />
          </div>
        </div>

        <div className="w-full sm:flex-1">
          <div className="mb-3">
            <label
              htmlFor="premiumSeat"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Premium seat
            </label>
            <input
              type="text"
              id="premiumSeat"
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="EGP"
            />
          </div>

          <div>
            <label
              htmlFor="ordinarySeat"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Ordinary seat
            </label>
            <input
              type="text"
              id="ordinarySeat"
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="EGP"
            />
          </div>
        </div>

        <div className="w-full md:flex-1 flex flex-col justify-between">
          <div className="mb-3 h-fit">
            <label
              htmlFor="hall"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              hall
            </label>
            <SelectOptions data={hall} />
          </div>

          <div>
            <button
              onClick={() => setIsAdded(true)}
              className="block text-center w-full font-thin capitalize h-10 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-xl hover:text-primary hover:bg-transparent"
            >
              save
            </button>
          </div>
        </div>
      </div>

      <BokingTable />

      {isAdded && <AddMovieSuccess />}
    </section>
  );
};

export default ShowDays;
