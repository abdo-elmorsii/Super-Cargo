// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRdsFNUxyJXu2Q7hoH6jlDe7_gyIGWBLY",
  authDomain: "super-cargo-f4d27.firebaseapp.com",
  projectId: "super-cargo-f4d27",
  storageBucket: "super-cargo-f4d27.appspot.com",
  messagingSenderId: "215416364803",
  appId: "1:215416364803:web:11f8adfdf2c83680b9d336",
  measurementId: "G-YJEC8KC80Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
