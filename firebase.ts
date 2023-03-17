import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkWNkAuYNr0OSibtGrGbt6pbh2xQyBGjc",
  authDomain: "breeze-gpt-messenger.firebaseapp.com",
  projectId: "breeze-gpt-messenger",
  storageBucket: "breeze-gpt-messenger.appspot.com",
  messagingSenderId: "709897426560",
  appId: "1:709897426560:web:c0b35af6a109e48d483865",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
