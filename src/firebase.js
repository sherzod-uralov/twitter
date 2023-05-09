import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAHuWZFm0s4_iz6auCnTzOS-62uSxHMeBg",
  authDomain: "myoneproject-26d6f.firebaseapp.com",
  projectId: "myoneproject-26d6f",
  storageBucket: "myoneproject-26d6f.appspot.com",
  messagingSenderId: "916072999396",
  appId: "1:916072999396:web:dc58647639ce6cd4f4fff1",
});

const auth = app.auth();
export { auth };
export default app;

