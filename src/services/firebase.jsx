import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMr5CBLAJzX0D09hUIMRYDXxaeWMeaNww",
  authDomain: "jp-tattoo-supply.firebaseapp.com",
  projectId: "jp-tattoo-supply",
  storageBucket: "jp-tattoo-supply.firebasestorage.app",
  messagingSenderId: "816086741910",
  appId: "1:816086741910:web:15902d98eee4a0629363b7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)