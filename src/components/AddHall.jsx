import React, { useEffect, useState } from "react";
import { chairIcon } from "../assets";
import { useDispatch } from "react-redux";
import { setNewHall } from "../app/reducers/appSlice";

const AddHall = ({newHallAdded}) => {
  const dispatch = useDispatch();

  const [chairsRow, setChairsRow] = useState(0);
  const [chairsColumn, setChairsColumn] = useState(0);

  const [chairsInHole, setChairsInHole] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState("empty");
  const [hallName, setHallName] = useState("");

  const chairsContent = [];

  useEffect(() => {
    for (let i = 1; i <= chairsRow; i++) {
      const rowArray = [];
      for (let j = 1; j <= chairsColumn; j++) {
        const chairObject = {
          row: i,
          column: j,
          status: "available",
        };
        rowArray.push(chairObject);
      }
      chairsContent.push(rowArray);
    }

    setChairsInHole(chairsContent);
  }, [chairsRow, chairsColumn]);

  const handleStatus = (e, chair) => {
    e.preventDefault();

    setChairsInHole((prevState) => {
      const newState = prevState.map((row) => {
        return row.map((item) => {
          if (item.row === chair.row && item.column === chair.column) {
            return {
              ...item,
              status:
                item.status === selectedSeats ? "available" : selectedSeats,
            };
          }
          return item;
        });
      });

      return newState;
    });
  };

  const handleAddHall = () => {
    dispatch(
      setNewHall({
        hallName,
        seats: chairsInHole,
      })
    )

    newHallAdded(hallName)
  }

  return (
    <div className="flex gap-5 flex-wrap">
      <div className="flex-1 flex justify-center relative rounded-xl p-3 bg-white shadow-md dark:shadow-darkShadow dark:bg-dark md:p-5">
        {chairsInHole.length < 1 ? (
          <div className="flex justify-center items-center">
            <p className="text-lg text-center text-gray font-light">
              you did not add any hall yet , add one at least so you can control
              booking
            </p>
          </div>
        ) : (
          <div className="overflow-auto">
            {chairsInHole.map((row, index) => (
              <div key={index} className="flex gap-2 mb-3 last-of-type:mb-0">
                {row.map((chair, index) => (
                  <a
                    href="#"
                    key={index}
                    className={`w-6 h-6 flex-shrink-0 flex ${
                      chair.status === "empty" && selectedSeats === "empty"
                        ? "empty-chair"
                        : chair.status === "empty" && selectedSeats !== "empty"
                        ? "invisible"
                        : "visible"
                    }`}
                    onClick={(e) => handleStatus(e, chair)}
                  >
                    <img
                      src={chairIcon}
                      alt="chair"
                      className={`w-full h-full object-contain ${
                        chair.status === "available"
                          ? "dark:invert"
                          : chair.status === "booked"
                          ? "gray-filter"
                          : chair.status === "vip"
                          ? "primary-filter"
                          : chair.status === "empty"
                          ? "dark:invert"
                          : ""
                      }`}
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 bg-white shadow-md dark:shadow-darkShadow rounded-xl p-3 dark:bg-dark md:p-5">
        <div className="flex gap-4 flex-wrap pb-5 mb-5 border-b border-gray">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="hallName">Hall Name :</label>
            <input
              type="tel"
              className="py-2 px-3 focus:ring-0 rounded-lg shadow-md border !border-gray text-dark font-light dark:bg-dark dark:text-light dark:shadow-darkShadow dark:border-none"
              placeholder="Hall Name"
              id="hallName"
              onChange={(e) => setHallName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="columns">Columns :</label>
            <input
              type="tel"
              className="py-2 px-3 focus:ring-0 rounded-lg shadow-md border !border-gray text-dark font-light dark:bg-dark dark:text-light dark:shadow-darkShadow dark:border-none"
              placeholder="17"
              id="columns"
              onChange={(e) => setChairsColumn(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="row">Row :</label>
            <input
              type="tel"
              className="py-2 px-3 focus:ring-0 rounded-lg shadow-md border !border-gray text-dark font-light dark:bg-dark dark:text-light dark:shadow-darkShadow dark:border-none"
              placeholder="10"
              id="row"
              onChange={(e) => setChairsRow(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pb-5 mb-5 border-b border-gray">
          <button
            className={`flex-1 flex flex-col justify-center items-center gap-2 p-4 border-2 rounded-lg ${
              selectedSeats === "empty" ? "border-primary" : "border-gray"
            }`}
            onClick={() => setSelectedSeats("empty")}
          >
            <img
              src={chairIcon}
              alt=""
              className="w-7 h-7 object-contain lightGray-filter"
            />

            <span className={`text-sm text-zinc-400`}>Empty</span>
          </button>

          <button
            className={`flex-1 flex flex-col justify-center items-center gap-2 p-4 border-2 rounded-lg ${
              selectedSeats === "available" ? "border-primary" : "border-gray"
            }`}
            onClick={() => setSelectedSeats("available")}
          >
            {" "}
            <img
              src={chairIcon}
              alt=""
              className="w-7 h-7 object-contain dark:invert"
            />
            <span className="text-sm text-dark dark:text-light">available</span>
          </button>

          <button
            className={`flex-1 flex flex-col justify-center items-center gap-2 p-4 border-2 rounded-lg ${
              selectedSeats === "booked" ? "border-primary" : "border-gray"
            }`}
            onClick={() => setSelectedSeats("booked")}
          >
            {" "}
            <img
              src={chairIcon}
              alt=""
              className="w-7 h-7 object-contain gray-filter"
            />
            <span className="text-sm text-gray">Booked</span>
          </button>

          <button
            className={`flex-1 flex flex-col justify-center items-center gap-2 p-4 border-2 rounded-lg ${
              selectedSeats === "vip" ? "border-primary" : "border-gray"
            }`}
            onClick={() => setSelectedSeats("vip")}
          >
            {" "}
            <img
              src={chairIcon}
              alt=""
              className="w-7 h-7 object-contain primary-filter"
            />
            <span className="text-sm text-primary">VIP</span>
          </button>
        </div>

        <div className="flex">
          <button
            onClick={handleAddHall}
            className="block text-center w-full font-thin capitalize py-2 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-md hover:text-primary hover:bg-transparent"
          >
            Add Hall
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHall;
