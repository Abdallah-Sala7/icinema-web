import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddMovieSuccess = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="max-w-full bg-dark border-primary border rounded-md px-5 py-8 flex flex-col gap-3 items-center">
        {isLoading ? (
          <div className="w-20 h-20 rounded-full border-4 animate-spin border-primary border-t-yellow-100 border-b-yellow-100"></div>
        ) : (
          <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-primary mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              className="w-10 h-10 text-primary"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
        )}

        <div className={`flex flex-col transition-all overflow-hidden ${isLoading ? 'h-0' : 'h-24'}`}>
          <h2 className="text-xl font-light text-dark dark:text-white text-center mb-auto">
            Added successfully
          </h2>

          <Link
            to={"/profile"}
            className="block text-center w-full font-thin capitalize py-2 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-md hover:text-primary hover:bg-transparent"
          >
            back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddMovieSuccess;
