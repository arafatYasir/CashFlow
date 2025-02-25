import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Dashboard /></PrivateRoute>
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;