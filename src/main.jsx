import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout, Login } from "./components/index.js";

import Signup from "./pages/Signup";

import Prime from "./pages/Prime.jsx";
import Quiz from "./pages/Quiz.jsx";
import Game from "./components/Game.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <AuthLayout>
            <About />
          </AuthLayout>
        ),
      },
      {
        path: "/contact",
        element: (
          <AuthLayout>
            <Contact />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/prime",
        element: (
          <AuthLayout authentication>
            {" "}
            <Prime />
          </AuthLayout>
        ),
      },
      {
        path: "/quiz",
        element: (
          <AuthLayout authentication>
            {" "}
            <Quiz />
          </AuthLayout>
        ),
      },
      {
        path: "/games",
        element: (
          <AuthLayout authentication>
            {" "}
            <Game />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
