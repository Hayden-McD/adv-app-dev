import 'firebase/auth'
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbFV7e-5kOgvytXqsh9A9Sg-Xz5PwuEyo",
  authDomain: "h-mcd-project.firebaseapp.com",
  projectId: "h-mcd-project",
  storageBucket: "h-mcd-project.appspot.com",
  messagingSenderId: "814485293432",
  appId: "1:814485293432:web:f04bc7fa6ee40a6491608d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export {app, db};