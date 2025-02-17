import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const API_KEY = import.meta.env.VITE_Firebase_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "safespace-ea9fb.firebaseapp.com",
  projectId: "safespace-ea9fb",
  storageBucket: "safespace-ea9fb.appspot.com",
  messagingSenderId: "37352424569",
  appId: "1:37352424569:web:6a7c161b39f6b8c57f00a8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDb = getFirestore(app);
export { auth, fireDb };
