import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Gallery from "../pages/Gallery";
import SignUp from "../pages/SignUp";
import Animals from "../pages/Animals";
import NewsDetail from "../pages/NewsDetail";
import News from "../pages/News";
import SignIn from "../pages/SignIn";
import Ticket from "../pages/Ticket";
import HomePage from "../pages/Homepage";
import Page404 from "../pages/Page404";
import AnimalDetail from "../pages/AnimalDetail";
import Contact from "../pages/Contact";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "animals", element: <Animals /> },
      { path: "animal-detail", element: <AnimalDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "gallery", element: <Gallery /> },
      { path: "home", element: <HomePage /> },
      { path: "news", element: <News /> },
      { path: "news-detail", element: <NewsDetail /> },
      { path: "page-404", element: <Page404 /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "ticket", element: <Ticket /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
    ],
  },
]);