import { useState } from "react";
import { downArrowIcon } from "../assets";

const SelectOptions = ({ data, getSelect }) => {
  const [selectItem, setSelectItem] = useState("Select");
  const [openSelect, setOpenSelect] = useState(false);

  const handlegenres = (e, genre) => {
    setSelectItem(genre);
    getSelect && getSelect(genre);
    setOpenSelect(false);
    e.preventDefault();
  };

  return (
    <div className="relative w-full rounded-xl shadow-md text-light font-light dark:bg-dark dark:shadow-darkShadow">
      <div
        onClick={() => setOpenSelect(!openSelect)}
        className="py-2 px-4 text-light cursor-pointer w-full flex justify-between items-center "
      >
        <span>{selectItem}</span>

        <img
          src={downArrowIcon}
          alt="down arrow icon"
          className={`w-5 h-5 invert transition-transform pointer-events-none ${
            openSelect && "rotate-180"
          }`}
        />
      </div>

      <div
        className={`absolute top-full left-0 z-20 translate-y-1 w-full max-h-0 flex flex-col gap-0.5 rounded-xl shadow-md text-light font-light dark:shadow-darkShadow  bg-lightGray dark:bg-dark ${
          openSelect
            ? "max-h-60 py-2 overflow-auto transition-all"
            : "overflow-hidden"
        }`}
      >
        {Object.keys(data).map((dataItem, index) => (
          <a
            href="#"
            key={index}
            className="text-grayDark px-4 py-2 hover:bg-darkGray"
            onClick={(e) => {
              handlegenres(e, dataItem);
            }}
          >
            {dataItem}
          </a>
        ))}
      </div>

      {openSelect && (
        <>
          <div
            onClick={() => setOpenSelect(false)}
            className="fixed inset-0 z-10"
          ></div>
        </>
      )}
    </div>
  );
};

export default SelectOptions;
