// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config object (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAY8ZW2R_DkvgJ_9BOPYsEjGvW7CiJa1a8",
  authDomain: "admin-c76e2.firebaseapp.com",
  projectId: "admin-c76e2",
  storageBucket: "admin-c76e2.firebasestorage.app",
  messagingSenderId: "674531890779",
  appId: "1:674531890779:web:7a5246d9b62ad5da7c517e",
  measurementId: "G-73EF5M5QN4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

// Export for use in your app
export { db, auth };
