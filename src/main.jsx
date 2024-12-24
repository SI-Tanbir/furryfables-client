
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";

import App from "./App";
import LoginForm from "./Login";
import SignupForm from "./Signup";
import DashBoard from "./DashBoard";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/login',
    element:<LoginForm></LoginForm>
  },
  {
    path:'/signup',
    element:<SignupForm></SignupForm>
  },
  {
    path:'/myproducts',
    element:<DashBoard></DashBoard>
  }


]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
