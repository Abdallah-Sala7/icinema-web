import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("email should be changed", () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText("email");
  const testValue = "test";

  fireEvent.change(emailInput, { target: { value: testValue } });
  expect(emailInput.value).toBe(testValue);
});

test("password should be changed", () => {
  render(<LoginForm />);
  const passwordInput = screen.getByPlaceholderText("password");
  const testValue = "test";

  fireEvent.change(passwordInput, { target: { value: testValue } });
  expect(passwordInput.value).toBe(testValue);
});

test("submit button should be disabled", () => {
  render(<LoginForm />);
  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeDisabled();
});
