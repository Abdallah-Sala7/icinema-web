import { useState } from "react";
import { hidePass, viewPass } from "../assets";

function Input({ id, label, type, inputclassName, placeholder, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleViewPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-2 md:mb-4">
      <label
        htmlFor={id}
        className="inline-block mb-1 font-light text-base text-dark dark:text-white md:mb-2"
      >
        {label}
      </label>

      <div className="relative">
        {type === "password" && (
          <a
            href="#"
            className="absolute top-1/2 right-2 -translate-y-1/2"
            onClick={handleViewPassword}
          >
            <img
              src={showPassword ? viewPass : hidePass}
              alt="show password"
              className="w-5 h-5 object-contain dark:invert"
            />
          </a>
        )}

        <input
          onChange={(e) => handleChange(e.target.value)}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={id}
          className={`
            w-full bg-gray-50 border border-gray-600 py-3 
            font-light text-dark text-sm rounded-lg 
            !ring-0
           focus:border-primary  
            dark:bg-dark dark:text-white ${type === "password" && "pr-10"}
            ${inputclassName}
          `}
          placeholder={placeholder}
          required
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export default Input;
