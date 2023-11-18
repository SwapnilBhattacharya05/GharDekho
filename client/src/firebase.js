// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "ghardekho-bd550.firebaseapp.com",
    projectId: "ghardekho-bd550",
    storageBucket: "ghardekho-bd550.appspot.com",
    messagingSenderId: "207406643980",
    appId: "1:207406643980:web:2971fce0da248ac7406729"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);