import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/MainContent";
import "./index.css";
import Greenplaza from "./components/Greenplaza";
import Chorniche from "./components/Chorniche";
import King from "./components/King";
import Conrad from "./components/Conrad";
import Heliop from "./components/Heliop";
import Golf from "./components/Golf";
import Woldorf from "./components/Woldorf";
import Ramses from "./components/Ramses";
import Zamalek from "./components/Zamalek";
import Hurghada from "./components/Hurghada";
import Luxor from "./components/Luxor";
import Marsa from "./components/Marsa";
import Doubletree from "./components/Doubletree";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },

  {
    path: "/Greenplaza",
    element: <Greenplaza />,
  },
  {
    path: "/Chorniche",
    element: <Chorniche />,
  },
  {
    path: "/King",
    element: <King />,
  },
  {
    path: "/Conrad",
    element: <Conrad />,
  },
  {
    path: "/Heliop",
    element: <Heliop />,
  },
  {
    path: "/Golf",
    element: <Golf />,
  },
  {
    path: "/Woldorf",
    element: <Woldorf />,
  },
  {
    path: "/Ramses",
    element: <Ramses />,
  },
  {
    path: "/Zamalek",
    element: <Zamalek />,
  },
  {
    path: "/Hurghada",
    element: <Hurghada />,
  },
  {
    path: "/Luxor",
    element: <Luxor />,
  },
  {
    path: "/Marsa",
    element: <Marsa />,
  },
  {
    path: "/Doubletree",
    element: <Doubletree />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
