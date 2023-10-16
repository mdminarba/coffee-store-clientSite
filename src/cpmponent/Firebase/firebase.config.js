// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-WIAK3vrWzyUNtYlLQd3ne5cYHAhmMSo",
  authDomain: "coffee-store-clientsite.firebaseapp.com",
  projectId: "coffee-store-clientsite",
  storageBucket: "coffee-store-clientsite.appspot.com",
  messagingSenderId: "961413750863",
  appId: "1:961413750863:web:50890a8ddd3ddfb5aeca3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app