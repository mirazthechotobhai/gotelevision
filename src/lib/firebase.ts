import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL8thRSrnIunt-e-v5Os01CFfCqXUsaLE",
  authDomain: "wifi-ca82b.firebaseapp.com",
  projectId: "wifi-ca82b",
  storageBucket: "wifi-ca82b.firebasestorage.app",
  messagingSenderId: "325759873188",
  appId: "1:325759873188:web:9db062640899575b727631",
  measurementId: "G-R1HK8RBCS1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
