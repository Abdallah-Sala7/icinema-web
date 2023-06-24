import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 220;
const valueMax = 294;

const BookedState = () => {
  return (
    <div className="hidden items-center justify-center relative w-36 mx-4 px-4 border-x-2 border-primary sm:flex">
      <CircularProgressbar
        value={percentage}
        maxValue={valueMax}
        styles={{
          root: {
            width: "110px",
            height: "110px",
            margin: "0 auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
          path: {
            stroke: "#FEBE08",
            strokeWidth: "5",
          },
          trail: {
            stroke: "transparent",
          },
        }}
      />

      <div className="w-24 h-24 p-2 bg-lightGray rounded-full flex flex-col items-center justify-center dark:bg-darkGray">
        <h1 className="w-8/12 text-dark text-center text-lg pb-1 mb-1 border-b-2 border-primary dark:text-white">
          {percentage}
        </h1>

        <p className="text-center text-xs font-light text-dark dark:text-white">
          Booked out of {valueMax}
        </p>
      </div>
    </div>
  );
};

export default BookedState;
