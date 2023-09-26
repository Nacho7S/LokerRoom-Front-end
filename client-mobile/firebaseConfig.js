import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCBa2MpC-dQxdlttRA9L9XVfDbgRLTYtMY",
  authDomain: "chat-app-lokerroom.firebaseapp.com",
  projectId: "chat-app-lokerroom",
  storageBucket: "chat-app-lokerroom.appspot.com",
  messagingSenderId: "302918290725",
  appId: "1:302918290725:web:7f34d158c7ce12d15c9ecc",
  measurementId: "G-BHD2Q380V4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
