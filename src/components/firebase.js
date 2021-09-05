import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyDMaUQmXxf39TRhP0TpTj-NZ4diNdn7W6U",
    authDomain: "instaclone-d3e5e.firebaseapp.com",
    projectId: "instaclone-d3e5e",
    storageBucket: "instaclone-d3e5e.appspot.com",
    messagingSenderId: "47359185368",
    appId: "1:47359185368:web:5153481f5027b37efe62ad"
});

const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };