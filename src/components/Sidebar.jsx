import {
  adminIcon,
  bokingTiketIcon,
  chevronIcon,
  logOutIcon,
  logo,
  profileImg,
  serviceIcon,
  timelineIcon,
} from "../assets";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAsideBar } from "../app/reducers/appSlice";

function Sidebar() {
  const { asideBar } = useSelector((state) => state.app);
  const userData = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  const handleAside = (e) => {
    dispatch(setAsideBar());
    e.preventDefault();
  };

  return (
    <aside
      className={`
        fixed top-0 bottom-0 left-0 h-screen w-64 z-40  
        bg-white  border-r-4 border-primary 
        -translate-x-full transition-all duration-300
        ${asideBar ? "translate-x-0" : ""}
        dark:bg-dark
        lg:translate-x-0
      `}
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between py-10">
        <div className="overflow-y-auto flex-1">
          <div className="w-fit m-auto p-2 flex justify-center items-baseline gap-2 border-b-2 border-gray">
            <img
              src={logo}
              alt="i cinema logo"
              className="w-10 h-10 object-contain"
            />

            <h1 className="font-light text-2xl text-yellow-400">
              <span className="text-dark dark:text-white">I</span>
              Cinema
            </h1>
          </div>

          <ul className="pl-8 py-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-l-full mb-2 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={adminIcon}
                  alt="admin icon"
                  className="w-5 h-5 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
                />

                <span className="font-light text-lg text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  Admin
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-l-full mb-2 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={userData.cover}
                  alt="admin icon"
                  className="w-6 h-6 object-cover mr-3 rounded-full border-2 border-primary"
                />

                <span className="font-light text-lg text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  profile
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/boking"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-l-full mb-2 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={bokingTiketIcon}
                  alt="admin icon"
                  className="w-5 h-5 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
                />

                <span className="font-light text-lg text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  booking
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-l-full mb-2 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={timelineIcon}
                  alt="admin icon"
                  className="w-5 h-5 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
                />

                <span className="font-light text-lg text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  timeline
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-l-full mb-2 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={serviceIcon}
                  alt="admin icon"
                  className="w-5 h-5 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
                />

                <span className="font-light text-lg text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  service
                </span>
              </NavLink>
            </li>
          </ul>
        </div>

        <Link
          to="auth/login"
          className="flex items-center relative py-2.5 px-12"
        >
          <img
            src={logOutIcon}
            alt="admin icon"
            className="w-6 h-6 object-contain mr-3 filter dark:invert"
          />

          <span className="font-light text-lg text-dark capitalize dark:text-white">
            Sign out
          </span>
        </Link>
      </div>

      <a
        href="#"
        className="absolute top-8 left-full w-8 h-8 rounded-r-md flex justify-center items-center bg-primary lg:hidden"
        onClick={handleAside}
      >
        <img
          src={chevronIcon}
          alt="open icon"
          className="w-4 h-4 object-contain"
        />
      </a>
    </aside>
  );
}

export default Sidebar;
