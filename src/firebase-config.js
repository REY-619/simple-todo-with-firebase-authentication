// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDcP3A0PVFne1GXcrYmtZjhbOo6fXyJbW4",
  authDomain: "fir-todo-c3cbe.firebaseapp.com",
  projectId: "fir-todo-c3cbe",
  storageBucket: "fir-todo-c3cbe.appspot.com",
  messagingSenderId: "207556244119",
  appId: "1:207556244119:web:6e7e8a87f9d5eb77b16fd2",
  measurementId: "G-PRXYKEEWS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const db = getFirestore(app);
