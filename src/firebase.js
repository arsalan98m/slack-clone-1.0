import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdafRZbtTZA1t0KEbed_fMl4HyFQ2xQvQ",
  authDomain: "slack-clone-1-de68f.firebaseapp.com",
  projectId: "slack-clone-1-de68f",
  storageBucket: "slack-clone-1-de68f.appspot.com",
  messagingSenderId: "591256840566",
  appId: "1:591256840566:web:0d426cf3d3e9297cff7257",
  measurementId: "G-FC6TFQMZK0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
