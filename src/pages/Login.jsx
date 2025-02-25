import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // clearing previous message
        setErrorMessage("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
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
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="block mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-2 bg-[#0D1117] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your password"
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
        </div>
    );
};

export default Login;