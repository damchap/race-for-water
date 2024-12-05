
import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "", // Empty path means it matches the parent route
                    element: <Home />, // Render Home inside HomeLayout
                },
            ]
        }
    ]);

    return router; // You should return the router instance
};
