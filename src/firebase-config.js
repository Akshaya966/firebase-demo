import { initializeApp } from "firebase/app";
import {getFirestore}from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCR3hTJcGX92LFwW6cfK6zueIWUk3WkmwQ",
    authDomain: "dummyproject-6c1ed.firebaseapp.com",
    projectId: "dummyproject-6c1ed",
    storageBucket: "dummyproject-6c1ed.appspot.com",
    messagingSenderId: "971815994859",
    appId: "1:971815994859:web:03cd91e046ba8d6e6005ae",
    measurementId: "G-52NEFTPDNQ"
  }; 

  const app=initializeApp(firebaseConfig)

 export const db=getFirestore(app)