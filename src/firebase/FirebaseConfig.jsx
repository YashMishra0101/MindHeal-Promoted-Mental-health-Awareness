import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const API_KEY = import.meta.env.VITE_Firebase_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "mind-heal.firebaseapp.com",
  projectId: "mind-heal",
  storageBucket: "mind-heal.firebasestorage.app",
  messagingSenderId: "36079777623",
  appId: "1:36079777623:web:271879d797911b4c1b7012",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDb = getFirestore(app);
export { auth, fireDb };
