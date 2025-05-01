
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkxmz71P1lOOh-oMi3NQ-Y68Q2QIH-SbI",
  authDomain: "docepatinha-1aec3.firebaseapp.com",
  projectId: "docepatinha-1aec3",
  storageBucket: "docepatinha-1aec3.firebasestorage.app",
  messagingSenderId: "463551842169",
  appId: "1:463551842169:web:d4d8b6f93b64ecf18151a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
// const storage = getStorage(app);

export { db, auth };