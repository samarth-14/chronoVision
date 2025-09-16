import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = { 
apiKey: "AIzaSyAn6GFL6lVx-OiItVXm2tYUkWWuIVhyP6I", 
authDomain: "my-ar-sih-app.firebaseapp.com", 
projectId: "my-ar-sih-app", 
storageBucket: "my-ar-sih-app.firebasestorage.app", 
messagingSenderId: "1048549060896", 
appId: "1:1048549060896:web:577db30cf6d0488a14a745" 
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app);

// Connect to emulators when running locally
if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(functions, "localhost", 5001);
}
