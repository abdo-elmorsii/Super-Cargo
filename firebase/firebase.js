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
  apiKey: "AIzaSyAr_4JlTcBZxCr0k-Ixau-n6JPdfSO_VJk",
  authDomain: "users-ccf9f.firebaseapp.com",
  databaseURL: "https://users-ccf9f-default-rtdb.firebaseio.com",
  projectId: "users-ccf9f",
  storageBucket: "users-ccf9f.appspot.com",
  messagingSenderId: "457613675265",
  appId: "1:457613675265:web:f5f1528dfe109cf97da900"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
