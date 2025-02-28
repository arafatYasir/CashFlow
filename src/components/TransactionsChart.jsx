import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

const TransactionsChart = ({ transactions }) => {
    // Process data to get total income and expense per day
    const dataMap = {};

    transactions.forEach(({ date, amount, type }) => {
        if (!dataMap[date]) {
            dataMap[date] = { date, income: 0, expense: 0 };
        }
        if (type === "Income") {
            dataMap[date].income += amount;
        } else {
            dataMap[date].expense += amount;
        }
    });

    const data = Object.values(dataMap);

    return (
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-center">Income & Expense Overview</h2>
            
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                    {/* Grid lines */}
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />

                    {/* Axes */}
                    <XAxis dataKey="date" stroke="#bbb" />
                    <YAxis stroke="#bbb" />
                    
                    {/* Tooltip */}
                    <Tooltip contentStyle={{ backgroundColor: "#222", borderRadius: "8px", color: "#fff" }} />

                    {/* Legend */}
                    <Legend verticalAlign="top" wrapperStyle={{ color: "white" }} />

                    {/* Bars with neon glow */}
                    <Bar dataKey="income" fill="#22c55e" radius={[8, 8, 0, 0]} barSize={40}>
                        <animate attributeName="opacity" from="0" to="1" dur="0.8s" />
                    </Bar>
                    <Bar dataKey="expense" fill="#ef4444" radius={[8, 8, 0, 0]} barSize={40}>
                        <animate attributeName="opacity" from="0" to="1" dur="0.8s" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TransactionsChart;