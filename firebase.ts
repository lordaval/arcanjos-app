// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
    apiKey: "AIzaSyB80aLYVmQeQkaIqc9OkpF9XF6ux7i9WKo",
    authDomain: "arcanjos-app.firebaseapp.com",
    projectId: "arcanjos-app",
    storageBucket: "arcanjos-app.appspot.com",
    messagingSenderId: "817259790782",
    appId: "1:817259790782:web:4b342c892f6bf90340b9ef",
    measurementId: "G-34TV7CQR64"
};

export let app = getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApp();

export const auth = getAuth(app);