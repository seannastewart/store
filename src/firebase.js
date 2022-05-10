// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuXh1pfaWGlxoKjeiZz3jFk1shK1Wcnww",
    authDomain: "skincare-app-390e5.firebaseapp.com",
    projectId: "skincare-app-390e5",
    storageBucket: "skincare-app-390e5.appspot.com",
    messagingSenderId: "214964338921",
    appId: "1:214964338921:web:2fa2b29b65db467689f078"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase