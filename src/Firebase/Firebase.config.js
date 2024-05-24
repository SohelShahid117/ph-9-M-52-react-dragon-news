// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
 

  // apiKey: "AIzaSyDkXYb_RVVxQtQGCFh6n2m_EmBYCd1WOs4",
  // authDomain: "m-52-react-dragon-news-a-27fc7.firebaseapp.com",
  // projectId: "m-52-react-dragon-news-a-27fc7",
  // storageBucket: "m-52-react-dragon-news-a-27fc7.appspot.com",
  // messagingSenderId: "1065523990709",
  // appId: "1:1065523990709:web:726c1d2b7be14418aa6efc",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// console.log('inside from firebase config file ',import.meta.env.VITE_PASS)
