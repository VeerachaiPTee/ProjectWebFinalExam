import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDfxMTPPO4uTmesIztU4d53IZJSE3BCBdY",
  authDomain: "vueprojectfinal-travel.firebaseapp.com",
  projectId: "vueprojectfinal-travel",
  storageBucket: "vueprojectfinal-travel.appspot.com",
  messagingSenderId: "697649488707",
  appId: "1:697649488707:web:1258087dc9287b3e8485f6",
  measurementId: "G-CKN4F82GDE"
});

const auth = getAuth(firebaseApp); 
const db = getFirestore(firebaseApp);

export { db, auth };
