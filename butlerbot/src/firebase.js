// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2ftKL0y3paqoh0-AtEX4Yclmxs6eSYlM",
  authDomain: "butlerbot-64f57.firebaseapp.com",
  projectId: "butlerbot-64f57",
  storageBucket: "butlerbot-64f57.firebasestorage.app",
  messagingSenderId: "1043212140797",
  appId: "1:1043212140797:web:06a089a22a9e8782027e94",
  measurementId: "G-EP106EPQ4V"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Add this part for authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
