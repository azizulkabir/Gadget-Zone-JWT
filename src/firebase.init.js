// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0tY8glcYZx2CN85LW2ZtBsVrcSrsyWL0",
  authDomain: "gadget-zone-jwt.firebaseapp.com",
  projectId: "gadget-zone-jwt",
  storageBucket: "gadget-zone-jwt.appspot.com",
  messagingSenderId: "383221583472",
  appId: "1:383221583472:web:f174b553d1675cbfc9aeb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;