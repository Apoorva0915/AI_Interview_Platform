import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJRg80fN4SZ-DkuaqNHdtDM9LzK6zDyiA",
  authDomain: "aimockinterview-b33ca.firebaseapp.com",
  projectId: "aimockinterview-b33ca",
  storageBucket: "aimockinterview-b33ca.firebasestorage.app",
  messagingSenderId: "451381951274",
  appId: "1:451381951274:web:aed3035f3d51c2a3053c53",
  measurementId: "G-2Y8WTNFYF6"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);