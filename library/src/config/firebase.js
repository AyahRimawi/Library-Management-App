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



// const firebaseConfig = {
//   apiKey: "AIzaSyAwAXZWVP-iZXii5-GqTjm84UN9S6exeAI",
//   authDomain: "book-c0734.firebaseapp.com",
//   projectId: "book-c0734",
//   storageBucket: "book-c0734.appspot.com",
//   messagingSenderId: "1060341124581",
//   appId: "1:1060341124581:web:71b3619da9b1ec7269b30c",
//   measurementId: "G-QNN0QY6SZ7",
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyAcUkwnSHIllo53L03t-_5doXDMS_cKDts",
//   authDomain: "booking-cfef3.firebaseapp.com",
//   projectId: "booking-cfef3",
//   storageBucket: "booking-cfef3.appspot.com",
//   messagingSenderId: "659221102471",
//   appId: "1:659221102471:web:17c293c911c4be80dd9d22",
//   measurementId: "G-4BWLWZKE5E",
// };


const firebaseConfig = {
  apiKey: "AIzaSyD7Zw-6U9FJ5uT74nK0TT_gq_zLHSCuwAk",
  authDomain: "library-management-app-33d34.firebaseapp.com",
  projectId: "library-management-app-33d34",
  storageBucket: "library-management-app-33d34.appspot.com",
  messagingSenderId: "360691293572",
  appId: "1:360691293572:web:625c541dff8e240c3e51d1",
  measurementId: "G-6C4P9M8BL2",
};

// https://library-management-app-33d34-default-rtdb.firebaseio.com
// https://booking-259c4-default-rtdb.firebaseio.com



// const firebaseConfig = {
//   apiKey: "AIzaSyDeCb7uDdWktP084lnAMi-DL4EwWjctj3E",
//   authDomain: "booking-259c4.firebaseapp.com",
//   projectId: "booking-259c4",
//   storageBucket: "booking-259c4.appspot.com",
//   messagingSenderId: "333202038313",
//   appId: "1:333202038313:web:e191e25faefd58aa0dc638",
// };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { getDocs };
export { collection };
export { addDoc };
export { deleteDoc };
export { updateDoc };
export { doc };