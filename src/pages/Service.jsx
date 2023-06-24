import {
  facebookIcon,
  instagramIcon,
  mailIcon,
  nameIcon,
  phoneiconIcon,
  twitterIcon,
} from "../assets";
import Controltop from "../components/Controltop";

const Service = () => {
  return (
    <section>
      <Controltop />

      <div className="flex gap-10 flex-wrap">
        <div className="w-72 flex-auto">
          <h2 className="mb-3 text-lg dark:text-white font-thin md:text-xl">
            Contact us
          </h2>

          <div className="mb-3">
            <label
              htmlFor="Name"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                id="Name"
                className="w-full h-full py-2 pl-3 pr-10 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
                placeholder="Your name"
              />

              <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
                <img
                  src={nameIcon}
                  alt="edit icon"
                  className="w-5 h-w-5 object-contain invert dark:invert-0"
                />
              </a>
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="Email"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              E-mail
            </label>

            <div className="relative">
              <input
                type="text"
                id="Email"
                className="w-full h-full py-2 pl-3 pr-10 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
                placeholder="Your e-mail"
              />

              <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
                <img
                  src={mailIcon}
                  alt="edit icon"
                  className="w-5 h-w-5 object-contain invert dark:invert-0"
                />
              </a>
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="PhoneNumber"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Phone number
            </label>

            <div className="relative">
              <input
                type="text"
                id="PhoneNumber"
                className="w-full h-full py-2 pl-3 pr-10 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
                placeholder="Phone number"
              />

              <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
                <img
                  src={phoneiconIcon}
                  alt="edit icon"
                  className="w-5 h-w-5 object-contain invert dark:invert-0"
                />
              </a>
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="msg"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Message
            </label>

            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Your message"
              className="w-full h-48 resize-none bg-transparent border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
            ></textarea>
          </div>

          <div className="flex gap-5">
            <a
              href="#"
              className="block text-center w-full font-thin capitalize py-2 px-10 bg-transparent border border-primary transition duration-300 text-primary rounded-md hover:text-dark hover:bg-primary"
            >
              clear
            </a>

            <a
              href="#"
              className="block text-center w-full font-thin capitalize py-2 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-md hover:bg-opacity-75"
            >
              send
            </a>
          </div>
        </div>

        <div className="w-72 flex-auto">
          <h2 className="mb-3 text-lg dark:text-white font-thin md:text-xl">
            About us
          </h2>

          <ul className="p-3 pl-7 mb-3 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white">
            <li className="mb-3 list-disc">
              <p className="text-sm font-thin">
                We worked on creating an interactive booking system for cinemas
                which aims to solve the problems of booking cinema tickets and
                to revive cinemas for people in a distinctive way, where they
                can easily find everything related to cinema and movies in one
                place.
              </p>
            </li>

            <li className="mb-3 list-disc">
              <p className="text-sm font-thin">
                We worked on creating an interactive booking system for cinemas
                which aims to solve the problems of booking cinema tickets and
                to revive cinemas for people in a distinctive way, where they
                can easily find everything related to cinema and movies in one
                place.
              </p>
            </li>

            <li className="list-disc">
              <p className="text-sm font-thin">
                We worked on creating an interactive booking system for cinemas
                which aims to solve the problems of booking cinema tickets and
                to revive cinemas for people in a distinctive way, where they
                can easily find everything related to cinema and movies in one
                place.
              </p>
            </li>
          </ul>

          <h2 className="mb-3 text-lg dark:text-white font-thin md:text-xl">
            Rate us
          </h2>

          <div className="p-3 mb-3 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white">
            <p className="text-sm">
              we work so hard to make iCinema better for you , take 5 minutes to
              rate us on app store :
            </p>
          </div>

          <h2 className="mb-3 text-lg dark:text-white font-thin md:text-xl">
            Follow us
          </h2>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-md p-1.5 shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white transition-transform hover:-translate-y-1"
            >
              <img
                src={facebookIcon}
                alt="facebook icon"
                className="w-full h-full object-contain invert"
              />
            </a>

            <a
              href="#"
              className="w-8 h-8 rounded-md p-1.5 shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white transition-transform hover:-translate-y-1"
            >
              <img
                src={twitterIcon}
                alt="twitter icon"
                className="w-full h-full object-contain invert"
              />
            </a>

            <a
              href="#"
              className="w-8 h-8 rounded-md p-1.5 shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white transition-transform hover:-translate-y-1"
            >
              <img
                src={instagramIcon}
                alt="instagram icon"
                className="w-full h-full object-contain invert"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
