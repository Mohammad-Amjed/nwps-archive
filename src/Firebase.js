import firebase from "firebase";;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJ_3KWGHUpIJ6rTNmg5PE_sEsSw797PJ0",
    authDomain: "nwps-archive.firebaseapp.com",
    projectId: "nwps-archive",
    storageBucket: "nwps-archive.appspot.com",
    messagingSenderId: "834679441058",
    appId: "1:834679441058:web:a9cb6c8b83751f410439fb",
    measurementId: "G-W15TFG7JJV"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const auth = firebase.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, auth, timestamp, projectStorage };