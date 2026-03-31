// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdBiwtfNFCZmU_T_Tm9GsYlRUPpdpweP4",
  authDomain: "react-contactform-be70f.firebaseapp.com",
  projectId: "react-contactform-be70f",
  storageBucket: "react-contactform-be70f.firebasestorage.app",
  messagingSenderId: "713334244819",
  appId: "1:713334244819:web:ad3dcf1471c5d92670db26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);