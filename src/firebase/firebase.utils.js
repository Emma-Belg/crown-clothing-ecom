import firebase from "firebase/app";
import 'firebase/firestore'; //for the db
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwA6egJJ2wpUyJACIQn0TZbjyzyZKmh-k",
    authDomain: "crown-clothing-db-d983b.firebaseapp.com",
    projectId: "crown-clothing-db-d983b",
    storageBucket: "crown-clothing-db-d983b.appspot.com",
    messagingSenderId: "636421646126",
    appId: "1:636421646126:web:8a071a6a2fc4d83b40fcbf",
    measurementId: "G-TN8202L6TE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//this will trigger the Google pop up whenever we use this Google Auth provider for auth and sign in
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;