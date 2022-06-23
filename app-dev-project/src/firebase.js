import 'firebase/auth'
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { initializeFirestore,
  CACHE_SIZE_UNLIMITED,
enableIndexedDbPersistence } from "firebase/firestore"; 

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
const db = initializeFirestore(app, { cacheSizeBytes: CACHE_SIZE_UNLIMITED});
enableIndexedDbPersistence(db)
.catch((err) => {
    if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
    } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
});

 const auth = getAuth(app);

export {auth, db};