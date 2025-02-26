import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHmeROx54zcaIfq2JJxbVb6RVI8xniSio",
  authDomain: "fitconnect-a85fb.firebaseapp.com",
  projectId: "fitconnect-a85fb",
  storageBucket: "fitconnect-a85fb.firebasestorage.app",
  messagingSenderId: "618906412395",
  appId: "1:618906412395:web:43ac6f3eeb60308e90d82e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
