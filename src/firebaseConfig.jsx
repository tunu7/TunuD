// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, limit, query } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDpA-8J_eINN10DE6AEl0dGxU4lRsVgeOk",
  authDomain: "portfolio-b6a51.firebaseapp.com",
  projectId: "portfolio-b6a51",
  storageBucket: "portfolio-b6a51.firebasestorage.app",
  messagingSenderId: "969499594892",
  appId: "1:969499594892:web:942b43c0a5c1ae0bd3aba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, getDocs, limit, query };
