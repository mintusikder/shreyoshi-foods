
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/mainLayout";

import Home from "../pages/store/Home";
// import Shop from "../pages/store/Shop";
// import Cart from "../pages/store/Cart";
// import About from "../pages/store/About";
// import Contact from "../pages/store/Contact";
// import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    //   {
    //     path: "shop",
    //     element: <Shop />,
    //   },
    //   {
    //     path: "cart",
    //     element: <Cart />,
    //   },
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    //   {
    //     path: "contact",
    //     element: <Contact />,
    //   },
    //   {
    //     path: "*",
    //     element: <NotFound />,
    //   },
    ],
  },
]);
