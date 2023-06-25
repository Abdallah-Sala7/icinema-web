import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useLoginMutation } from "../app/server/authApi";
import { useEffect, useState } from "react";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [postLogin, { data, isLoading, isSuccess, error }] = useLoginMutation();

  const getEmail = (val) => {
    setEmail(val);
  };

  const getPassword = (val) => {
    setPassword(val);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setTimeout(() => {
      navigate('/')
    }, 500);

    const userData = {
      email,
      password,
      device_type: "web",
      name: email,
      device_id: "as12",
    };

    // postLogin(userData);
  };

  useEffect(() => {
    if (isLoading) {
      console.log("Loading...");
    } else if (isSuccess) {
      // localStorage.setItem("user", JSON.stringify(data.data));
      // localStorage.setItem("isAuth", true);

      console.log('====================================');
      console.log(data);
      console.log('====================================');
    } else if (error) {
      console.log(error);
    }
  }, [isSuccess, isLoading, error]);

  return (
    <div className="md:w-120 lg:w-auto mx-auto">
      <p className="text-dark font-light text-2xl text-center mb-7 dark:text-white">
        Welcome back !
      </p>

      <div>
        <form action="" onSubmit={handleLogin}>
          <Input
            type="email"
            id="email"
            handleChange={getEmail}
            placeholder="galaxycinema@gmail.com"
            label="E-mail"
          />

          <Input
            type="password"
            id="password"
            handleChange={getPassword}
            placeholder="Enter password here!"
            label="Password"
          />

          <div className="flex justify-center mt-7">
            <Button fild>Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
