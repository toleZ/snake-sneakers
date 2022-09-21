import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB26jzGFuEaI2_Jg75wCjDDJGoJFOAJhPg",
  authDomain: "sneak-sneakers.firebaseapp.com",
  projectId: "sneak-sneakers",
  storageBucket: "sneak-sneakers.appspot.com",
  messagingSenderId: "711118158981",
  appId: "1:711118158981:web:de0eec462bedf9182fbdec"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)