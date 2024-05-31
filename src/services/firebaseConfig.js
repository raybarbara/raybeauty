import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk5p3p8fAXnitcF4Dki9WCeB2ZRQGVg9o",
  authDomain: "projeto-de-redes-d00c3.firebaseapp.com",
  projectId: "projeto-de-redes-d00c3",
  storageBucket: "projeto-de-redes-d00c3.appspot.com",
  messagingSenderId: "87289707561",
  appId: "1:87289707561:web:b8ce37346cfaf54ba97038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
