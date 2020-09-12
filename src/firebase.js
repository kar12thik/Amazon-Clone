import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChDssRH9LW7660cnZT0of4yiz-NBngW9k",
  authDomain: "clone-6a81d.firebaseapp.com",
  databaseURL: "https://clone-6a81d.firebaseio.com",
  projectId: "clone-6a81d",
  storageBucket: "clone-6a81d.appspot.com",
  messagingSenderId: "391612381602",
  appId: "1:391612381602:web:420a239ee4c9a872359afb",
  measurementId: "G-M0M71FL0R4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
