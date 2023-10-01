// Import the getAuth from firebase/ath
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIVn6TwnZI0Qo6sc-5eR7hAYip6FE6bCA",
  authDomain: "as-career-hub.firebaseapp.com",
  projectId: "as-career-hub",
  storageBucket: "as-career-hub.appspot.com",
  messagingSenderId: "668570116521",
  appId: "1:668570116521:web:fd9386384413ab7274e4b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
