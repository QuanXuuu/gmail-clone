// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDMop81NaAGcfSH9f3Mn4YELRWVnGf_7zo",

  authDomain: "clone-1ec94.firebaseapp.com",

  projectId: "clone-1ec94",

  storageBucket: "clone-1ec94.appspot.com",

  messagingSenderId: "95766467009",

  appId: "1:95766467009:web:cba6f6d4acd143e6bcdf40",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();
AuthProvider();

export { db, auth, provider };
