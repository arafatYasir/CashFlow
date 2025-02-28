import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";

const Modal = ({ isOpen, onClose, onSubmit, modalType }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [tag, setTag] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // checking if all values are present
        if(!name || !amount || !date || !tag) {
            toast.error("Please provide all informations!");
            return;
        }
        // seding all values
        onSubmit({ name, amount, date, tag }, modalType);

        // clearing all the input fields
        setName("");
        setAmount("");
        setDate("");
        setTag("");

        // closing modal
        onClose();
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/0 backdrop-blur-sm">
            <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl w-96 relative">
                {/* Close Button */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-center">Add {modalType}</h2>
                    <button className="text-gray-400 hover:text-white" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    {/* Name Input */}
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />

                    {/* Amount Input */}
                    <input
                        name="amount"
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />

                    {/* Date Picker */}
                    <input
                        name="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />

                    {/* Tag Dropdown */}
                    <select
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    >
                        <option value="" disabled>Select Tag</option>
                        {modalType === "Income" ?
                            <>
                                <option value="Salary">Salary</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Investment">Investment</option>
                            </>
                            :
                            <>
                                <option value="Food">Food</option>
                                <option value="Rent">Rent</option>
                                <option value="Rent">Healthcare</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Travel">Travel</option>
                                <option value="Shopping">Shopping</option>
                                <option value="School/College Fees">School/College Fees</option>
                                <option value="Subscriptions">Subscriptions</option>
                            </>}
                    </select>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
                    >
                        Add Transaction
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
