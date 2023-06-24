import Button from "./Button";
import Input from "./Input";

function LoginForm() {
  return (
    <div className="md:w-120 lg:w-auto">
      <p className="text-dark font-light text-2xl text-center mb-7 dark:text-white">
        Welcome back !
      </p>

      <div>
        <form action="">
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
