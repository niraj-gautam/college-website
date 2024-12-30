import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProgramPage from "../pages/ProgramPage";
import Layout from "../components/layout/Layout";
import Contact from "../components/Contact";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/programs/:programId",
                element: <ProgramPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
        ],
    },
]);
