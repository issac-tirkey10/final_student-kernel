import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD2rPXVG5qMojc63yU9xgUluh_iSMdBrbg",
  authDomain: "dummy-c18d0.firebaseapp.com",
  projectId: "dummy-c18d0",
  storageBucket: "dummy-c18d0.appspot.com",
  messagingSenderId: "707547994436",
  appId: "1:707547994436:web:d3f043b34f57e7f605df11"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
