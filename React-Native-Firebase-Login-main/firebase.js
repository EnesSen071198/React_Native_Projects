// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW0t2rqfcgAoV2BvLLghhArFLeW2FRy6c",
  authDomain: "login-99612.firebaseapp.com",
  projectId: "login-99612",
  storageBucket: "login-99612.appspot.com",
  messagingSenderId: "150665725445",
  appId: "1:150665725445:web:b9c0bb926533f5150abe6c"
};

// Initialize Firebase
if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };
