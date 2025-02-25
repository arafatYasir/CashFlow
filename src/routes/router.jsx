import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Dashboard /></PrivateRoute>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
]);

export default router;