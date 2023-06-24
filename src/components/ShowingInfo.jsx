import { calendarIcon, chareIcon, timeIcon } from "../assets";
import BookedState from "./BookedState";
import Calendar from "./Calendar";

const ShowingInfo = () => {
  return (
    <div className="flex-1 p-3 rounded-2xl shadow-darkShadow bg-white dark:bg-dark">
      <ul className="hidden justify-between items-center gap-4 mb-3 sm:flex">
        <li className="flex items-center justify-center w-52">
          <img
            src={calendarIcon}
            alt="calendar icon"
            className="w-5 h-5 mr-2 object-contain"
          />

          <span className="text-dark text-lg font-light capitalize dark:text-white">days</span>
        </li>

        <li className="flex items-center justify-center w-36">
          <img
            src={chareIcon}
            alt="chare icon"
            className="w-5 h-5 mr-2 object-contain"
          />

          <span className="text-dark text-lg font-light capitalize dark:text-white">state</span>
        </li>

        <li className="flex items-center justify-center w-40">
          <img
            src={timeIcon}
            alt="time icon"
            className="w-5 h-5 mr-2 object-contain"
          />

          <span className="text-dark text-lg font-light capitalize dark:text-white">time</span>
        </li>
      </ul>

      <div className="flex justify-center items-center flex-wrap gap-y-4 sm:justify-between">
        <Calendar />

        <BookedState />

        <div className="flex flex-col items-center justify-center w-44">
          <p className="text-dark font-light text-base dark:text-white">
            HH:MM:SS
          </p>

          <p className="text-primary text-2xl font-light my-1">
            10:35:59
          </p>

          <p className="text-dark text-base font-light dark:text-white">
            left to start show
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowingInfo;
