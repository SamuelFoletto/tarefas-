import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBe8tQRGiwBqmBBuTAb0s6i2GiXiURKwBk",
  authDomain: "tarefas-a539b.firebaseapp.com",
  projectId: "tarefas-a539b",
  storageBucket: "tarefas-a539b.firebasestorage.app",
  messagingSenderId: "230045600423",
  appId: "1:230045600423:web:de2b1fd78c9b8a17152982"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore()

export { db }