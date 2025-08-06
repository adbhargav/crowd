// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiEyGsFYkldxABpCOqxutlIWL9yuUrE9c",
  authDomain: "wd-vote.firebaseapp.com",
  projectId: "wd-vote",
  storageBucket: "wd-vote.firebasestorage.app",
  messagingSenderId: "747146784222",
  appId: "1:747146784222:web:fa77cd80480d7a87a5014f",
  measurementId: "G-FXRGMZ7QDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
