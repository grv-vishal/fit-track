import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDN9s23A7RQ9E0Iy9CYWUrBYeaJGCZygqA",
  authDomain: "workout-tracker-6a707.firebaseapp.com",
  databaseURL: "https://workout-tracker-6a707-default-rtdb.firebaseio.com",
  projectId: "workout-tracker-6a707",
  storageBucket: "workout-tracker-6a707.appspot.com",
  messagingSenderId: "791394241216",
  appId: "1:791394241216:web:c51edd42e5443d5742fb25",
  measurementId: "G-3HQ7KZ7BDR"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const database=getDatabase(app);
