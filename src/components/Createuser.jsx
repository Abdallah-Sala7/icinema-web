import { useState } from "react";
import { editIcon, editUserIcon } from "../assets";

function Createuser(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex mb-5 flex-wrap gap-4">
      <img
        src={props.img}
        alt="desciption"
        className="w-56 h-40 rounded-xl object-cover"
      />

      <div className="w-160 flex-auto">
        <h1 className="text-lg font-bold dark:text-white mb-3">{props.name}</h1>
        <h2 className="mb-5 dark:text-white">{props.description}</h2>

        {isOpen ? (
          <div className="flex gap-3 flex-wrap">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Create user
              </label>

              <input
                type="email"
                id="email"
                className="text-sm rounded-lg block w-full p-2.5 border-none focus:ring-0 dark:placeholder:text-gray shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
                placeholder="user name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Create password
              </label>
              <input
                type="password"
                id="password"
                placeholder="passowrd"
                className="text-sm rounded-lg block w-full p-2.5 border-none focus:ring-0 dark:placeholder:text-gray shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
                required
              />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="border border-primary transition duration-300 text-primary rounded-md hover:text-dark hover:bg-primary text-lg font-thin w-40 h-10 mt-7"
            >
              Save
            </button>
          </div>
        ) : (
          <>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
            >
              user
            </label>
            <div className="flex gap-3 items-stretch">
              <div className="relative w-fit">
                <input
                  type="email"
                  id="email"
                  className="text-sm rounded-lg block p-2.5 pr-10 border-none focus:ring-0 dark:placeholder:text-gray shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
                  placeholder="@email"
                  disabled
                  value={props.value}
                />

                <button
                  onClick={() => setIsOpen(true)}
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <img
                    src={editUserIcon}
                    className="w-5 h-5 object-contain"
                    alt="#"
                  />
                </button>
              </div>

              <button
                className="rounded-xl w-10 flex items-center justify-center bg-white dark:bg-dark shadow-md dark:shadow-darkShadow"
                onClick={() => setIsOpen(true)}
              >
                <img
                  src={editIcon}
                  alt="edit icon"
                  className="w-5 h-5 object-contain"
                />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Createuser;
