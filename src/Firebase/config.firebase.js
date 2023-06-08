// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKmHoK_wrVjW_mi0lMX6egVPEXZxchigU",
  authDomain: "captured-moments-project.firebaseapp.com",
  projectId: "captured-moments-project",
  storageBucket: "captured-moments-project.appspot.com",
  messagingSenderId: "1051064020527",
  appId: "1:1051064020527:web:14a49cf5fd021ac0b0e0da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);