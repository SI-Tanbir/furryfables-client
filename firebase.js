// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "furryfables-ada15.firebaseapp.com",
  projectId: "furryfables-ada15",
  storageBucket: "furryfables-ada15.firebasestorage.app",
  messagingSenderId: "106967093510",
  appId: "1:106967093510:web:bdaa0f2ea4edebbe02ce87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;