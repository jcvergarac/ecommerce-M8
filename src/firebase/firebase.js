import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-U_reAbH1J3MsiYIgOFfz9SJCbCRR0oo",
  authDomain: "noticias-60d8c.firebaseapp.com",
  databaseURL: "https://noticias-60d8c-default-rtdb.firebaseio.com",
  projectId: "noticias-60d8c",
  storageBucket: "noticias-60d8c.firebasestorage.app",
  messagingSenderId: "68123083918",
  appId: "1:68123083918:web:c5dd9a8549b841a619b5df",
  measurementId: "G-V902ERSWET"
}

const app = initializeApp(firebaseConfig)


export const auth = getAuth(app)
export const db = getFirestore(app)


