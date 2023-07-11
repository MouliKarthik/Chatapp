// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS93yJn62tzA4ZbZFaS9ZXq9FkQKPo-PA",
  authDomain: "chat-256cd.firebaseapp.com",
  projectId: "chat-256cd",
  storageBucket: "chat-256cd.appspot.com",
  messagingSenderId: "567528402957",
  appId: "1:567528402957:web:32bf7f220c56d24888e544"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();