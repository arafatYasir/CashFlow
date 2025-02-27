import { addDoc, collection, getDocs, query } from "firebase/firestore";
import Cards from "../components/Cards";
import Header from "../components/Header";
import { db } from "../firebase/firebase.config";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import TransactionsTable from "../components/TransactionsTable";
import TransactionsChart from "../components/TransactionsChart";

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const { user } = useContext(AuthContext);

    const handleSubmit = (values, type) => {
        // creating a new transaction
        const newTransaction = {
            name: values.name,
            amount: parseFloat(values.amount),
            type,
            date: values.date,
            tag: values.tag
        };
        // adding it to the firestore database
        addTransaction(newTransaction);
    }
    // a function to set a transaction on the database
    async function addTransaction(transaction) {
        try {
            const docRef = await addDoc(
                collection(db, `users/${user.uid}/transactions`),
                transaction
            );
            // updating the new transaction inside our state
            setTransactions([...transactions, transaction]);
            toast.success("Transaction Added!");
        }
        catch (error) {
            toast.error("Couldn't add transaction");
        }
    }

    // a function to load all the transaction from database
    async function loadTransactions() {
        setLoading(true);

        const q = query(collection(db, `users/${user.uid}/transactions`));
        const querySnapshot = await getDocs(q);
        let tempTransactions = [];

        querySnapshot.forEach(doc => {
            tempTransactions.push(doc.data());
        })
        setTransactions(tempTransactions);
        toast.success("Transactions loaded!");
        setLoading(false);
    }

    // a function to calculate the balance
    const calculateBalance = () => {
        let totalIncome = 0, totalExpense = 0;

        transactions.forEach(t => {
            if (t.type === "Income") totalIncome += t.amount;
            else totalExpense += t.amount;
        });

        // setting the income
        setIncome(totalIncome);
        // setting the expense
        setExpense(totalExpense);
        // setting the balance
        setBalance(totalIncome - totalExpense);
    }

    useEffect(() => {
        // loading all the transactions
        loadTransactions();
    }, []);

    useEffect(() => {
        // calculating the blance
        calculateBalance();
    }, [transactions]);

    return (
        <div className="min-h-screen font-inter">
            <Header />

            {
                loading 
                ?
                <div className="min-h-screen flex items-center justify-center"><span className="text-xl loading loading-infinity loading-xl"></span></div>
                :
                <section className="container mx-auto">
                    <Cards handleSubmit={handleSubmit} income={income} expense={expense} balance={balance} />
                    <TransactionsChart transactions={transactions} />
                    <TransactionsTable transactions={transactions} />
                </section>
            }
            <ToastContainer />
        </div>
    );
};

export default Dashboard;