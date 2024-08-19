// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu2Z_6MfJeaqIx4XGCY68EAqeHk24bsWo",
  authDomain: "my-hobbe-app.firebaseapp.com",
  projectId: "my-hobbe-app",
  storageBucket: "my-hobbe-app.appspot.com",
  messagingSenderId: "924035986914",
  appId: "1:924035986914:web:c318dbaacdcc81081975bb",
  measurementId: "G-9HH9DHR3X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}