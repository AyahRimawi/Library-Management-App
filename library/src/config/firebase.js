import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7Zw-6U9FJ5uT74nK0TT_gq_zLHSCuwAk",
  authDomain: "library-management-app-33d34.firebaseapp.com",
  projectId: "library-management-app-33d34",
  storageBucket: "library-management-app-33d34.appspot.com",
  messagingSenderId: "360691293572",
  appId: "1:360691293572:web:625c541dff8e240c3e51d1",
  measurementId: "G-6C4P9M8BL2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { getDocs };
export { collection };
export { addDoc };
export { deleteDoc };
export { updateDoc };
export { doc };