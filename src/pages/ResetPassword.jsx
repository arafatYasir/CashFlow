import { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;

        if (!email) {
            toast.error("Please enter your email.");
            return;
        }

        // sending password reset mail
        resetPassword(email)
            .then(() => {
                toast.success("Password reset mail sent!");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="min-h-screen font-inter">
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
                <div className="w-full max-w-md bg-[#161B22] p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-white text-center mb-6">
                        Reset Your Password
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 bg-[#0D1117] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#16A34A] hover:bg-green-700 py-2 rounded-md transition"
                        >
                            Send Password Reset Mail
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ResetPassword;