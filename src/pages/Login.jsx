import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const { signInUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // clearing previous message
        setErrorMessage("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        // checkin if email and password field is empty
        if(!email || !password) {
            toast.error("Please provide all informations!");
            return;
        }

        // sign in with email and password
        signInUser(email, password)
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                const errorCode = error.code;
                if (errorCode === "auth/invalid-email") {
                    setErrorMessage("The email address is not valid.")
                } else if (errorCode === "auth/user-not-found") {
                    setErrorMessage("No user found with this email. Please sign up first.");
                } else if (errorCode === "auth/wrong-password") {
                    setErrorMessage("Incorrect password. Please try again.");
                } else if (errorCode === "auth/too-many-requests") {
                    setErrorMessage("Too many failed attempts. Try again later.");
                } else if (errorCode === "auth/network-request-failed") {
                    setErrorMessage("Network error. Please check your internet connection.");
                } else if (errorCode === "auth/email-already-in-use") {
                    setErrorMessage("This email is already in use. Try signing in instead.");
                } else if (errorCode === "auth/invalid-credential") {
                    setErrorMessage("Invalid email or password. Please check your details.");
                } else if (errorCode === "auth/account-exists-with-different-credential") {
                    setErrorMessage("An account already exists with this email but a different sign-in method. Try using that method.");
                }
            })
    }

    return (
        <div className="font-inter">
            <Header />

            <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
                <div className="w-full max-w-md bg-[#161B22] p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-white text-center mb-6">
                        Welcome to <span className="text-[#16A34A]">CashFlow</span>
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 bg-[#0D1117] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="block mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-2 bg-[#0D1117] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <p className="text-[#EF4444] mb-4">{errorMessage}</p>

                        <button
                            type="submit"
                            className="w-full bg-[#16A34A] hover:bg-green-700 py-2 rounded-md transition"
                        >
                            Login
                        </button>

                        <Link to="/reset_password" className="text-[#EF4444] text-center block text-sm mt-3 cursor-pointer hover:underline">
                            Forgot password?
                        </Link>
                    </form>

                    <p className="text-gray-400 text-center text-sm mt-4">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-green-500 cursor-pointer hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;