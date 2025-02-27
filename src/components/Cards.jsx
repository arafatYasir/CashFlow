import { ArrowUpCircle, ArrowDownCircle, DollarSign } from "lucide-react";
import Card from "./Card";
import CardContent from "./CardContent";
import Modal from "./Modal";
import { useState } from "react";

const Cards = ({ handleSubmit, income, balance, expense }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    const openModal = (type) => {
        setModalType(type);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            {/* Income Card */}
            <Card className="border-green-500 hover:opacity-70">
                <CardContent>
                    <div>
                        <h2 className="text-lg font-semibold">Income</h2>
                        <p className="text-2xl font-bold text-green-400">${income}</p>
                    </div>
                    <ArrowUpCircle size={32} className="text-green-400" />
                </CardContent>
                <div className="mt-4">
                    <button
                        className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        onClick={() => openModal("Income")}
                    >
                        Add Income
                    </button>
                </div>
            </Card>

            {/* Expense Card */}
            <Card className="border-red-500 hover:opacity-70">
                <CardContent>
                    <div>
                        <h2 className="text-lg font-semibold">Expense</h2>
                        <p className="text-2xl font-bold text-red-400">${expense}</p>
                    </div>
                    <ArrowDownCircle size={32} className="text-red-400" />
                </CardContent>
                <div className="mt-4">
                    <button
                        className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={() => openModal("Expense")}
                    >
                        Add Expense
                    </button>
                </div>
            </Card>

            {/* Balance Card */}
            <Card className="border-green-300 hover:opacity-70">
                <CardContent>
                    <div>
                        <h2 className="text-lg font-semibold">Balance</h2>
                        <p className="text-2xl font-bold text-white">${balance}</p>
                    </div>
                    <DollarSign size={32} className="text-green-300" />
                </CardContent>
            </Card>

            {/* Modal Component */}
            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                onSubmit={handleSubmit}
                modalType={modalType}
            />
        </div>
    );
};

export default Cards;