const TransactionsTable = ({ transactions }) => {
    return (
        <div className="max-w-4xl mx-auto p-4 bg-gray-900 text-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Transaction History</h2>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg overflow-hidden text-sm sm:text-base">
                    <thead>
                        <tr className="bg-gray-800 text-gray-300 text-left">
                            <th className="p-2 sm:p-3">Date</th>
                            <th className="p-2 sm:p-3">Type</th>
                            <th className="p-2 sm:p-3">Amount</th>
                            <th className="p-2 sm:p-3">Category</th>
                            <th className="p-2 sm:p-3">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((txn, indx) => (
                            <tr
                                key={indx}
                                className="border-t border-gray-700 hover:bg-gray-800 transition"
                            >
                                <td className="p-2 sm:p-3">{new Date(txn.date).toLocaleDateString()}</td>
                                <td
                                    className={`p-2 sm:p-3 font-semibold ${txn.type === "Income" ? "text-green-400" : "text-red-400"
                                        }`}
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