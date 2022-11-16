import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYp3-TsheHXMy1DGuOzczRntUabRGs49g",
  authDomain: "fir-crud-6a11e.firebaseapp.com",
  projectId: "fir-crud-6a11e",
  storageBucket: "fir-crud-6a11e.appspot.com",
  messagingSenderId: "548264991509",
  appId: "1:548264991509:web:af707e0668b69b0fe2271c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();