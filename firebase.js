import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCheMUafyCUYueUDqYsBL7vUP_4-JOUB3w",
    authDomain: "fitness-mobile-1e0cb.firebaseapp.com",
    projectId: "fitness-mobile-1e0cb",
    storageBucket: "fitness-mobile-1e0cb.appspot.com",
    messagingSenderId: "771420981576",
    appId: "1:771420981576:web:41bce6ec84ee9723f44b7d",
};

let app;

if (firebase.apps.length === 0) {
    // Initialize Firebase
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
