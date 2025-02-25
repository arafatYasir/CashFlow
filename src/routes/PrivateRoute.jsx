import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user) {
        return children;
    }
    return (
        <Navigate to="/login" />
    );
};

export default PrivateRoute;