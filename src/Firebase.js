
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD90YjDAbM79RsBNf4FN2-2j3Wr5YK2qtg",
  authDomain: "portfolio-40d09.firebaseapp.com",
  projectId: "portfolio-40d09",
  storageBucket: "portfolio-40d09.appspot.com",
  messagingSenderId: "946341491221",
  appId: "1:946341491221:web:070b3ff4f14e438643541c",
  measurementId: "G-F8H1XBBNDX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
export { db, auth, storage };