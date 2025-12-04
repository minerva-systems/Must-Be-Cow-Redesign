import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "gallery", Component: Gallery },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "*", Component: NotFound },
    ],
  },
]);
