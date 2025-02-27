import { addDoc, collection, getDoc, query } from "firebase/firestore";
import Cards from "../components/Cards";
import Header from "../components/Header";
import { db } from "../firebase/firebase.config";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        // loading all the transactions
        loadTransactions();
    }, []);

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

    console.log("My transactions: ", transactions);

    // a function to set a transaction on the database
    async function addTransaction(transaction) {
        try {
            const docRef = await addDoc(
                collection(db, `users/${user.uid}/transactions`),
                transaction
            );
            console.log("Document written with ID: ", docRef.id);
            toast.success("Transaction Added!");
        }
        catch (error) {
            console.log(error.message);
            toast.error("Couldn't add transaction");
        }
    }

    // a function to load all the transaction from database
    async function loadTransactions() {
        setLoading(true);

        const q = query(collection(db, `users/${user.uid}/transactions`));
        const querySnapshot = await getDoc(q);
        let tempTransactions = [];

        querySnapshot.forEach(doc => {
            tempTransactions.push(doc.data());
        })
        setTransactions(tempTransactions)
        setLoading(false);
    }

    return (
        <div className="font-inter">
            <Header />
            
            <section className="container mx-auto">
                <Cards handleSubmit={handleSubmit} income={50} expense={10} balance={40} />
            </section>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;