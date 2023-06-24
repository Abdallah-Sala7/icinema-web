import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
// import 'flowbite';

import {
  RootLayout,
  Admin,
  Boking,
  Profile,
  Service,
  Timeline,
  AuthLayout,
} from "./pages";
import { LoginForm, SignupForm } from "./components";
import AddMovie from "./pages/AddMovie";
import ShowDays from "./pages/ShowDays";
import BookMovie from "./pages/BookMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Admin /> },
      { path: "profile", element: <Profile /> },
      {
        path: "profile",
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "add-movie",
            element: <AddMovie />,
          },
          {
            path: "show-days",
            element: <ShowDays />,
          },
        ],
      },
      {
        path: "boking",
        children: [
          { index: true, element: <Boking /> },
          {
            path: "/boking/:id",
            element: <BookMovie />
          },
        ],
      },
      { path: "service", element: <Service /> },
      { path: "timeline", element: <Timeline /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <SignupForm /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
