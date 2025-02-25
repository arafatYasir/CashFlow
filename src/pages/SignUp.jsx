import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        // clearing previous message
        setErrorMessage("");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const condition = e.target.condition.checked;
        
        // checking name length
        if(name.length < 4) {
            setErrorMessage("Name must contain at least 4 characters.");
            return;
        }

        // checking password's strength
        if(!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (@, $, !, %, , ?, &)");
            return;
        }

        // checking if condition is accepted
        if(!condition) {
            setErrorMessage("Please accept our terms and condition.");
            return;
        }
    }

    return (
        <div className="font-inter">
            <Header />

            <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
                <div className="w-full max-w-md bg-[#161B22] p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-white text-center mb-6">
                        Sign up to <span className="text-[#16A34A]">CashFlow</span>
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-4 py-2 bg-[#0D1117] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
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

                        <div className="flex items-center my-5">
                            <input
                                type="checkbox"
                                name="condition"
                                id="terms"
                                className="w-5 h-5 appearance-none border border-gray-600 rounded-full bg-[#0D1117] checked:bg-[#16A34A] cursor-pointer transition"
                            />
                            <label htmlFor="terms" className="ml-2 text-gray-300">
                                I accept the terms and conditions
                            </label>
                        </div>

                        <p className="text-[#EF4444] mb-4">{errorMessage}</p>

                        <button
                            type="submit"
                            className="w-full bg-[#16A34A] hover:bg-green-700 py-2 rounded-md transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-gray-400 text-center text-sm mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-green-500 cursor-pointer hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;