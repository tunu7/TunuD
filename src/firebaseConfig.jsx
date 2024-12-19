// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, limit, query } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDL7podUEwFOx9fpH54FxC0R2O7_6gJE7Q",
  authDomain: "portfolio-7bfa0.firebaseapp.com",
  projectId: "portfolio-7bfa0",
  storageBucket: "portfolio-7bfa0.firebasestorage.app",
  messagingSenderId: "1064033207544",
  appId: "1:1064033207544:web:687c7769d54ecbca6e670d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, getDocs, limit, query };
