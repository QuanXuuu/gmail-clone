// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDMop81NaAGcfSH9f3Mn4YELRWVnGf_7zo",
  authDomain: "clone-1ec94.firebaseapp.com",
  projectId: "clone-1ec94",
  storageBucket: "clone-1ec94.appspot.com",
  messagingSenderId: "95766467009",
  appId: "1:95766467009:web:cba6f6d4acd143e6bcdf40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
