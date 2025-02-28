import { useState } from "react";

const TransactionsTable = ({ transactions }) => {
    const [sortOption, setSortOption] = useState("date-desc");

    const sortedTransactions = [...transactions].sort((a, b) => {
        switch (sortOption) {
            case "date-desc":
                return new Date(b.date) - new Date(a.date);
            case "date-asc":
                return new Date(a.date) - new Date(b.date);
            case "type-income":
                return a.type === "Income" ? -1 : 1;
            case "type-expense":
                return a.type === "Expense" ? -1 : 1;
            case "amount-desc":
                return b.amount - a.amount;
            case "amount-asc":
                return a.amount - b.amount;
            default:
                return 0;
        };
    });

    return (
        <div className="max-w-4xl mt-16 mx-auto p-4 bg-gray-900 text-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Transaction History</h2>

            {/* Sorting Dropdown */}
            <div className="mb-4 text-center">
                <label className="mr-2 text-gray-300">Sort by:</label>
                <select
                    className="bg-gray-800 text-white p-2 rounded-lg"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="date-desc">📅 Newest to Oldest</option>
                    <option value="date-asc">📅 Oldest to Newest</option>
                    <option value="type-income">💰 Income First</option>
                    <option value="type-expense">💸 Expense First</option>
                    <option value="amount-desc">📈 Highest to Lowest</option>
                    <option value="amount-asc">📉 Lowest to Highest</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg overflow-hidden text-sm sm:text-base">
                    <thead>
                        <tr className="bg-gray-800 text-gray-300 text-left">
                            <th className="p-2 sm:p-3">Date</th>
                            <th className="p-2 sm:p-3">Type</th>
                            <th className="p-2 sm:p-3">Amount</th>
                            <th className="p-2 sm:p-3">Category</th>
                            <th className="p-2 sm:p-3">Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTransactions.map((txn, indx) => (
                            <tr
                                key={indx}
                                className="border-t border-gray-700 hover:bg-gray-800 transition"
                            >
                                <td className="p-2 sm:p-3">{new Date(txn.date).toLocaleDateString()}</td>
                                <td
                                    className={`p-2 sm:p-3 font-semibold ${txn.type === "Income" ? "text-green-400" : "text-red-400"}`}
                                >
                                    {txn.type.charAt(0).toUpperCase() + txn.type.slice(1)}
                                </td>
                                <td className="p-2 sm:p-3">${txn.amount.toFixed(2)}</td>
                                <td className="p-2 sm:p-3">{txn.tag}</td>
                                <td className="p-2 sm:p-3">{txn.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionsTable;
