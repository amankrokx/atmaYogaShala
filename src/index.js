import "./css/index.css"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import loader from "./modules/loader"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = require("../firebaseConfig")

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
console.log("ok")
