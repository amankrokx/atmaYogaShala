import "./css/contact.css"
import { Authmgrs } from "./modules/login"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = require("../firebaseConfig")

// Initialize Firebase
const app = initializeApp(firebaseConfig)
let authmgr = new Authmgrs(app)
// const analytics = getAnalytics(app);
console.log("ok")
