import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Event from "../pages/Event";
import Cart from "../pages/Cart";
import Gallery from "../pages/Gallery";
import MemberShip from "../pages/MemberShip";
import SignUp from "../pages/SignUp";
import Animals from "../pages/Animals";
import EventDetail from "../pages/EventDetail";
import EventTicket from "../pages/EventTicket";
import NewsDetail from "../pages/NewsDetail";
import News from "../pages/News";
import SignIn from "../pages/SignIn";
import Ticket from "../pages/Ticket";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Event /> },
            { path: 'animals', element: <Animals /> },
            { path: 'cart', element: <Cart /> },
            { path: 'event', element: <Event /> },
            { path: 'event-detail', element: <EventDetail /> },
            { path: 'event-ticket', element: <EventTicket /> },
            { path: 'gallery', element: <Gallery /> },
            { path: 'member-ship', element: <MemberShip /> },
            { path: 'news', element: <News /> },
            { path: 'news-detail', element: <NewsDetail /> },
            { path: 'sign-in', element: <SignIn /> },
            { path: 'sign-up', element: <SignUp /> },
            { path: 'ticket', element: <Ticket /> },
        ]
    }
]);