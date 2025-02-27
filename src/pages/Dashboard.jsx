import { ToastContainer } from "react-toastify";
import Header from "../components/Header";

const Dashboard = () => {
    return (
        <div className="font-inter">
            <Header />
            <p>This is dashboard</p>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;