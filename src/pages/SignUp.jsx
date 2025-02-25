import Header from "../components/Header";

const SignUp = () => {
    return (
        <div className="font-inter">
            <Header />

            <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
                <div className="w-full max-w-md bg-[#161B22] p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-white text-center mb-6">
                        Sign up to <span className="text-[#16A34A]">CashFlow</span>
                    </h2>

                    <form>
                        <div className="mb-4">
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-4 py-2 bg-[#0D1117] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your email"
                            />
                        </div>
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

                        <div className="flex items-center my-5">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-5 h-5 appearance-none border border-gray-600 rounded-full bg-[#0D1117] checked:bg-[#16A34A] cursor-pointer transition"
                            />
                            <label htmlFor="terms" className="ml-2 text-gray-300">
                                I accept the terms and conditions
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#16A34A] hover:bg-green-700 py-2 rounded-md transition"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;