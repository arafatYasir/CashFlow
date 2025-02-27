import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return;
    }

    if(user) {
        return children;
    }
    else {
        return <Navigate to="/login" />
    }
};

export default PrivateRoute;