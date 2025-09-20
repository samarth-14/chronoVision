// frontend/src/firebase/config.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn6GFL6lVx-OiItVXm2tYUkWWuIVhyP6I",
  authDomain: "my-ar-sih-app.firebaseapp.com",
  projectId: "my-ar-sih-app",
  storageBucket: "my-ar-sih-app.firebasestorage.app",
  messagingSenderId: "1048549060896",
  appId: "1:1048549060896:web:577db30cf6d0488a14a745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
