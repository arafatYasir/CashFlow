// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIuWH9Ya2qv_1j8GN_bf3DOReTjYwZwBI",
  authDomain: "cashflow-a5549.firebaseapp.com",
  projectId: "cashflow-a5549",
  storageBucket: "cashflow-a5549.firebasestorage.app",
  messagingSenderId: "1006890590103",
  appId: "1:1006890590103:web:8f56878adc68fcb11f2ed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;