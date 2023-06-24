import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
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
            placeholder="galaxycinema@gmail.com"
            label="E-mail"
          />

          <Input
            type="password"
            id="password"
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
