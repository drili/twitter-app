// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
     apiKey: "AIzaSyC-dgzUCivczxS8vz8diRFBInIAeWVKMRw",
     authDomain: "twitter-clone-771a0.firebaseapp.com",
     projectId: "twitter-clone-771a0",
     storageBucket: "twitter-clone-771a0.appspot.com",
     messagingSenderId: "574008083964",
     appId: "1:574008083964:web:99fd70a221e37544261e79"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
