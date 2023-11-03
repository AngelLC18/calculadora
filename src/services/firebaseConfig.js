// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuPKCmWn3HIquS9WsO2WOvKtQBuU7SsT4",
  authDomain: "calculadora-zeballos.firebaseapp.com",
  projectId: "calculadora-zeballos",
  storageBucket: "calculadora-zeballos.appspot.com",
  messagingSenderId: "715863252995",
  appId: "1:715863252995:web:9d3729fa52a618f8c56e36",
  measurementId: "G-CC22V1352D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
