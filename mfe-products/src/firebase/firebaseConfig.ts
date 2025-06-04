import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VITE_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VITE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VITE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VITE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VITE_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
