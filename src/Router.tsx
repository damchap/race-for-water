
import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import StartGameLayout from "./layout/StartGameLayout";
import Chaos from "./pages/Chaos";

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <StartGameLayout />,
        },
        {
            path: "/home",
            element: <HomeLayout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
            ],
        },
        {
            path : "/chaos",
            element: <Chaos />,
        }
    ]);

    return router; // You should return the router instance
};
