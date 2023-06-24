import { useEffect, useState } from "react";
import { useRegisterMutation, useVerifyMutation } from "../app/server/authApi";
import Button from "./Button";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const navigate = useNavigate();

  const getName = (val) => {
    setName(val);
  };

  const getEmail = (val) => {
    setEmail(val);
  };

  const getPassword = (val) => {
    setPassword(val);
  };

  const getConfirmPass = (val) => {
    setConfirmPass(val);
  };

  const [postNewUser, { isLoading, isSuccess, error, data }] =
    useRegisterMutation();

  const [
    postVerifyCode,
    {
      isLoading: isVerifyLoading,
      isSuccess: isVerifySuccess,
      error: verifyError,
      data: verifyData,
    },
  ] = useVerifyMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = JSON.stringify({
      name,
      email,
      password,
      password_confirmation: confirmPass,
      lat: 30.3333,
      lng: 33.333,
      address: "Mansoura",
    });

    await postNewUser(newUser);
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();

    const verify = JSON.stringify({
      code: verifyCode,
      device_type: "web",
      email,
      device_id: "as12",
    });

    await postVerifyCode(verify);
  };

  useEffect(() => {
    if (isLoading) {
      console.log("Loading...");
    } else if (isSuccess) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  }, [isSuccess, isLoading, error]);

  useEffect(() => {
    if (isVerifyLoading) {
      console.log("Loading...");
    } else if (isVerifySuccess) {
      localStorage.setItem("user", JSON.stringify(verifyData.data));
      localStorage.setItem("isAuth", true)
      navigate("/");
      console.log(verifyData.data);
    } else if (verifyError) {
      console.log(verifyError);
    }
  }, [isVerifySuccess, isVerifyLoading, verifyError]);

  return (
    <div className="mx-auto md:w-120 lg:w-auto">
      {isSuccess ? (
        <>
          <p className="text-dark font-light text-lg text-center mb-7 dark:text-white">
            please check your email to verify your account
          </p>

          <div>
            <form action="" onSubmit={handleVerifyCode}>
              <input
                type="text"
                className={`
                  w-full bg-gray-50 border border-gray-600 py-3 
                  font-light text-dark text-sm rounded-lg 
                  !ring-0 focus:border-primary  
                  dark:bg-dark dark:text-white
                `}
                id="verify-code"
                placeholder="OTP code"
                onChange={(e) => setVerifyCode(e.target.value)}
              />

              <div className="flex justify-center mt-7">
                <Button
                  handleClick={handleVerifyCode}
                  isLoading={isVerifyLoading}
                >
                  {isVerifyLoading ? "Loading..." : "Sign up"}
                </Button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <p className="text-dark font-light text-2xl text-center mb-7 dark:text-white">
            Create account !
          </p>

          <div>
            <form action="" onSubmit={handleSubmit}>
              <Input
                handleChange={getName}
                type="text"
                id="name"
                placeholder="Galaxy Cinema"
                label="Cinema name"
              />

              <Input
                handleChange={getEmail}
                type="email"
                id="email"
                placeholder="galaxycinema@gmail.com"
                label="E-mail"
              />

              <Input
                handleChange={getPassword}
                type="password"
                id="password"
                placeholder="Enter password here!"
                label="Password"
              />

              <Input
                handleChange={getConfirmPass}
                type="password"
                id="confirm-password"
                placeholder="Enter password here!"
                label="Confirm Password"
              />

              <div className="flex justify-center mt-7">
                <Button handleClick={handleSubmit} isLoading={isLoading}>
                  {isLoading ? "Loading..." : "Sign up"}
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default SignupForm;
