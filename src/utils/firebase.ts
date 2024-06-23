// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blogy-1a979.firebaseapp.com",
  projectId: "blogy-1a979",
  storageBucket: "blogy-1a979.appspot.com",
  messagingSenderId: "432645841742",
  appId: "1:432645841742:web:c41c0a4469451990a5741f",
};

export const app = initializeApp(firebaseConfig);
