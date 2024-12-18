// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi-vpJqIOudjsxbxd09sr1BB0Wqiyq3y8",
  authDomain: "job-portal-bf7b7.firebaseapp.com",
  projectId: "job-portal-bf7b7",
  storageBucket: "job-portal-bf7b7.firebasestorage.app",
  messagingSenderId: "766002098028",
  appId: "1:766002098028:web:31d321a567e0a978c68d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;