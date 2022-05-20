// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5FiCA8-ddMVDvVij1y2lvk_Pi-XkaDog",
  authDomain: "luciano-lupo-ecommerce.firebaseapp.com",
  projectId: "luciano-lupo-ecommerce",
  storageBucket: "luciano-lupo-ecommerce.appspot.com",
  messagingSenderId: "814565965299",
  appId: "1:814565965299:web:f6c6a550ae460a8a956686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)