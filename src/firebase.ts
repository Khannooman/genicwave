// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore"; // Add Firestore type

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD42-dFt2c7U5wZ7cEW85lQ2qMfutKGDxQ",
  authDomain: "genicwave-919d7.firebaseapp.com",
  projectId: "genicwave-919d7",
  storageBucket: "genicwave-919d7.firebasestorage.app",
  messagingSenderId: "1084042756982",
  appId: "1:1084042756982:web:9961521d1b7a27de9af057",
  measurementId: "G-9XV9WKWKNL"
};

// Explicitly type the db variable
let db: Firestore;

try {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  db = getFirestore(app);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

export { db };