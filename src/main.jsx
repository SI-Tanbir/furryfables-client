
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";

import App from "./App";
import LoginForm from "./Login";
import SignupForm from "./Signup";
import DashBoard from "./DashBoard";
import Provider from "./Provider";

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


  <Provider>

    <RouterProvider router={router} />

  </Provider>


  


 
);
