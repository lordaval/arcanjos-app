// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
// @ts-ignore
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
  apiKey: "AIzaSyCwIO9tEedU2fE9hF9JILL4ov8z_tHc_4I",
  authDomain: "arcanjos-app-5a63f.firebaseapp.com",
  projectId: "arcanjos-app-5a63f",
  storageBucket: "arcanjos-app-5a63f.appspot.com",
  messagingSenderId: "828111836196",
  appId: "1:828111836196:web:e6201147ce7153296234b1"
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const firestore = getFirestore(app);
export const auth = getAuth(app);

export default app
