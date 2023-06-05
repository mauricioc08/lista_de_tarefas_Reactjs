// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA29qWvXXG3BbR59sDs7oqyW_gabaBnEsY",
  authDomain: "lista-de-tarefas-19c98.firebaseapp.com",
  projectId: "lista-de-tarefas-19c98",
  storageBucket: "lista-de-tarefas-19c98.appspot.com",
  messagingSenderId: "281952402307",
  appId: "1:281952402307:web:f55ec854915328893414b6",
  measurementId: "G-EXDTVRVKNJ",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
