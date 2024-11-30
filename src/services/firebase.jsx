import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8L35PwNEda4POfEVp_VbbycnM-KDnQDo",
  authDomain: "coder-react-63385-odin.firebaseapp.com",
  projectId: "coder-react-63385-odin",
  storageBucket: "coder-react-63385-odin.firebasestorage.app",
  messagingSenderId: "325746269551",
  appId: "1:325746269551:web:8179ad84760cbeb67a5c9a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)