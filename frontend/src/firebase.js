// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOzUP-ztQyI5P9EiBMKZOJY9Sy1UEMvdU",
  authDomain: "yt-clone-f4ddb.firebaseapp.com",
  projectId: "yt-clone-f4ddb",
  storageBucket: "yt-clone-f4ddb.appspot.com",
  messagingSenderId: "723680886130",
  appId: "1:723680886130:web:298ee25d8de4016e7a71eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
